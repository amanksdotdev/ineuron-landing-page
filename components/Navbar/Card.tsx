import React, { ReactNode, useState } from "react";
import { VscChevronRight } from "react-icons/vsc";
import { motion } from "framer-motion";

export const Card = ({
  hidden = false,
  className = "",
  children,
}: {
  hidden: boolean;
  className?: string;
  children: ReactNode;
}) => {
  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.3,
      },
      display: "block",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.3,
        delay: 0.1,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  return (
    <motion.div
      initial="exit"
      animate={!hidden ? "enter" : "exit"}
      variants={subMenuAnimate}
      className={`inline-block p-4 absolute top-7 left-0  ${className}`}
    >
      {children}
    </motion.div>
  );
};

interface IItems {
  title: string;
  url?: string;
  subtopics?: IItems[];
}
interface ICardList {
  items: IItems[];
  className?: string;
}

Card.List = function CardList({ items, className = "" }: ICardList) {
  return (
    <ul
      className={`text-black bg-white min-w-[16rem] drop-shadow rounded-md py-2 text-slate-600 ${className}`}
    >
      {items.map((course) => (
        <Card.ListItem
          key={course.title}
          title={course.title}
          subtopics={course.subtopics}
        ></Card.ListItem>
      ))}
    </ul>
  );
};

Card.ListItem = function CardListItem({ title, subtopics, url }: IItems) {
  const [hover, setHover] = useState(false);
  return (
    <li
      key={title}
      className="hover:bg-slate-100 px-8 py-3 rounded-md flex items-center gap-4"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <a href={url || "#"}>{title}</a>
      {subtopics ? <VscChevronRight /> : null}
      {subtopics ? (
        <Card hidden={!hover} className="left-[15rem] top-[-1rem]">
          <Card.List items={subtopics}></Card.List>
        </Card>
      ) : null}
    </li>
  );
};

export default Card;
