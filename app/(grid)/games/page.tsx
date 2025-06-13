"use client";
import Pagination from "@/app/components/Pagination";
import { APIURL, KEY } from "@/app/constants";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import MotionItem from "@/app/components/defaults/MotionItem";
import Link from "next/link";

const Page: React.FC = () => {
  const [activeId, setActiveId] = useState<number>(0);
  const [generes, setGeneres] = useState<Genre[]>([]);
  const [gamesData, setGamesData] = useState<Game[]>([]);
  const [disablePrev, setDisablePrev] = useState<boolean>(true);
  const [disableNext, setDisableNext] = useState<boolean>(false);
  const [screenWidth, setScreenWidth] = useState(0);
  const [id, setId] = useState(0);
  const [smallScreen, setSmallScreen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setSmallScreen(window.innerWidth <= 768)
    };
    window.addEventListener("resize", handleResize);
   handleResize() 
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const genreResponse = await fetch(`${APIURL}genres?key=${KEY}`);
        const genreData = await genreResponse.json();
        const sortedGenres: Genre[] = genreData.results
          .slice(0, 19)
          .sort((a: Genre, b: Genre) => a.id - b.id);
        setGeneres(sortedGenres);
        setActiveId(1);
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };

    fetchData();
  }, []); // Fetch genres only once when the component mounts

  useEffect(() => {
    const fetchGamesData = async () => {
      if (!generes.length || activeId < 0 || activeId >= generes.length) {
        setGamesData([]);
        return;
      }
      try {
        const genreIds = activeId; // Use the current id directly
        const gameResponse = await fetch(
          `${APIURL}games?genres=${genreIds}&page_size=15&key=${KEY}`
        );
        const gameData = await gameResponse.json();
        console.log("Fetched games data:", gameData); // تحقق من البيانات المسترجعة
        setGamesData(gameData.results || []);
      } catch (error) {
        console.error("Error fetching games data:", error);
        setGamesData([]);
      }
    };

    fetchGamesData();
  }, [activeId, generes]); // Fetch games data whenever id changes

  const handleGeneres = (id: number) => {
    setActiveId(id);
  };
  const handlePrevious = () => {
    setActiveId((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };
  const handleNext = () => {
    setActiveId((prevIndex) =>
      prevIndex < generes.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const handleNumberSelected = (num: number) => {
    setActiveId(num);
  };

  useEffect(() => {
    setDisablePrev(activeId <= 1);
    setDisableNext(activeId >= generes.length - 1);
    console.log(
      "Active ID:",
      activeId,
      "Disable Next:",
      activeId >= generes.length
    ); // تحقق من حالة الأزرار
  }, [activeId, generes.length]);

  return (
    <div className="w-full min-h-screen">
      <div className="flex flex-col items-center lg:items-start gap-4">
        <MotionItem
          initial={{ opacity: 0, x: "-50px" }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, delay: 0.4 },
          }}
          className="text-4xl mt-5 text-white font-bold"
        >
          Games From Genres
        </MotionItem>
        <div className="w-full flex relative flex-col items-center lg:flex-row lg:items-start gap-3 max-h-full">
          {smallScreen ? (
            <form className="max-w-sm mx-auto">
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select an Generes
              </label>
              <select
              onChange={(e) => handleGeneres(Number(e.target.value))} // تحويل القيمة إلى رقم
                id="countries"
                style={{ scrollbarWidth: "none" }}
                className="bg-black text-white/80 text-sm rounded-lg py-3 px-2 outline-none"
              >
                {generes.map((item) => (
                  <option
                    key={item.id}
                    value={item.id}
                    className={`${
                      activeId === item.id
                        ? "text-rose-500 border-b-[2px] border-b-rose-500 shadow-xl "
                        : "text-white"
                    } transition-all p-1 cursor-pointer ease-in-out duration-300 text-xl line-clamp-1 text-center`}
                  >
                    {item.name}
                  </option>
                ))}
              </select>
            </form>
          ) : (
            <MotionItem
              initial={{ opacity: 0, x: "-50px" }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.5, delay: 0.6 },
              }}
              className="h-full sticky top-0 rounded-2xl w-[20%] bg-zinc-700 text-white flex flex-col items-center p-2 text-2xl font-semibold gap-4"
            >
              {generes.map((item) => (
                <h3
                  key={item.id}
                  className={`${
                    activeId === item.id
                      ? "text-rose-500 border-b-[2px] border-b-rose-500 shadow-xl "
                      : "text-white"
                  } transition-all p-1 cursor-pointer ease-in-out duration-300 text-xl line-clamp-1 text-center`}
                  onClick={() => handleGeneres(item.id)}
                >
                  {item.name}
                </h3>
              ))}
            </MotionItem>
          )}
          <div className="h-full w-full lg:w-[80%]">
            <div className="flex flex-row flex-wrap items-center">
              {gamesData.map((game) => (
                <Link href={`game/${game.id}`} className="w-[33%] h-[55vh] ">
                  <MotionItem
                    initial={{ opacity: 0, y: "-50px" }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5 },
                    }}
                    className="flex flex-col group w-[100%] h-[100%] items-start gap-3 p-2 rounded-lg"
                    key={game.id}
                  >
                    <div className="relative w-full h-[80%]">
                      <Image
                        src={game.background_image}
                        alt={game.name}
                        fill
                        className="object-cover transition-all ease-in-out duration-300 group-hover:opacity-80 rounded-lg"
                      />
                    </div>
                    <h3 className="text-lg text-white font-semibold line-clamp-1">
                      {game.name}
                    </h3>
                  </MotionItem>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <Pagination
          disableNext={disableNext}
          disablePrev={disablePrev}
          previous={handlePrevious}
          Next={handleNext}
          one={() => handleNumberSelected(1)}
          two={() => handleNumberSelected(2)}
          three={() => handleNumberSelected(3)}
        />
      </div>
    </div>
  );
};

export default Page;
{
  /* <h3
                key={item.id}
                className={`${
                  activeId === item.id
                    ? "text-rose-500 border-b-[2px] border-b-rose-500 shadow-xl "
                    : "text-white"
                } transition-all p-1 cursor-pointer ease-in-out duration-300 text-xl line-clamp-1 text-center`}
                onClick={() => handleGeneres(item.id)}
              >
                {item.name}
              </h3> */
}
