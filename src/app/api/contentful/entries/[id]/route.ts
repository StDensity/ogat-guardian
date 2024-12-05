import { contentfulClient } from "../../client";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const res = await contentfulClient.getEntry(id);
  return Response.json(res);
}
