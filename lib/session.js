import { withIronSessionApiRoute, withIronSessionSsr } from "iron-session/next";

export const sessionOptions = {
  password: process.env.SECRET_COOKIE_PASSWORD,
  cookieName: "portfolio-admin-session",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
  },
};

export function withSessionRoute(handler) {
  return withIronSessionApiRoute(handler, sessionOptions);
}

export function withSessionSsr(handler) {
  return withIronSessionSsr(handler, sessionOptions);
}
