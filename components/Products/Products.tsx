import React from "react";
import { Container } from "../Container";
import { VscArrowRight } from "react-icons/vsc";
import { PRODUCTS } from "./data";
export const Products = () => {
  return (
    <section id="products" className="py-12 bg-[#ffd300]">
      <Container>
        <h3 className="text-4xl text-center font-bold mb-8">Our Products</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {PRODUCTS.map((p) => {
            return <Product key={p.title} {...p} />;
          })}
        </div>
      </Container>
    </section>
  );
};

interface IProduct {
  title: string;
  description: string;
  url?: string;
}
const Product = ({ title, description, url = "#" }: IProduct) => {
  return (
    <div className="flex flex-col md:flex-row m-2">
      <div>
        <h4 className="text-2xl font-medium">{title}</h4>
        <p className="font-medium text-[rgba(0,0,0,0.5)] mb-2">{description}</p>
        <div className="flex items-center gap-1 hover:gap-2 duration-100">
          <a href={url} className=" text-blue-900 font-semibold">
            Learn more
          </a>
          <VscArrowRight />
        </div>
      </div>
    </div>
  );
};
