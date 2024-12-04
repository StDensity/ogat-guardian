import { contentfulClient } from "../../../client";

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  const { id } = await params;
  const res = await contentfulClient.getEntry(id);
  // const filteredItem = {
  //   id: res.sys.id,
  //   fields: res.fields,
  // };
  return Response.json(res);
}
