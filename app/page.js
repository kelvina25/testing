"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import thumbnail from "@/public/thumbnail.png";
import course from "@/public/youtube.svg";
import rating from "@/public/rating.svg";
import vector from "@/public/vector.svg";
import { Data } from "@/app/data/data";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Filter data awal hanya untuk kategori "Web Development"
    const initialData = Data.filter((item) => item.category === "Digital Marketing");
    setData(initialData);
  }, []);

  const filterType = (category) => {
    setData(
      Data.filter((item) => {
        return item.category === category;
      })
    );
  };

  return (
    <main className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-black font-bold text-6xl text-center">
        Top Rated Menu Items
      </h1>
      <p className="text-black text-center mt-4">
        Kuasai berbagai materi dari mentor berpengalaman
      </p>

      <div className="flex lg:flex-row justify-center">
        <div className="flex justfiy-between lg:flex-wrap overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide">
          <button
            onClick={() => filterType("Digital Marketing")}
            className="m-1 border rounded-4xl py-1 lg:px-0 px-5 gap-3.5 h-12 w-48 mt-6 border-black border-solid border-1 text-black bg-white hover:bg-black hover:text-white"
          >
            Digital Marketing
          </button>

          <button
            onClick={() => filterType("Web Development")}
            className="m-1 border rounded-4xl py-1 lg:px-0 px-5 gap-3.5 h-12 w-48 mt-6 border-black border-solid border-1 text-black bg-white hover:bg-black hover:text-white"
          >
            Web Development
          </button>

          <button
            onClick={() => filterType("Graphic Design")}
            className="m-1 border rounded-4xl py-1 lg:px-0 px-5 gap-3.5 h-12 w-48 mt-6 border-black border-solid border-1 text-black bg-white hover:bg-black hover:text-white"
          >
            Graphic Desain
          </button>

          <button
            onClick={() => filterType("Self Development")}
            className="m-1 border rounded-4xl py-1 lg:px-0 px-5 gap-3.5 h-12 w-48 mt-6 border-black border-solid border-1 text-black bg-white hover:bg-black hover:text-white"
          >
            Self Development
          </button>

          <button
            onClick={() => filterType("Microsoft Excel")}
            className="m-1 border rounded-4xl py-1 lg:px-0 px-5 gap-3.5 h-12 w-48 mt-6 border-black border-solid border-1 text-black bg-white hover:bg-black hover:text-white"
          >
            Microsoft Excel
          </button>

          <button
            onClick={() => filterType("UI/UX Design")}
            className="m-1 border rounded-4xl py-1 lg:px-0 px-5 gap-3.5 h-12 w-48 mt-6 border-black border-solid border-1 text-black bg-white hover:bg-black hover:text-white"
          >
            UI/UX Designing
          </button>
        </div>
      </div>

      <div className="flex flex-row gap-5 pt-4 lg:px-56 overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide">
        {data.map((item, index) => (
          <div
            key={index}
            className="border w-80 lg:w-72 h-115 shadow-3xl rounded-3xl duration-300"
          >
            <div className=" h-[185px] bg-[#FFD77A] py-10 rounded-t-3xl ">
              <div className="flex flex-row gap-2 px-2">  
                <h2 className="self-center text-lg font-bold text-white">
                  {item.name}
                </h2>
                <Image
                  className="max-w-none"
                  src={thumbnail}
                  alt={item.name}
                />
                </div>      
            </div>
            <div className="flex flex-col justify-between px-4 py-4 gap-5">
              <p className="font-bold text-black text-lg">{item.name}</p>
              <div className="flex gap-2">
                <div>
                  <Image src={course} height={11.728} width={20.991} />
                  <Image src={vector} height={1.513} width={20.27} />
                </div>
                <p className="text-sm text-black font-light">5 Videos</p>
              </div>
              <div className="flex gap-2">
                <Image
                  className="text-sm text-black font-light"
                  src={rating}
                  height={16}
                  width={21}
                />
                <p className="text-sm text-black font-light">4,5/5</p>
              </div>
              <h2 className="text-lg text-black font-bold">{item.price}</h2>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
