import { type FunctionComponent, useState } from "react";
import Card from "./Card";

export type CardsType = {
  className?: string;
};

const Cards: FunctionComponent<CardsType> = ({ className = "" }) => {
  const [cardItems] = useState([
    {
      prop: "12",
      icon: "/icon.svg",
      newMatches: "New matches",
    },
    {
      prop: "847",
      icon: "/icon1.svg",
      newMatches: "Profile views",
    },
    {
      prop: "5",
      icon: "/icon.svg",
      newMatches: "Certificates",
    },
    {
      prop: "3",
      icon: "/icon.svg",
      newMatches: "Interviews",
    },
  ]);
  return (
    <nav
      className={`m-0 flex-1 flex items-start justify-center flex-wrap content-start gap-4 max-w-full text-left text-[32px] text-[#212121] font-body-lg ${className}`}
    >
      {cardItems.map((item, index) => (
        <Card
          key={index}
          prop={item.prop}
          icon={item.icon}
          newMatches={item.newMatches}
        />
      ))}
    </nav>
  );
};

export default Cards;
