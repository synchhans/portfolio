import dbConnect from "../../lib/mongodb";
import Message from "../../models/Message";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      await dbConnect();

      const { name, email, subject, message } = req.body;

      if (!name || !email || !subject || !message) {
        return res
          .status(400)
          .json({ success: false, message: "Semua field wajib diisi." });
      }

      await Message.create(req.body);

      res
        .status(201)
        .json({ success: true, message: "Pesan berhasil dikirim!" });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ success: false, message: "Terjadi kesalahan pada server." });
    }
  } else {
    res
      .status(405)
      .json({ success: false, message: "Metode tidak diizinkan." });
  }
}
