import { betterFetch } from "@better-fetch/fetch";
import type { Session } from "better-auth/types";
import { NextResponse, type NextRequest } from "next/server";

export default async function authMiddleware(request: NextRequest) {
    const { data: session } = await betterFetch<Session>(
        "/api/auth/get-session",
        {
            baseURL: request.nextUrl.origin,
            headers: {
                // Forward the cookies to correctly identify the user session
                cookie: request.headers.get("cookie") || "",
            },
        },
    );

    if (!session) {
        return NextResponse.redirect(new URL("/getstarted", request.url));
    }

    return NextResponse.next();
}

export const config = {
    // Protect the dashboard route and all sub-routes
    matcher: ["/dashboard/:path*"],
};
