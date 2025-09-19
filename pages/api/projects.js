import dbConnect from "../../lib/mongodb";
import Project from "../../models/Project";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      await dbConnect();
      const projects = await Project.find({}).sort({ _id: -1 });
      res.status(200).json({ success: true, data: projects });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  } else {
    res.status(405).json({ success: false, message: "Method not allowed" });
  }
}
