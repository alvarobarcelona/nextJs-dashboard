import { NextRequest, NextResponse } from "next/server";

// Force Vercel to rebuild - v2
export function middleware(request: NextRequest) {
  // Simple middleware that just passes through
  // Authentication is handled by the auth.ts on the server side
  return NextResponse.next();
}

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
  runtime: "experimental-edge",
};
