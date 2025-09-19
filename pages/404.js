import Link from "next/link";
import Head from "next/head";

const NotFoundPage = () => {
  return (
    <div
      className={`page bg-site text-white bg-cover bg-no-repeat font-sora relative min-h-screen flex items-center justify-center`}
    >
      <Head>
        <title>404: Halaman Tidak Ditemukan</title>
      </Head>

      <div className="container mx-auto text-center">
        <h1 className="text-6xl md:text-9xl font-extrabold text-white/20 mb-4">
          404
        </h1>
        <h2 className="h2 mb-6">Oops! Halaman Hilang.</h2>
        <p className="max-w-md mx-auto mb-12 text-white/60">
          Sepertinya halaman yang Anda cari tidak ada atau sudah dipindahkan.
          Mari kembali ke tempat yang aman.
        </p>

        <Link
          href="/"
          className="btn rounded-full border border-white/50 max-w-[200px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group mx-auto"
        >
          <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
            Kembali ke Beranda
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 -translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h7.5"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

NotFoundPage.getLayout = function getLayout(page) {
  return page;
};

export default NotFoundPage;
