'use client'
import React, { useEffect, useState } from "react";
import SwiperCards from "./SwiperCards";
import Image from "next/image";
import Link from "next/link";

const GamesSlider = ({
  games,
  title,
  slidesPerView,
  big,
  description
}: {
  games: Game[];
  title: string;
  slidesPerView: number;
  big: boolean;
  description?: string
}) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [slidesInSmallScreen, setSlidesInSmallScreen] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // تحديد عدد السلايدات بناءً على عرض الشاشة
    if (screenWidth < 768) {
      setSlidesInSmallScreen(2); // 2 سلايد في الشاشة الصغيرة
    } else {
      setSlidesInSmallScreen(4); // 4 سلايد في الشاشة الكبيرة
    }

    // تنظيف المستمع عند إلغاء التركيب
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [screenWidth]);

  return (
    <div className="mt-7">
      <div className="mb-5">
        <h2 className="text-3xl text-white/80 font-semibold">{title}</h2>
      </div>
      <SwiperCards
        className="h-full"
        slidesPerView={slidesPerView ? slidesPerView : slidesInSmallScreen}
        items={games.map((game: Game) => {
          return {
            card: big ? (
              <div className="cursor-pointer rounded-2xl gap-4 w-full p-2 bg-black/40 flex flex-col lg:flex-row items-center group">
                <div className="lg:w-[55%] w-full flex flex-col items-start gap-2">
                  <h1 className="mt-2 text-xl border-b-[1px] pb-5 border-b-white text-white font-semibold">
                    {game.name}
                  </h1>
                  <p className="text-md font-medium line-clamp-4 text-white/50">
                    {game.description_raw}
                  </p>
                </div>
                <div className="lg:w-[45%] w-full h-60 rounded-2xl transition-all after:h-full after:bg-rose-500/60 after:rounded-2xl after:duration-200 overflow-hidden relative">
                  <Image
                    className="object-cover group-hover:scale-125 group-hover:rotate-6 duration-200 "
                    fill
                    src={game.background_image}
                    alt={""}
                  />
                </div>
              </div>
            ) : (
              <Link href={`game/${game.id}`} className="cursor-pointer group">
                <div className="w-full h-96 rounded-2xl hover:w-full after:absolute after:inset-0 after:w-0 hover:after:w-full transition-all after:h-full after:bg-rose-500/60 after:rounded-2xl after:duration-200 overflow-hidden relative">
                  <Image
                    className="object-cover group-hover:scale-125 group-hover:rotate-6 duration-200 "
                    fill
                    src={game.background_image}
                    alt={""}
                  />
                </div>
                <h1 className="mt-2 text-xl line-clamp-1 text-white font-semibold">
                  {game.name}
                </h1>
              </Link>
            ),
          };
        })}
      />
    </div>
  );
};

export default GamesSlider;
