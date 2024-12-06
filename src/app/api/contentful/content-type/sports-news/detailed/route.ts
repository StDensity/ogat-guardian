import { Asset, AssetDetails, Entry } from "contentful";
import { contentfulClient } from "../../../client";

export async function GET() {
  const res = await contentfulClient.getEntries({
    content_type: "sportsNews",
  });

  const filteredItems = res.items.map((item: Entry) => {
    const authorDetails = item.fields.author as Entry;
    const categoryDetails = item.fields.category as Entry[];
    const imageDetails = (item.fields.images ?? []) as Asset[];

    return {
      id: item.sys.id,
      fields: {
        newsTitle: item.fields.newsTitle,
        id: item.fields.id,
        date: item.fields.date,
        summary: item.fields.summary,
        header: item.fields.header,
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
        result: item.fields.result,
        body: item.fields.body,
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
  });

  return Response.json(filteredItems);
}
