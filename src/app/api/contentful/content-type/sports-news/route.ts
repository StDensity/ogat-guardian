import { contentfulClient } from "../../client";

export async function GET() {
  const res = await contentfulClient.getEntries({
    content_type: "sportsNews",
  });
  const filteredItems = res.items.map((item) => ({
    id: item.sys.id,
    fields: item.fields,
  }));
  return Response.json(filteredItems);
}
