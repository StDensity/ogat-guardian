import { contentfulClient } from "../../../client";
import { Asset } from "contentful";

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  const { id } = await params;
  const res = await contentfulClient.getEntry(id);
  const filteredItem = {
    id: res.sys.id,
    fields: {
      id: res.fields.id,
      name: res.fields.name,
      avatarId: (res.fields.avatar as Asset).sys.id || null,
      avatarUrl: res.fields.avatar
        ? // @ts-ignore
          `https:${res.fields.avatar.fields.file.url}`
        : null,
      avatarTitle: (res.fields.avatar as Asset).fields.title || null,
    },
  };
  return Response.json(filteredItem);
}
