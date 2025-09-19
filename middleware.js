import { NextResponse } from "next/server";
import { getIronSession } from "iron-session/edge";

export async function middleware(req) {
  const res = NextResponse.next();

  const session = await getIronSession(req, res, {
    cookieName: "portfolio-admin-session",
    password: process.env.SECRET_COOKIE_PASSWORD,
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
    },
  });

  const { user } = session;

  if (!user?.isLoggedIn) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return res;
}

export const config = {
  matcher: "/admin/:path*",
};
