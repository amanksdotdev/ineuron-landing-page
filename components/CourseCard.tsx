import React from "react";
import Image from "next/image";

interface ICourseCard {
  price: string;
  title: string;
  img: string;
  instructor: string;
}
export const CourseCard = ({ price, title, img, instructor }: ICourseCard) => {
  return (
    <div className="flex flex-col min-h-[298px] max-w-[90%] min-w-[370px] bg-white drop-shadow rounded overflow-hidden cursor-pointer hover:drop-shadow-xl ease-in-out duration-300">
      <div className="relative w-full h-4/6">
        <Image src={img} layout="fill" objectFit="cover" alt="course banner" />
      </div>
      <p className="py-2 px-3 bg-[#ffd300] absolute right-0 top-0 font-bold rounded-bl-lg">
        ₹ {price}
      </p>
      <div className="text-center p-2 flex flex-col">
        <h4 className="text-md font-bold">{title}</h4>
        <div className="flex justify-center mt-4 font-medium">
          <p>{instructor}</p>
        </div>
      </div>
    </div>
  );
};
