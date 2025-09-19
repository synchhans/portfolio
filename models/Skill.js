import mongoose from "mongoose";

const SkillSchema = new mongoose.Schema({
  category: { type: String, required: true },
  name: { type: String, required: true },
  icon: { type: String, required: true },
  link: { type: String, required: true },
});

export default mongoose.models.Skill || mongoose.model("Skill", SkillSchema);
