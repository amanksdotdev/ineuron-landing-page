import { Carousel } from "@trendyol-js/react-carousel";
import React from "react";
import { Container } from "../Container";
import { AVENGERS } from "./data";

export const TechAvengers = () => {
  return (
    <section className="py-12 relative">
      <img
        src="/assets/images/bgpattern.svg"
        alt="pattern"
        width={"100%"}
        className="absolute top-1/2"
      />
      <Container>
        <h2 className="text-4xl font-bold mb-4">Meet the tech avengers</h2>
        <div className="flex gap-2 flex-wrap">
          {AVENGERS.map((item) => (
            <Avenger key={item.name} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
};

interface IAvenger {
  name: string;
  position: string;
  img: string;
}
const Avenger = ({ name, position, img }: IAvenger) => {
  return (
    <div className="avenger drop-shadow-sm p-4 text-center flex flex-col items-center">
      <div>
        <img
          src={img}
          width={200}
          height={200}
          className="rounded-full bg-slate-800"
        />
      </div>
      <div className="mt-2">
        <h4 className="text-xl font-medium">{name}</h4>
        <p>{position}</p>
      </div>
    </div>
  );
};
