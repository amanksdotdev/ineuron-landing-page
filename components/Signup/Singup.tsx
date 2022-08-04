import React from "react";
import { Container } from "../Container";
import bgpattern from "../../public/assets/images/bgpattern.svg";
export const Singup = () => {
  return (
    <section id="signup" className="py-12 bg-[#3911E5] text-white">
      <Container className="flex justify-between gap-8 md:flex-row flex-col">
        <div className="flex-1 flex items-center justify-center relative">
          <img
            src="/assets/images/ceo.jpeg"
            alt="ceo"
            width={300}
            className="rounded-full"
          />
        </div>
        <div className="flex-1 flex justify-center flex-col items-start">
          <h2 className="text-5xl font-bold mb-2">Start now</h2>
          <p className="md:w-1/2 text-[rgba(255,255,255,0.9)] text-sm">
            If you’ve made it this far, you must be at least a little curious.
            Sign up and take the first step toward your goals.
          </p>
          <button className=" bg-[#FFD300] text-black font-semibold px-3 py-2 rounded mt-4">
            Sign up
          </button>
        </div>
      </Container>
    </section>
  );
};
