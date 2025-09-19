import { useState } from "react";
import Link from "next/link";
import AdminLayout from "../../components/AdminLayout";
import AdminModal from "../../components/AdminModal";
import { RiEyeLine, RiDeleteBinLine } from "react-icons/ri";

const dummyMessages = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    subject: "Peluang Kerjasama",
    read: false,
    message: "Halo, saya tertarik...",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    subject: "Pertanyaan",
    read: true,
    message: "Halo, saya ingin bertanya...",
  },
];

const MessagesPage = () => {
  const [selectedMessage, setSelectedMessage] = useState(null);

  return (
    <div className="p-4 md:p-8">
      <header className="mb-10">
        <Link href="/admin/dashboard" className="text-accent hover:underline">
          &larr; Kembali ke Dashboard
        </Link>
        <h1 className="text-4xl font-bold mt-4">Pesan Masuk</h1>
      </header>

      <div className="bg-gray-800 p-4 rounded-lg overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="p-4">Status</th>
              <th className="p-4">Nama</th>
              <th className="p-4">Subjek</th>
              <th className="p-4">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {dummyMessages.map((msg) => (
              <tr
                key={msg.id}
                className={`border-b border-gray-600 ${
                  !msg.read ? "font-bold" : "text-white/70"
                }`}
              >
                <td className="p-4">
                  {!msg.read && (
                    <span className="w-3 h-3 bg-accent rounded-full inline-block"></span>
                  )}
                </td>
                <td className="p-4">{msg.name}</td>
                <td className="p-4">{msg.subject}</td>
                <td className="p-4 flex gap-x-4">
                  <button
                    onClick={() => setSelectedMessage(msg)}
                    className="text-blue-400 hover:text-blue-300"
                  >
                    <RiEyeLine size={20} />
                  </button>
                  <button className="text-red-500 hover:text-red-400">
                    <RiDeleteBinLine size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <AdminModal
        isOpen={!!selectedMessage}
        onClose={() => setSelectedMessage(null)}
        title={`Pesan dari: ${selectedMessage?.name}`}
      >
        {selectedMessage && (
          <div className="space-y-4">
            <p>
              <strong>Email:</strong>{" "}
              <a
                href={`mailto:${selectedMessage.email}`}
                className="text-accent"
              >
                {selectedMessage.email}
              </a>
            </p>
            <p>
              <strong>Subjek:</strong> {selectedMessage.subject}
            </p>
            <hr className="border-gray-600" />
            <p className="whitespace-pre-wrap">{selectedMessage.message}</p>
          </div>
        )}
      </AdminModal>
    </div>
  );
};

MessagesPage.getLayout = function getLayout(page) {
  return <AdminLayout pageTitle="Pesan Masuk">{page}</AdminLayout>;
};

export default MessagesPage;
