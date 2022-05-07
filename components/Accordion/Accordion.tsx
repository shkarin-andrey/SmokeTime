import { FC, useState } from "react";
import AccordionItem from "./AccordionItem";

interface iAccordion {
  accordionList: iAccordionItem[];
}

interface iAccordionItem {
  title: string;
  descr: string;
}

const Accordion: FC<iAccordion> = ({ accordionList }) => {
  return (
    <div className="accordion">
      {accordionList.map((item, i) => (
        <AccordionItem key={i} title={item.title} descr={item.descr} />
      ))}
    </div>
  );
};

export default Accordion;
