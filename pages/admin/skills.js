import { useState } from "react";
import Link from "next/link";
import AdminLayout from "../../components/AdminLayout";
import AdminModal from "../../components/AdminModal";
import { RiAddLine } from "react-icons/ri";

const SkillsPage = () => {
  const [activeTab, setActiveTab] = useState("skills");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case "skills":
        return <div>Konten Tabel Skills di sini...</div>;
      case "experience":
        return <div>Konten Tabel Pengalaman di sini...</div>;
      case "education":
        return <div>Konten Tabel Pendidikan di sini...</div>;
      default:
        return null;
    }
  };

  const getModalTitle = () => {
    if (activeTab === "skills") return "Tambah Skill Baru";
    if (activeTab === "experience") return "Tambah Pengalaman Baru";
    if (activeTab === "education") return "Tambah Pendidikan Baru";
  };

  return (
    <div className="p-4 md:p-8">
      <header className="mb-10">
        <Link href="/admin/dashboard" className="text-accent hover:underline">
          &larr; Kembali ke Dashboard
        </Link>
        <div className="flex justify-between items-center mt-4">
          <h1 className="text-4xl font-bold">Skills & Pengalaman</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="btn flex items-center gap-x-2"
          >
            <RiAddLine /> Tambah Baru
          </button>
        </div>
      </header>

      <div className="flex border-b border-gray-700 mb-6">
        <button
          onClick={() => setActiveTab("skills")}
          className={`px-4 py-2 ${
            activeTab === "skills"
              ? "text-accent border-b-2 border-accent"
              : "text-gray-400"
          }`}
        >
          Skills
        </button>
        <button
          onClick={() => setActiveTab("experience")}
          className={`px-4 py-2 ${
            activeTab === "experience"
              ? "text-accent border-b-2 border-accent"
              : "text-gray-400"
          }`}
        >
          Pengalaman
        </button>
        <button
          onClick={() => setActiveTab("education")}
          className={`px-4 py-2 ${
            activeTab === "education"
              ? "text-accent border-b-2 border-accent"
              : "text-gray-400"
          }`}
        >
          Pendidikan
        </button>
      </div>

      <div className="bg-gray-800 p-4 rounded-lg">{renderContent()}</div>

      <AdminModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={getModalTitle()}
      >
        <p>Form untuk {activeTab} akan muncul di sini.</p>
      </AdminModal>
    </div>
  );
};

SkillsPage.getLayout = function getLayout(page) {
  return <AdminLayout pageTitle="Skills & Pengalaman">{page}</AdminLayout>;
};

export default SkillsPage;
