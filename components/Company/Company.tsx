import React from "react";
import { Container } from "../Container";
import { companies } from "./data";
import Image from "next/image";
import { Carousel } from "@trendyol-js/react-carousel";

export const Company = () => {
  return (
    <section id="companies" className="py-12 bg-white">
      <Container>
        <h3 className="text-4xl text-center font-bold mb-12">
          Our Achiever&apos;s Work with
        </h3>
        <div className="py-4 h-20 overflow-hidden">
          <Carousel
            show={4}
            slide={1}
            swiping={true}
            transition={2}
            autoSwipe={2.5}
            infinite={true}
            responsive={true}
          >
            {companies.map((c) => {
              return (
                <img
                  key={c}
                  src={c}
                  alt="company logo"
                  width={200}
                  height={200}
                  className="inline-block mr-2 object-contain"
                />
              );
            })}
          </Carousel>
        </div>
      </Container>
    </section>
  );
};
