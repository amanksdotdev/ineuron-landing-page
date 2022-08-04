import React, { useEffect, useRef, useState } from "react";
import { Container } from "../Container";
import { CourseCard } from "../CourseCard";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";
import { courses, ICourse, ICourses } from "./data";
import { motion, useAnimation } from "framer-motion";
import styles from "./Courses.module.css";

const coursetTypes = [
  {
    type: "live",
    title: "Live Programs",
  },
  {
    type: "affordable",
    title: "Affordable Programs",
  },
  {
    type: "community",
    title: "Community Programs",
  },
  {
    type: "one",
    title: "One Neuron",
  },
  {
    type: "test",
    title: "Test Series",
  },
];
export const Courses = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);
  const animation = useAnimation();

  type CT = keyof ICourses;
  const [activeCourse, setActiveCourse] = useState<CT>("live");
  const [courseList, setCourseList] = useState<ICourse[]>(courses.live);

  function resizeWidth() {
    if (!carousel.current) return;
    // const width = carousel.current?.scrollWidth - carousel.current?.offsetWidth;
    const carouselEl = document.getElementById("carousel");
    if (!carouselEl) return;
    console.log(carouselEl?.scrollWidth - carouselEl?.offsetWidth);
    const width = carouselEl.scrollWidth - carouselEl.offsetWidth;
    setWidth(width);
  }
  useEffect(() => {
    resizeWidth();
  }, []);

  useEffect(() => {
    setCourseList(courses[activeCourse] || courses.live);
  }, [activeCourse]);

  const slideLeft = () => {
    if (!carousel.current) return;
    const xPos = translateXForElement(carousel.current);
    const newPosition = xPos + 500;
    animation.start({
      x: newPosition > 0 ? 0 : newPosition,
    });
  };
  const slideRight = () => {
    if (!carousel.current) return;
    const xPos = translateXForElement(carousel.current);
    const newPosition = xPos - 500;
    animation.start({
      x: newPosition < -width ? -width : newPosition,
    });
  };

  return (
    <section id="offerings" className="py-12">
      <Container className="text-center">
        <h3 className="text-4xl font-bold my-4">Discover Lifelong Learning</h3>
        <div className="flex flex-wrap gap-4 my-8 justify-around">
          {coursetTypes.map((c) => {
            return (
              <span
                key={c.type}
                onClick={(e) => {
                  //@ts-ignore
                  setActiveCourse(e.target.dataset.type);
                  resizeWidth();
                  slideLeft();
                }}
                data-type={c.type}
                className={`font-medium ${styles.courseType} ${
                  activeCourse === c.type ? styles.active : ""
                } ${activeCourse === c.type ? "text-lg" : "text-md"}`}
              >
                {c.title}
              </span>
            );
          })}
        </div>
        <motion.div
          id="carousel"
          className="relative flex mt-8 items-center justify-between overflow-hidden cursor-grab p-2"
          ref={carousel}
          whileTap={{ cursor: "grabbing" }}
        >
          <MdChevronLeft
            className="absolute left-0 z-10 hidden md:block text-5xl p-2 rounded-full bg-white drop-shadow cursor-pointer"
            onClick={slideLeft}
          />
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            animate={animation}
            className="cards flex gap-4 courses scroll-smooth z-0"
          >
            {courseList.map((course) => {
              return (
                <CourseCard
                  key={course.img}
                  img={course.img}
                  price={course.price}
                  title={course.title}
                  instructor={course.instructor}
                />
              );
            })}
          </motion.div>
          <MdChevronRight
            className="absolute right-0 z-10 hidden md:block text-5xl p-2 rounded-full bg-white drop-shadow cursor-pointer"
            onClick={slideRight}
          />
        </motion.div>
      </Container>
    </section>
  );
};

const translateXForElement = (element: HTMLElement) => {
  const transform = element.style.transform;

  if (!transform || transform.indexOf("translateX(") < 0) {
    return 0;
  }

  const extractTranslateX = transform.match(/translateX\((-?\d+)/);

  return extractTranslateX && extractTranslateX.length === 2
    ? parseInt(extractTranslateX[1], 10)
    : 0;
};
