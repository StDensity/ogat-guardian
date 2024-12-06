import { Asset } from "contentful";
import { contentfulClient } from "../../client";
export async function GET() {
  const res = await contentfulClient.getEntries({
    content_type: "author",
  });
  const filteredItems = res.items.map((item) => {
    return {
      id: item.sys.id,
      fields: {
        id: item.fields.id,
        name: item.fields.name,
        role: item.fields.role,
        avatarId: (item.fields.avatar as Asset).sys.id || null,
        avatarUrl: item.fields.avatar
          ? `https:${(item.fields.avatar as Asset).fields.file?.url}`
          : null,
        avatarTitle: (item.fields.avatar as Asset).fields.title || null,
      },
    };
  });

  return Response.json(filteredItems);
}
