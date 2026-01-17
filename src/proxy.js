import { NextResponse } from "next/server";

export function proxy(request) {
  const authCookie = request.cookies.get("auth");

  // protected route
  if (request.nextUrl.pathname.startsWith("/add-item")) {
    if (!authCookie) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
}

export const config = {
  matcher: ["/add-item/:path*"],
};
