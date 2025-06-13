import Image from "next/image";
import Hero from "../components/Hero";
import { getGamesByIds, searchGames } from "../api/api";
import SwiperCards from "../components/SwiperCards";
import Link from "next/link";
import GamesSlider from "../components/GamesSlider";
//server page
export default async function Home() {
  const { data } = await searchGames("", 2, [], 9);
  const games = data.results;

  const ps5 = await searchGames("", 1, [
    { filterName: "platforms", option: "187" },
    { filterName: "ordering", option: "-metacritic" },
  ], 10);
  
    const pc = await searchGames("", 1, [{ filterName: "platforms", option: "4" }], 10);
  const customGames = await getGamesByIds(["799265", "58550", "2462", "494384", "452642", "452634"]);
console.log(customGames)
  return (
    <Link href={`/game/${games?.id}`} className="w-full">
      <Hero />
      <GamesSlider title="Top Games for PS5" games={ps5.data.results} />
      <GamesSlider big={true} slidesPerView={2} title="PLAYSTATION EXCLUSIVES" games={customGames.map((game) => game.data)} />
      <GamesSlider title="Top PC Games" games={pc.data.results} />
    </Link>
  );
}
