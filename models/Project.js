import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  projectUrl: { type: String },
  githubUrl: { type: String },
  tags: [String],
});

export default mongoose.models.Project ||
  mongoose.model("Project", ProjectSchema);
