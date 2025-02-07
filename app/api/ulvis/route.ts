import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { url } = await req.json();

    if (!url) {
      return NextResponse.json({ error: "URL is required" }, { status: 400 });
    }

    // Construct the GET request URL with only the 'url' parameter
    const apiUrl = new URL("https://ulvis.net/api.php");
    apiUrl.searchParams.append("url", url);

    const response = await fetch(apiUrl.toString());

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to shorten URL" },
        { status: 500 },
      );
    }

    const data = await response.text(); // ulvis returns the shortened URL as plain text

    return NextResponse.json({ shortUrl: data }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 },
    );
  }
}
