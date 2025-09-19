import Link from "next/link";
import AdminLayout from "../../components/AdminLayout";
import { RiBarChart2Line } from "react-icons/ri";

const AnalyticsPage = () => {
  return (
    <div className="p-4 md:p-8">
      <header className="mb-10">
        <Link href="/admin/dashboard" className="text-accent hover:underline">
          &larr; Kembali ke Dashboard
        </Link>
        <h1 className="text-4xl font-bold mt-4">Analitik Pengunjung</h1>
      </header>

      <div className="bg-gray-800 p-8 rounded-lg text-center flex flex-col items-center">
        <RiBarChart2Line className="text-6xl text-accent mb-4" />
        <h2 className="text-2xl font-semibold mb-2">Segera Hadir</h2>
        <p className="text-gray-400 max-w-md">
          Fitur analitik sedang dalam pengembangan dan akan tersedia di
          pembaruan mendatang untuk melacak metrik pengunjung situs Anda.
        </p>
      </div>
    </div>
  );
};

AnalyticsPage.getLayout = function getLayout(page) {
  return <AdminLayout pageTitle="Analitik">{page}</AdminLayout>;
};

export default AnalyticsPage;
