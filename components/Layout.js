import Head from "next/head";

import Nav from "../components/Nav";
import Header from "../components/Header";
import TopLeftImg from "../components/TopLeftImg";

const Layout = ({ children, className }) => {
  return (
    <div
      className={`page bg-site text-white bg-cover bg-no-repeat ${className} font-sora relative`}
    >
      <Head>
        <meta name="author" content="Muhamad Farhan" />

        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="Portfolio" />
        <link rel="manifest" href="/site.webmanifest" />

        <meta
          name="_discord.muhamadfarhan.vercel.app"
          content="dh=a2164208b91cf6b69d713749c210b427a94ae2e6"
        />
      </Head>

      <TopLeftImg />
      <Nav />
      <Header />
      {children}
    </div>
  );
};

export default Layout;
