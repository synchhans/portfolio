import { withSessionRoute } from "../../../lib/session";

export default withSessionRoute(function logoutRoute(req, res) {
  req.session.destroy();
  res.status(200).json({ message: "Logged out" });
});
