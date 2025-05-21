import Link from "next/link";

import {
  RiYoutubeLine,
  RiInstagramLine,
  RiLinkedinLine,
  RiGithubLine,
  RiWhatsappLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href="https://drive.google.com/file/d/136W09PI_Ntc1MdMSXxpRsUwgeWVH_zor/view?usp=sharing"
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        download cv
      </Link>
      <Link
        href="https://www.instagram.com/sphansay"
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiInstagramLine />
      </Link>
      <Link
        href="https://github.com/synchhans"
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubLine />
      </Link>
      <Link
        href="https://wa.me/+6283804506486"
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiWhatsappLine />
      </Link>
      <Link
        href="https://www.linkedin.com/in/muhamadfarhaninc"
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinLine />
      </Link>
      <Link
        href="https://youtube.com/@codeworshipper"
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiYoutubeLine />
      </Link>
    </div>
  );
};

export default Socials;
