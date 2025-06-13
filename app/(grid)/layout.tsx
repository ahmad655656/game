"use client";
import { MenuIcon } from "lucide-react";
import MaxWidthWrapper from "../components/defaults/MaxWidthWrapper";
import NavBar from "../components/nav/NavBar";
import SidBar from "../components/nav/SidBar";
import { useEffect, useState } from "react";
import GridContainer from "../components/defaults/GridContainer";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
      setOpen(!open);
      console.log(open)
  };
  useEffect(() => {
    const time = setTimeout(() => {
      setOpen(false)
    }, 5000)

    return () => {window.clearTimeout(time)}
  }, [open])
  return (
    <main className="grid h-full min-h-screen background">
      <GridContainer cols={12}>
        <MenuIcon
          onClick={() => handleClick()}
          className="text-3xl cursor-pointer font-semibold lg:hidden flex text-white absolute top-[30px] right-[10px] "
        />
        <div
          className={`${
            open ? "fixed z-30 bg-black/50 col-span-2 transition-all duration-400 ease-in-out " : "hidden col-span-2 transition-all duration-400 ease-in-out "
          }`}
        >
          <SidBar />
        </div>
        <div
          className={`hidden lg:flex col-span-2`}
        >
          <SidBar />
        </div>
        <MaxWidthWrapper className="col-span-full lg:col-span-10">
          <NavBar />
          {children}
        </MaxWidthWrapper>
      </GridContainer>
    </main>
  );
}
