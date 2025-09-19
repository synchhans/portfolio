import mongoose from "mongoose";

const ExperienceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  stage: { type: String, required: true },
});

export default mongoose.models.Experience ||
  mongoose.model("Experience", ExperienceSchema);
