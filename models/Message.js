import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Nama tidak boleh kosong."],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email tidak boleh kosong."],
      trim: true,
    },
    subject: {
      type: String,
      required: [true, "Subjek tidak boleh kosong."],
      trim: true,
    },
    message: {
      type: String,
      required: [true, "Pesan tidak boleh kosong."],
    },
    read: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Message ||
  mongoose.model("Message", MessageSchema);
