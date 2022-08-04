import React from "react";
import { Container } from "../Container";
import Image from "next/image";
import { SOCIAL } from "./data";
export const Footer = () => {
  return (
    <footer className="py-12">
      <Container>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <div className=" border-b-4 border-[orange] flex  pb-2 mb-2">
              <img src="/assets/images/ineuron-logo.png" width={150} />
            </div>
            <div className="flex gap-2 social">
              {SOCIAL.map((s, idx) => {
                return (
                  <img
                    key={idx}
                    src={s.img}
                    alt="social media icon"
                    width={30}
                    className="cursor-pointer hover:scale-110"
                  />
                );
              })}
            </div>
            <div className="contact flex flex-col gap-4 my-6">
              <div className="address inline-flex items-center gap-3 hover:text-[blue] cursor-pointer">
                <img src="/assets/images/map.svg" />
                <span>
                  17th Floor Tower A, Brigade Signature Towers,
                  Sannatammanahalli, Bengaluru, Karnataka 562129.
                </span>
              </div>
              <div className="mail inline-flex items-center gap-3 hover:text-[blue] cursor-pointers">
                <img src="/assets/images/mail.svg" />
                <span>
                  <b>Email us:</b> <br />
                  <a href="mailto:contact@ineuron.ai">contact@ineuron.ai</a>
                </span>
              </div>
            </div>
            <img src="/assets/images/isomark.svg" />
          </div>
          <div className="flex-1">
            <h3 className="text-4xl font-medium text-[#283278] border-b-4 border-[orange] pb-2 mb-4">
              Company
            </h3>
            <div className="inline-flex gap-4">
              <ul>
                <li className="mb-2 hover:text-[blue] cursor-pointer">
                  About us
                </li>
                <li className="mb-2 hover:text-[blue] cursor-pointer">
                  Hack-A-Thon
                </li>
                <li className="mb-2 hover:text-[blue] cursor-pointer">
                  Job-guarantee
                </li>
                <li className="mb-2 hover:text-[blue] cursor-pointer">
                  Privacy Policy
                </li>
              </ul>
              <ul>
                <li className="mb-2 hover:text-[blue] cursor-pointer">
                  Contact us
                </li>
                <li className="mb-2 hover:text-[blue] cursor-pointer">FAQs</li>
                <li className="mb-2 hover:text-[blue] cursor-pointer">
                  Job assistance
                </li>
                <li className="mb-2 hover:text-[blue] cursor-pointer">
                  Terms and conditions
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-4xl font-medium text-[#283278] border-b-4 border-[orange] pb-2 mb-4">
              Products
            </h3>
            <ul className="flex flex-col gap-2">
              <li className="hover:text-[blue] cursor-pointer">Job Portal</li>
              <li className="hover:text-[blue] cursor-pointer">
                Internship Portal
              </li>
              <li className="hover:text-[blue] cursor-pointer">
                Become an affiliate
              </li>
              <li className="hover:text-[blue] cursor-pointer">Hall of fame</li>
              <li className="hover:text-[blue] cursor-pointer">InBlog</li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
};
