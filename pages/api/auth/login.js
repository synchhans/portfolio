import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "../../../lib/session.js";

async function loginRoute(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { password } = req.body;

  if (password === process.env.ADMIN_PASSWORD) {
    req.session.user = {
      isLoggedIn: true,
    };
    await req.session.save();
    res.status(200).json({ message: "Login successful" });
  } else {
    res.status(401).json({ message: "Invalid password" });
  }
}

export default withIronSessionApiRoute(loginRoute, sessionOptions);
