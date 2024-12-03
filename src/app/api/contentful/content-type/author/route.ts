import { contentfulClient } from "@/lib/utils";
import { Asset } from "contentful";
export async function GET() {
  const res = await contentfulClient.getEntries({
    content_type: "author",
  });
  console.log(res);
  const filteredItems = res.items.map((item) => {
    const avatarId = (item.fields.avatar as Asset) || null;
    return {
      id: item.sys.id,
      fields: {
        id: item.fields.id,
        name: item.fields.name,
        avatarId: (item.fields.avatar as Asset).sys.id || null,
        avatarUrl: item.fields.avatar
          ? // @ts-ignore
            `https:${item.fields.avatar.fields.file.url}`
          : null,
      },
    };
  });

  return Response.json(filteredItems);
}
