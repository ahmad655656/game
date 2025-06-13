"use client";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import type SwiperType from "swiper";
const SwiperCards = ({
  items,
  paginationImages,
  className,
  slidesPerView
}: {
  items: { src: string; card: React.ReactNode }[];
  paginationImages?: boolean;
  className?: string;
  slidesPerView?: number
}) => {
  const [swiper, setSwiper] = React.useState<SwiperType | null>();
  const [progress, setProgress] = React.useState(0);
  useEffect(() => {
    const t = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 3.7));
    }, 110);
    return () => clearInterval(t);
  }, [progress]);
  useEffect(() => {
    swiper?.on("slideChange", () => {
      setProgress(0);
    });
  }, [swiper]);
  return (
    <div
      onClick={() => {
        setProgress((prev) => prev + 1);
      }}
      className="flex flex-col gap-4"
    >
      <Swiper
        autoplay={{ delay: 3000 }}
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={slidesPerView || 1}
        className={`w-full ${className || "h-96"}`}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => setSwiper(swiper)}
      >
        {items.map(({ card }, i) => {
          return (
            <SwiperSlide className="w-full" key={i}>
              {card}
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="flex flex-row lg:flex-nowrap pl-[50px] lg:pl-0 flex-wrap items-center lg:gap-4 gap-6">
        {paginationImages &&
          items.map(({ src }, i) => (
            <div
              onClick={() => {
                swiper?.slideTo(i);
                swiper?.autoplay.stop()
              }}
              key={i}
              className={`${
                swiper?.realIndex === i &&
                "-translate-y-5 border-rose-500 z-10 border opacity-90 shadow-md"
              } cursor-pointer hover:-translate-y-7 hover:opacity-90 hover:shadow-md hover:z-10 duration-300 transition-all ease-in-out rounded-xl overflow-hidden lg:w-full w-[40%]  max-w-lg h-40 relative`}
            >
              {swiper?.realIndex === i && (
                <div
                  style={{ width: `${progress}%` }}
                  className="duration-200 absolute h-full inset-0 z-10 bg-gray-300 opacity-40"
                ></div>
              )}

              <Image alt="" src={src} fill className="object-cover" />
            </div>
          ))}
      </div>
    </div>
  );
};

export default SwiperCards;
