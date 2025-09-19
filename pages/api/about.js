import dbConnect from "../../lib/mongodb";
import Skill from "../../models/Skill";
import Experience from "../../models/Experience";
import Education from "../../models/Education";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      await dbConnect();

      const skills = await Skill.find({});
      const experiences = await Experience.find({}).sort({ _id: -1 });
      const educations = await Education.find({}).sort({ _id: -1 });

      const groupedSkills = skills.reduce((acc, skill) => {
        if (!acc[skill.category]) {
          acc[skill.category] = [];
        }
        acc[skill.category].push(skill);
        return acc;
      }, {});

      const skillsForClient = Object.keys(groupedSkills).map((category) => ({
        title: category,
        skills: groupedSkills[category],
      }));

      res.status(200).json({
        success: true,
        data: { skills: skillsForClient, experiences, educations },
      });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ success: false, message: "Method not allowed" });
  }
}
