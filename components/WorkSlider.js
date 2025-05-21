import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const workSlides = {
  slides: [
    {
      images: [
        {
          title: "Dracobase - Platform Pemrograman untuk Mahasiswa",
          path: "/dracobase.png",
          link: "https://dracobase.vercel.app",
        },
        {
          title: "Port - Portal Berita universal",
          path: "/port.png",
          link: "https://kabarlokal.vercel.app",
        },
        {
          title: "Bimbingan Konseling - SMAN 17 Bandung",
          path: "/bk.png",
          link: "https://github.com/synchhans/bk-sman17bandung",
        },
        {
          title: "SIM SMK KP 2 MARGAHAYU",
          path: "/smk.png",
          link: "https://github.com/synchhans/sim-smkkp2margahayu",
        },
      ],
    },
    {
      images: [
        {
          title: "Website Kursus Menjahit dan Membuat Kue",
          path: "/kursus.png",
          link: "https://github.com/synchhans/kursus",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                    key={index}
                  >
                    <Link
                      href={image.link}
                      target="_blank"
                      className="flex items-center justify-center relative overflow-hidden group"
                    >
                      <Image src={image.path} width={500} height={300} alt="" />
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                        <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                          <div className="delay-100">LIVE</div>
                          <div className="translate-y-[500%] group-hover:translate-y-0 translation-all duration-300 delay-150">
                            PROJECT
                          </div>
                          <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                            <BsArrowRight />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
