import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch("https://github-contributions-api.jogruber.de/v4/SaiAmirthesh?y=last", {
      headers: {
        "User-Agent": "Mozilla/5.0",
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch contributions: ${res.status}`);
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || "Failed to fetch GitHub contributions" }, { status: 500 });
  }
}
