import Head from "next/head";

const websiteUrl = "https://muhamadfarhan.vercel.app";

const SEO = ({
  title = "Muhamad Farhan - Software Engineer",
  description = "Portfolio Muhamad Farhan, seorang Web, Mobile, dan Game Developer. Lihat proyek dan keahlian saya.",
  image = "/og-image.png",
  path = "",
}) => {
  const pageTitle = title;
  const pageUrl = `${websiteUrl}${path}`;

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="portfolio, web developer, mobile developer, game developer, software engineer, muhamad farhan"
      />
      <link rel="canonical" href={pageUrl} />

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${websiteUrl}${image}`} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Muhamad Farhan Portfolio" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${websiteUrl}${image}`} />
    </Head>
  );
};

export default SEO;
