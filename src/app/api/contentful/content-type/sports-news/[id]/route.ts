import { Entry, Asset, AssetDetails } from "contentful";
import { contentfulClient } from "../../../client";
import { sportNewsDataDetailedType } from "@/types/contentful";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const res = await contentfulClient.getEntry(id);

  const authorDetails = res.fields.author as Entry;
  const categoryDetails = res.fields.category as Entry[];
  const imageDetails = (res.fields.images ?? []) as Asset[];

  const filteredItems = {
    id: res.sys.id,
    fields: {
      newsTitle: res.fields.newsTitle,
      id: res.fields.id,
      date: res.fields.date,
      summary: res.fields.summary,
      header: res.fields.header,
      result: res.fields.results,
      author: {
        id: authorDetails.sys.id,
        fields: {
          id: authorDetails.fields.id,
          name: authorDetails.fields.name,
          avatar: {
            id: (authorDetails.fields.avatar as Asset).sys.id,
            title: (authorDetails.fields.avatar as Asset).fields.title,
            url: `https:${(authorDetails.fields.avatar as Asset).fields.file?.url}`,
          },
        },
      },
      category: categoryDetails.map((data) => {
        return {
          id: data.sys.id,
          fields: data.fields,
        };
      }),
      body: res.fields.body,
      images: imageDetails.map((data) => {
        return {
          id: data.sys.id,
          fields: {
            title: data.fields.title,
            description: data.fields.description,
            fileName: data.fields.file?.fileName,
            url: `https:${data.fields.file?.url}`,
            width:
              (imageDetails[0].fields.file?.details as AssetDetails)?.image
                ?.width ?? 0,
            height:
              (imageDetails[0].fields.file?.details as AssetDetails)?.image
                ?.width ?? 0,
          },
        };
      }),
    },
  };

  return Response.json(filteredItems);
}
