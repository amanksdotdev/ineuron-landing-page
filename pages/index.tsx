import type { NextPage } from "next";
import Header from "../components/Header";
import { Navbar } from "../components/Navbar";
import { Courses } from "../components/Courses/Courses";
import { Numbers } from "../components/Numbers/Numbers";
import { Container } from "../components/Container";
import { Company } from "../components/Company/Company";
import { Footer } from "../components/Footer/Footer";
import { Products } from "../components/Products/Products";
import { Singup } from "../components/Signup/Singup";
import { TechAvengers } from "../components/TechAvengers/TechAvengers";
import { Partner } from "../components/Partner/Partner";
const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Numbers />
      <Courses />
      <section id="team" className="py-12 bg-[#10162f] text-white">
        <Container>
          <h3 className="text-4xl text-center font-bold">
            Classes Taught by Real Creators
          </h3>
          <img src="/assets/images/hero-influencers1.png" width={"100%"} />
        </Container>
      </section>
      <Company />
      <Products />
      <TechAvengers />
      <Partner />
      <Singup />
      <Footer />
    </div>
  );
};

export default Home;
