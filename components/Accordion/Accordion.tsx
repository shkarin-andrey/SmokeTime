import { FC, useState } from "react";
import { iAccordion } from "./Accordion.interface";
import AccordionItem from "./AccordionItem";

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
