import { Asset, Entry } from "contentful";
import { contentfulClient } from "../../client";

export async function GET() {
  const res = await contentfulClient.getEntries({
    content_type: "normalNews",
  });

  const filteredItems = res.items.map((item: Entry) => {
    const authorDetails = item.fields.author as Entry;
    const categoryDetails = item.fields.category as Entry[];
    const imageDetails = (item.fields.images ?? []) as Asset[];

    return {
      // Truncated content. does not return body and only returns one image
      // use /detailed for more detailed content
      id: item.sys.id,
      fields: {
        newsTitle: item.fields.newsTitle,
        id: item.fields.id,
        date: item.fields.date,
        summary: item.fields.summary,
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
        // body: item.fields.body,
        images: imageDetails[0]
          ? {
              id: imageDetails[0].sys.id,
              fields: {
                title: imageDetails[0].fields.title,
                description: imageDetails[0].fields.description,
                fileName: imageDetails[0].fields.file?.fileName,
                url: `https:${imageDetails[0].fields.file?.url}`,
                // @ts-ignore
                width: imageDetails[0].fields.file?.details?.image?.width ?? 0,
                // @ts-ignore
                height: imageDetails[0].fields.file?.details?.image?.width ?? 0,
              },
            }
          : null,
      },
    };
  });

  return Response.json(filteredItems);
}
