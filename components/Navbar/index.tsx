import React, { useEffect, useRef, useState } from "react";
import { VscChevronDown, VscChevronRight } from "react-icons/vsc";
import Card from "./Card";
import { COMPANY, COURSES, NAV_LINKS } from "./constants";
import { NavItem } from "./NavItem";
import { FiSearch } from "react-icons/fi";

export const Navbar = () => {
  const [showCourses, setShowCourses] = useState(false);
  const [showCompanyDropdown, setShowCompanyDropdown] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const scrollFn = () => {
      if (window.scrollY > 50) {
        navRef.current?.classList?.add("scrolled");
      } else {
        navRef.current?.classList?.remove("scrolled");
      }
    };
    document.addEventListener("scroll", scrollFn);
    return () => {
      document.removeEventListener("scroll", scrollFn);
    };
  }, []);

  return (
    <nav className="min-h-[5rem] sticky top-0 z-10 p-4" ref={navRef}>
      <div className="container mx-auto h-full flex justify-between items-center w-11/12 gap-10">
        <div>
          <img
            src={"/assets/images/ineuron-logo.png"}
            alt="ineuron logo"
            width={100}
          />
          <ul className="justify-between w-full text-sm hidden md:flex gap-4 flex-wrap">
            <NavItem
              className="flex items-center gap-2 relative p-1"
              onMouseEnter={() => setShowCourses(true)}
              onMouseLeave={() => setShowCourses(false)}
            >
              Courses <VscChevronDown />
              <Card hidden={!showCourses}>
                <Card.List items={COURSES}></Card.List>
              </Card>
            </NavItem>
            {NAV_LINKS.map((item) => (
              <NavItem key={item.url} className="p-1">
                <a href={item.url} target="_blank" rel="noreferrer">
                  {item.text}
                </a>
              </NavItem>
            ))}
            <NavItem
              className="flex items-center gap-2 p-1 relative"
              onMouseEnter={() => setShowCompanyDropdown(true)}
              onMouseLeave={() => setShowCompanyDropdown(false)}
            >
              Company <VscChevronDown />
              <Card hidden={!showCompanyDropdown} className="left-[-380%]">
                <Card.List
                  className="grid grid-cols-2 text-sm w-max"
                  items={COMPANY}
                ></Card.List>
              </Card>
            </NavItem>
          </ul>
        </div>
        <div className="flex gap-4 items-center">
          <NavItem className="px-4 py-2 hover:bg-[rgba(0,0,0,0.1)] rounded ease-in duration-200 hidden md:block">
            <FiSearch className="text-xl " />
          </NavItem>
          <NavItem className="px-4 py-2 hover:bg-[rgba(0,0,0,0.1)] rounded ease-in duration-200">
            <a href="">Login</a>
          </NavItem>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
