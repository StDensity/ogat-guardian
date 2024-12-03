import { contentfulClient } from "@/lib/utils";

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  const { id } = await params;
  const res = await contentfulClient.getEntry(id);
  return Response.json(res);
}
