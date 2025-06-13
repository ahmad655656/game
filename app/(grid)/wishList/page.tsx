import React from "react";
import { BsHeartFill } from "react-icons/bs";

const page = () => {
  return (
    <div>
      <div className="flex min-h-[30%] items-center gap-2 w-[40vw] ">
        <h1 className="text-4xl text-white font-bold py-7">My WishList</h1>
        <BsHeartFill className="text-3xl text-red-600 font-bold" />
      </div>
      <div className="h-[70%] flex flex-col pt-[60px] items-center justify-center">
        <p className="text-3xl text-white font-bold text-center">
            You have not added anything to your wishlist yet !
        </p>
        <a href="#" className="text-2xl text-rose-500 font-semibold">
Browse More Games
        </a>
      </div>
    </div>
  );
};

export default page;
