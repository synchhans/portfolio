import Head from "next/head";

const AdminLayout = ({ children, pageTitle = "Admin Panel" }) => {
  return (
    <div className="bg-site text-white bg-cover bg-no-repeat font-sora h-screen overflow-hidden flex flex-col">
      <Head>
        <title>{pageTitle} | Portfolio Admin</title>
      </Head>

      <main className="flex-grow overflow-y-auto scrollbar-thin scrollbar-thumb-accent/80 scrollbar-track-white/10">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
