import React from "react";
import MaxWidthWrapper from "./defaults/MaxWidthWrapper";
import SwiperCards from "./SwiperCards";
import "swiper/css";
import Image from "next/image";
import CardInfo from "./CardInfo";
const Hero = () => {
  return (
    <div className="mt-8 ">
      <SwiperCards
        className="h-[30rem]"
        paginationImages
        items={[
          {
            src: "/poster.webp",
            card: (
              <section className="relative rounded-2xl overflow-hidden h-full w-full">
                <video
                  src=""
                  autoPlay={true}
                  muted={true}
                  loop={true}
                  className="absolute object-cover w-full h-full"
                >
                  <source src={"/spidervideo.mp4"} type="video/mp4" />
                </video>
                <CardInfo
                  description="Spider-Man is a fictional superhero created by writer-editor
                    Stan Lee and writer-artist Steve Ditko . He first appeared
                    in the anthology comic book Amazing Fantasy #15 (August
                    1962) in"
                  btnClasses={'bg-red-500 text-white hover:bg-red-400 hover:text-white'}
                  title={"SpiderMan is great"}
                  image={"/news1title.webp"}
                />
              </section>
            ),
          },
          {
            src: "/call-of-duty-black-ops-6-hero-desktop-01-en-21may24.webp",
            card: (
              <section className="relative rounded-2xl overflow-hidden h-full w-full">
                <video
                  src=""
                  autoPlay={true}
                  muted={true}
                  loop={true}
                  className=" object-top absolute object-cover w-full h-full"
                >
                  <source
                    src={
                      "/call-of-duty-black-ops-6-animated-hero-mobile-01-en-22may24.mp4"
                    }
                    type="video/mp4"
                  />
                </video>
                 <CardInfo
                  description="Call of Duty: Black Ops 6 is a first-person shooter game developed by Treyarch and published by Activision. It is the 17th main installment in the Call of Duty series  and the 6th game in the Black Ops sub-series."
                  title={"The truth lies"}
                  btnClasses={'bg-orange-500 text-white hover:bg-orange-400 hover:text-white'}
                  image={"/call-of-duty-black-ops-6-logo-01-en-21may24.webp"}
                />
              </section>
            ),
          },
          {
            src: "/bg2.jpg",
            card: (
              <section className="relative rounded-2xl overflow-hidden h-full w-full">
                <Image src={"/bg2.jpg"} alt="" fill className="text-white w-full h-full object-cover object-top rounded-2xl inset-0" />
                <CardInfo
                  description="A legendary hero, a legendary story, a legendary game ."
                  title={"Shake the earth.Break the universe!"}
                  image={"/Dragon-Ball-Sparking-Zero-logo-01-03oct24.webp"}
                  btnClasses={'bg-white text-black hover:bg-black hover:text-white'}
                />
              </section>
            ),
          },
          {
            src: "/cyb.webp",
            card: (
              <section className="relative rounded-2xl overflow-hidden h-full w-full">
                <video
                  src=""
                  autoPlay={true}
                  muted={true}
                  loop={true}
                  className="absolute object-cover w-full h-full"
                >
                  <source
                    src={
                      "/cyberpunk-2077-phantom-liberty-video-hero-01-en-11sep23.mp4"
                    }
                    type="video/mp4"
                  />
                </video>
                 <CardInfo
                  btnClasses={'bg-red-500 z-20 text-white text-black hover:bg-red-400 hover:text-white'}
                  description ="Cyberpunk 2077 is a role-playing video game developed by CD Projekt RED. It is the second main game in the Cyberpunk series, following Cyberpunk 2020."
                  title={"Freedom Always Comes At A Price..."}
                  image={"/iconcyber.webp"}
                />
              </section>
            ),
          },
        ]}
      />
    </div>
  );
};

export default Hero;
