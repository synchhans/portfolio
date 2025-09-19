import mongoose from "mongoose";

const EducationSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Judul pendidikan tidak boleh kosong."],
      trim: true,
    },

    stage: {
      type: String,
      required: [true, "Rentang waktu pendidikan tidak boleh kosong."],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Education ||
  mongoose.model("Education", EducationSchema);
