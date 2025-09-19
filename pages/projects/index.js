import WorkSlider from "../../components/WorkSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Link from "next/link";
import SEO from "../../components/SEO";

const Work = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <SEO
        title="Projek Saya | Muhamad Farhan"
        description="Lihat lebih detail, Proyek apa saja yang sudah saya selesaikan"
        path="/projects"
      />
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-12"
            >
              Projects <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              These are some highlighted works. I have developed a variety of
              web and app projects, utilizing technologies I&apos;m proficient
              in, with a focus on responsive design and dynamic functionality.{" "}
              <br /> To see more of my work, visit{" "}
              <Link
                href="https://github.com/synchhans"
                target="_blank"
                className="text-accent"
              >
                my GitHub
              </Link>
              .
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
