"use client";
import { getAllPlatforms, getGamesByIds } from "@/app/api/api";
import TopSectionCategory from "@/app/components/TopSectionCategory";
import React, { useEffect, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
const Page = () => {
  const [platforms, setPlatforms] = useState<Platform[]>([]);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
  const [games, setGames] = useState<Game[]>([]);
  const idGame: Array<string> = [];
  const [gameFromId, setGameFromId] = useState<object[]>([]);
  const width: number = 0;
  useEffect(() => {
    const fetchPlatforms = async () => {
      const allPlatforms = await getAllPlatforms();
      setPlatforms(allPlatforms.results);
    };
    fetchPlatforms();
  }, []);
  useEffect(() => {
    games?.map((game: Game) => idGame.push(String(game.id)));
    console.log(idGame || []);
    const fetchGames = async () => {
      const games: object[] = await getGamesByIds(idGame);
      console.log(games);
      setGameFromId(games ?? null);
      console.log(gameFromId || []);
    };
    fetchGames();
  }, [games]);
  const handleSelect = (name: string) => {
    const selectedPlatform = platforms.find(
      (platform: Platform) => platform.name === name
    );
    if (selectedPlatform) {
      setSelectedPlatform(selectedPlatform);
      setGames(selectedPlatform.games);
    } else {
      console.log("platform not found");
    }
  };

  useEffect(() => {
    if (platforms.length > 0) {
      const defaultPlatform = platforms.find(
        (platform: Platform) => platform.id === 1
      );
      setSelectedPlatform(defaultPlatform ?? null);
      setGames(defaultPlatform?.games ?? []);
    }
  }, [platforms]);
  useEffect(() => {
    if (games.length > 0) {
      games?.map((game: Game) => idGame.push(String(game.id)));
      const fetchGames = async () => {
        const games: object[] = await getGamesByIds(idGame);
        setGameFromId(games ?? []);
      };
      fetchGames();
    }
  }, [games]);

  const handleWidth = (width: number) => {
    width = width;
    console.log(width);
    return width;
  };
  console.log(gameFromId);
  return (
    <div className="w-full flex flex-col items-start gap-3 min-h-screen">
      <div>
        <form className="max-w-sm mx-auto">
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select an option
          </label>
          <select
            id="countries"
            style={{ scrollbarWidth: "none" }}
            onChange={(e) => handleSelect(e.target.value)}
            className="bg-black/40 text-white/80 text-sm rounded-lg py-3 px-2 outline-none"
          >
            <option selected>
              {
                platforms.find(
                  (platform: Platform) => platform.name === "PlayStation 5"
                )?.name
              }
            </option>
            {platforms.map((platform: Platform) => (
              <option
                key={platform.id}
                value={platform.name}
                className="font-semibold bg-black/40"
              >
                {platform.name}
              </option>
            ))}
          </select>
        </form>
      </div>
      <div className="w-full flex flex-col items-start gap-3">
        <div>
          {selectedPlatform && (
            <TopSectionCategory
              name={selectedPlatform.name}
              image={selectedPlatform.image_background}
              gamesCount={selectedPlatform.games_count}
            />
          )}
        </div>
        {gameFromId && (
          <Swiper
            autoplay={{ delay: 3000 }}
            modules={[Autoplay]}
            spaceBetween={15}
            slidesPerView={3}
            className={`w-full`}
          >
            {gameFromId?.map((game: any) => {
              return (
                <SwiperSlide>
                  <div className="flex h-[50vh] bg-black/60 rounded-lg mb-5 gap-2 shadow-lg hover:shadow-2xl transition-all duration-200 ease-in-out cursor-pointer flex-col items-start">
                    <div className="relative w-full h-[70%]  ">
                      <Image
                        src={game.data.background_image}
                        fill
                        className="object-cover rounded-t-lg"
                        alt=""
                      />
                    </div>
                    <h1 className="text-lg font-semibold text-white px-2">
                      {game.data.name}
                    </h1>
                    <p className="w-full h-[100px] px-2 text-white/50">
                      {game.data.description_raw.slice(0, 50)}...
                    </p>
                    <div className="flex flex-row  items-center w-full gap-3 p-3 mb-2">
                     <div className="w-[70%] h-[20px] bg-gray-500 rounded-lg">
                       <div
                        style={{
                          width: `${handleWidth(game.data.rating * 10)}%`,
                          height: "20px",
                          backgroundColor: "yellow",
                          display: "flex",
                          zIndex: "30",
                        }}
                        className="rounded-lg"
                      ></div>
                     </div>
                      <h2 className="text-white line-clamp-1">
                        {(game.data.rating * 10).toFixed(2)}%
                      </h2>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default Page;
