'use client'
import MotionItem from "@/app/components/defaults/MotionItem";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaUserFriends } from "react-icons/fa";

const page = () => {
    const [users, setUsers] = useState<User[]>([])
  useEffect(() => {
    const fetchUsers = async () =>{
        const friends = await fetch("https://dummyjson.com/users")
    .then((res) => res.json())
    .then((res) => setUsers(res.users))
    }
    fetchUsers()
  })
  return <div className="w-full flex flex-col items-start gap-3 min-h-screen">
         <MotionItem initial={{ opacity: 0, x: '-50px' }} animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }} className="flex flex-row items-center gap-3">
          <h2 className="text-4xl font-bold text-white py-5">My Friends</h2>
        <FaUserFriends className="text-4xl font-bold text-rose-500 pt-1 " />
        </MotionItem>
  <div className="flex flex-row items-center w-full flex-wrap gap-4 p-2">
   {users.map((user: User) => {
     return <MotionItem initial={{ opacity: 0, y: '-50px' }} animate={{ opacity: 1, y: 0, transition: { duration: 0.5} }} className="lg:w-[32%] w-[80%] max-w-sm mx-auto lg:mx-0 bg-white/70 border border-white/50 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <div className="flex justify-end px-4 pt-4">
        <button 
            id="dropdownButton" 
            data-dropdown-toggle="dropdown" 
            className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" 
            type="button"
        >
            <span className="sr-only">Open dropdown</span>
            <svg 
                className="w-5 h-5" 
                aria-hidden="true" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="currentColor" 
                viewBox="0 0 16 3"
            >
                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
            </svg>
        </button>
        {/* Dropdown menu */}
        <div 
            id="dropdown" 
            className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700"
        >
            <ul className="py-2" aria-labelledby="dropdownButton">
                <li>
                    <a 
                        href="#" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                        Edit
                    </a>
                </li>
                <li>
                    <a 
                        href="#" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                        Export Data
                    </a>
                </li>
                <li>
                    <a 
                        href="#" 
                        className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                        Delete
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <div className="flex flex-col items-center pb-10">
        <Image 
            width={100}
            height={100}
            className="w-24 h-24 mb-3 rounded-full shadow-lg" 
            src={user.image}
            alt="Bonnie image"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 capitalize dark:text-white">{user.username}</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">{user.email}</span>
        <div className="flex mt-4 md:mt-6">
            <a 
                href="#" 
                className="inline-flex cursor-pointer items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Select game
            </a>
            <a 
                href="#" 
                className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
                Message
            </a>
        </div>
    </div>
</MotionItem>

  })}
  </div>
  </div>
};

export default page;
