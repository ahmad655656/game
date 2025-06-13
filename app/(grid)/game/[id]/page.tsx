"use client";
import { getGame } from "@/app/api/api";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import Link from "next/link";
import MotionItem from "@/app/components/defaults/MotionItem";
import { delay } from "framer-motion";
const page = () => {
  const param = useParams();
  const [game, setGame] = useState<Game>();
  const [screenShots, setScreenShots] = useState<Screenshot[]>();
  const [similar, setSimilar] = useState<SimilarGame[]>();
  const [screenWidth, setScreenWidth] = useState(0)
  const [slidesPerView, setSlidesPerView] = useState<number>(0)

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize);

    if (screenWidth <= 768) {
      setSlidesPerView(2)
    }
    else{
      setSlidesPerView(4)
    }
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  console.log(param.id);
  useEffect(() => {
    const fetchGame = async () => {
      const game = await getGame(String(param.id));
      setGame(game.data);
      setScreenShots(game.screenshots.results);
      setSimilar(game.similar.results);
    };
    fetchGame();
  });
  return (
    <section className="my-6 min-h-screen dark:bg-gray-900">
      <div className="px-6 items-center flex flex-col gap-4 py-10 mx-auto">
        <MotionItem
          initial={{ opacity: 0, x: "-30px" }}
          animate={{ opacity: 1, x: "0px", transition: { delay: 0.4 } }}
          className="lg:-mx-6 lg:flex lg:items-center"
        >
          <img
            className="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]"
            src={game?.background_image}
            alt=""
          />

          <div className="lg:w-1/2 lg:px-6 lg:mt-0">
            <h1 className="text-2xl font-semibold text-rose-500 dark:text-white lg:text-3xl lg:w-96">
              {game?.name}
            </h1>

            <p className="max-w-lg mt-6 text-gray-500 line-clamp-6 dark:text-gray-400 ">
              {game?.description_raw}
            </p>

            <h3 className="mt-6 text-lg font-medium text-blue-500">
              {game?.rating}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {game?.added} times
            </p>
            <div className="flex flex-col items-start mt-3 gap-3">
              <div className="flex flex-row items-center justify-start gap-5">
                <p className="text-gray-600 dark:text-gray-300">
                  Updated : {game?.updated}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Playtime : {game?.playtime}
                </p>
              </div>
              <div className="flex flex-row items-center justify-start gap-5">
                <p className="text-gray-600 dark:text-gray-300">
                  RatingsCount : {game?.ratings_count}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  ReviewsCount : {game?.reviews_count}
                </p>
              </div>
            </div>
          </div>
        </MotionItem>
        <MotionItem
          initial={{ opacity: 0, y: "-30px" }}
          animate={{ opacity: 1, y: "0px", transition: { delay: 0.5 } }}
          className="w-full flex flex-col items-start gap-3"
        >
          <h1 className="text-2xl font-semibold text-white/70">
            ScreenShots:{" "}
          </h1>
          {screenShots && (
            <Swiper
              autoplay={{ delay: 2000 }}
              modules={[Autoplay]}
              slidesPerView={slidesPerView}
              spaceBetween={10}
              className="w-full h-[50vh]"
            >
              {screenShots?.map((item: Screenshot) => {
                return (
                  <SwiperSlide key={item.id}>
                    <div className="w-full h-full relative">
                      <Image
                        src={item.image}
                        alt=""
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          )}
        </MotionItem>
        <MotionItem
          initial={{ opacity: 0, y: "-30px" }}
          animate={{ opacity: 1, y: "0px", transition: { delay: 0.6 } }}
          className="w-full flex flex-col items-start gap-3"
        >
          <h1 className="text-2xl font-semibold text-white/70">Similar: </h1>
          {similar && similar.length > 0 ? (
            <Swiper
              autoplay={{ delay: 2000 }}
              modules={[Autoplay]}
              slidesPerView={slidesPerView}
              spaceBetween={10}
              className="w-full h-[50vh]"
            >
              {similar.map((item: SimilarGame) => {
                return (
                  <SwiperSlide key={item.id}>
                    <Link href={`${item.id}`}>
                      <div className="w-full h-[70%] relative">
                        <Image
                          src={item.background_image}
                          alt=""
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                      <p className="text-lg line-clamp-1 mx-auto font-semibold text-rose-500">
                        {item.name}
                      </p>
                    </Link>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          ) : (
            <div className="flex items-center justify-center w-full h-[50vh]">
              <h1 className="text-3xl font-bold text-rose-500 text-center">
                لا توجد ألعاب مشابهة متاحة
              </h1>
            </div>
          )}
        </MotionItem>
      </div>
    </section>
  );
};

export default page;
