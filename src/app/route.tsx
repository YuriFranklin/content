import { NextApiRequest } from "next";
import { NodeNextRequest } from "next/dist/server/base-http/node";
import { NextResponse } from "next/server";

export async function POST(req: any) {
  const requestUrl = new URL(req.url || "");

  console.log(await req.formData());
  return NextResponse.redirect(`http://yuri.dev.br/pages/main`, {
    status: 302,
  });
}

/* export async function GET(req: any) {
  const requestUrl = new URL(req.url || "");

  return NextResponse.redirect(`http://yuri.dev.br/pages/main`, {
    status: 302,
  });
} */
