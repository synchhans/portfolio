import { useState } from "react";
import Link from "next/link";
import AdminLayout from "../../components/AdminLayout";
import AdminModal from "../../components/AdminModal";
import { RiPencilLine, RiDeleteBinLine, RiAddLine } from "react-icons/ri";

const dummyProjects = [
  {
    id: 1,
    title: "Aplikasi E-Commerce",
    description: "Dibangun dengan Next.js dan TailwindCSS.",
  },
  {
    id: 2,
    title: 'Mobile Game "Space Shooter"',
    description: "Game 2D yang dibuat dengan Flutter.",
  },
];

const ProjectsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState(null); 

  const handleOpenModal = (project = null) => {
    setEditingProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingProject(null);
  };

  return (
    <div className="p-4 md:p-8">
      <header className="mb-10">
        <Link href="/admin/dashboard" className="text-accent hover:underline">
          &larr; Kembali ke Dashboard
        </Link>
        <div className="flex justify-between items-center mt-4">
          <h1 className="text-4xl font-bold">Kelola Proyek</h1>
          <button
            onClick={() => handleOpenModal()}
            className="btn flex items-center gap-x-2"
          >
            <RiAddLine /> Tambah Proyek
          </button>
        </div>
      </header>

      <div className="bg-gray-800 p-4 rounded-lg overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="p-4">Judul</th>
              <th className="p-4">Deskripsi</th>
              <th className="p-4">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {dummyProjects.map((project) => (
              <tr
                key={project.id}
                className="border-b border-gray-600 hover:bg-gray-700/50"
              >
                <td className="p-4">{project.title}</td>
                <td className="p-4">{project.description}</td>
                <td className="p-4 flex gap-x-4">
                  <button
                    onClick={() => handleOpenModal(project)}
                    className="text-blue-400 hover:text-blue-300"
                  >
                    <RiPencilLine size={20} />
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
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={editingProject ? "Edit Proyek" : "Tambah Proyek Baru"}
      >
        <form className="space-y-4">
          <div>
            <label htmlFor="title" className="block mb-2">
              Judul Proyek
            </label>
            <input
              type="text"
              id="title"
              defaultValue={editingProject?.title}
              className="input w-full"
            />
          </div>
          <div>
            <label htmlFor="description" className="block mb-2">
              Deskripsi Singkat
            </label>
            <textarea
              id="description"
              defaultValue={editingProject?.description}
              rows="3"
              className="textarea w-full"
            ></textarea>
          </div>
          <div>
            <label htmlFor="imageUrl" className="block mb-2">
              URL Gambar (dari Cloudinary)
            </label>
            <input type="text" id="imageUrl" className="input w-full" />
          </div>
          <div>
            <label htmlFor="projectUrl" className="block mb-2">
              URL Proyek (Live Demo)
            </label>
            <input type="url" id="projectUrl" className="input w-full" />
          </div>
          <div>
            <label htmlFor="githubUrl" className="block mb-2">
              URL GitHub
            </label>
            <input type="url" id="githubUrl" className="input w-full" />
          </div>
          <div className="pt-4 flex justify-end">
            <button type="submit" className="btn">
              {editingProject ? "Simpan Perubahan" : "Buat Proyek"}
            </button>
          </div>
        </form>
      </AdminModal>
    </div>
  );
};

ProjectsPage.getLayout = function getLayout(page) {
  return <AdminLayout pageTitle="Kelola Proyek">{page}</AdminLayout>;
};

export default ProjectsPage;
