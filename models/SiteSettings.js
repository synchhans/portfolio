import mongoose from "mongoose";

const SiteSettingsSchema = new mongoose.Schema(
  {
    key: {
      type: String,
      default: "main_settings",
      unique: true,
    },
    headlineLine1: {
      type: String,
      default: "Fullstack and",
    },
    headlineLine2: {
      type: String,
      default: "Mobile",
    },
    headlineHighlight: {
      type: String,
      default: "Developer",
    },
    description: {
      type: String,
      default: "I am a fullstack developer with a strong background...",
    },
    cvUrl: { type: String, default: "#" },
    githubUrl: { type: String, default: "#" },
    instagramUrl: { type: String, default: "#" },
    whatsappUrl: { type: String, default: "#" },
    linkedinUrl: { type: String, default: "#" },
    youtubeUrl: { type: String, default: "#" },

    aboutHeadline: {
      type: String,
      default: "Captivating stories birth",
    },
    aboutHighlight: {
      type: String,
      default: "magnificents desings.",
    },
    aboutDescription: {
      type: String,
      default:
        "2 years ago, I started freelancing as a web developer. Since then...",
    },

    experienceYears: {
      type: Number,
      default: 2,
    },
    satisfiedClients: {
      type: Number,
      default: 4,
    },
    finishedProjects: {
      type: Number,
      default: 10,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.SiteSettings ||
  mongoose.model("SiteSettings", SiteSettingsSchema);
