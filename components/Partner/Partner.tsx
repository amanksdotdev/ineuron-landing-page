import React from "react";
import { Container } from "../Container";

const images = [
  "/assets/images/taxila.svg",
  "/assets/images/keit.svg",
  "/assets/images/vit.svg",
  "/assets/images/gim.svg",
  "/assets/images/malnad-college.svg",
];
export const Partner = () => {
  return (
    <section className="py-12 bg-white">
      <Container>
        <h2 className="text-4xl text-center font-semibold mb-4">
          Our Partner Institutions
        </h2>
        <div className="flex gap-4 flex-wrap md:flex-row justify-around">
          {images.map((src) => {
            return (
              <img
                key={src}
                src={src}
                width={200}
                className="rounded-full drop-shadow-sm"
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
};
