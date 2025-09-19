import Link from "next/link";
import { useRouter } from "next/router";
import AdminLayout from "../../components/AdminLayout";
import {
  RiSettings3Line,
  RiQuillPenLine,
  RiLightbulbFlashLine,
  RiMailLine,
  RiBarChart2Line,
} from "react-icons/ri";

const AdminDashboard = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/auth/logout");
    router.push("/login");
  };

  const menuItems = [
    {
      href: "/admin/settings",
      icon: <RiSettings3Line className="text-3xl mb-2" />,
      title: "Pengaturan Umum",
      description: "Kelola judul, deskripsi, dan link sosial media.",
    },
    {
      href: "/admin/projects",
      icon: <RiQuillPenLine className="text-3xl mb-2" />,
      title: "Proyek",
      description: "Tambah, edit, atau hapus proyek portofolio Anda.",
    },
    {
      href: "/admin/skills",
      icon: <RiLightbulbFlashLine className="text-3xl mb-2" />,
      title: "Skills & Pengalaman",
      description: "Kelola daftar skill, pengalaman, dan pendidikan.",
    },
    {
      href: "/admin/messages",
      icon: <RiMailLine className="text-3xl mb-2" />,
      title: "Pesan Masuk",
      description: "Lihat pesan yang dikirim melalui form kontak.",
    },
    {
      href: "/admin/analytics",
      icon: <RiBarChart2Line className="text-3xl mb-2" />,
      title: "Analitik",
      description: "Lihat analitik pengunjung website (segera hadir).",
    },
  ];

  return (
    <div className="p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-10 gap-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-accent">
            Admin Dashboard
          </h1>
          <button onClick={handleLogout} className="btn">
            Logout
          </button>
        </header>

        <p className="mb-8">
          Selamat datang di Panel Master. Pilih data yang ingin Anda kelola.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors flex flex-col"
            >
              {item.icon}
              <h2 className="text-xl sm:text-2xl font-semibold mb-2">
                {item.title}
              </h2>
              <p className="text-gray-400 text-sm sm:text-base">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

AdminDashboard.getLayout = function getLayout(page) {
  return <AdminLayout pageTitle="Dashboard">{page}</AdminLayout>;
};

export default AdminDashboard;
