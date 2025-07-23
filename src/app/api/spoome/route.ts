import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { url, alias, password, maxClicks } = await req.json();

    if (!url) {
      return NextResponse.json({ error: "URL is required" }, { status: 400 });
    }

    const formData = new URLSearchParams();
    formData.append("url", url);
    if (alias) formData.append("alias", alias);
    if (password) formData.append("password", password);
    if (maxClicks) formData.append("max-clicks", maxClicks.toString());

    const response = await fetch("https://spoo.me/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
      body: formData,
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to shorten URL" },
        { status: response.status },
      );
    }

    const data = await response.json();
    return NextResponse.json({ short: data.short_url }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 },
    );
  }
}
