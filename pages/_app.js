import "../styles/globals.css";

import Layout from "../components/Layout";
import Transition from "../components/Transition";

import { useRouter } from "next/router";

import { AnimatePresence, motion } from "framer-motion";

import { Sora } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora", 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const getLayout =
    Component.getLayout ||
    ((page) => <Layout className={sora.variable}>{page}</Layout>);

  return getLayout(
    <AnimatePresence mode="wait">
      <motion.div key={router.route} className="h-full">
        <Transition />
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;
