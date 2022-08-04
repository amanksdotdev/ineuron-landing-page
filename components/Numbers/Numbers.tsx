import React from "react";
import { Container } from "../Container";

export const Numbers = () => {
  return (
    <section id="numbers" className="py-12 bg-[#325258] text-white">
      <Container className="flex flex-col md:flex-row  justify-around items-center gap-8">
        <div className="flex-1">
          <h2 className="text-3xl text-center md:text-4xl font-bold">
            Join the tech revolution
          </h2>
        </div>
        <div className="flex flex-col md:flex-row justify-around gap-8 flex-1">
          <div className="flex flex-col items-center">
            <span className="font-bold text-4xl">400+</span>
            <span className="font-bold text-xl">Courses</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold text-4xl">400K+</span>
            <span className="font-bold text-xl">Students</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold text-4xl">10K+</span>
            <span className="font-bold text-xl">Success Stories</span>
          </div>
        </div>
      </Container>
    </section>
  );
};
