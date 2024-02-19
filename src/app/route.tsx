import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function POST(req: NextApiRequest) {
  const requestUrl = new URL(req.url || "");

  const bodyText = JSON.stringify(req.body);
  const formData = parseFormData(bodyText);

  const toolConsumerInfoProductFamilyCode =
    formData.tool_consumer_info_product_family_code;
  console.log(toolConsumerInfoProductFamilyCode);
  return NextResponse.redirect(`${requestUrl.origin}/pages/main`, {
    status: 302,
  });
}

export async function GET(req: NextApiRequest) {
  const requestUrl = new URL(req.url || "");

  return NextResponse.redirect(`${requestUrl.origin}/pages/main`, {
    status: 302,
  });
}

function parseFormData(bodyText: string): Record<string, string> {
  const formData: Record<string, string> = {};
  const fields = bodyText.split("\r\n");

  fields.forEach((field) => {
    const [name, value] = field.split(": ");
    formData[name] = value;
  });

  return formData;
}
