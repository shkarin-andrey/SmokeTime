import { FC, useState } from "react";
import ArrowDown from "../../public/icons/arrowDown";

interface iAccordion {
  accordionList: iAccordionItem[];
}

interface iAccordionItem {
  title: string;
  descr: string;
}

const Accordion: FC<iAccordion> = ({ accordionList }) => {
  const [show, setShow] = useState(0);
  return (
    <div className="accordion">
      {accordionList.map((item, i) => (
        <div
          key={i}
          className={`accordion__item ${show === i ? "active" : ""}`}
        >
          <div
            className={`accordion__item__top ${show === i ? "border-1" : ""}`}
            onClick={() => setShow(i)}
          >
            <h3 className="accordion__item__top-title">{item.title}</h3>
            <div
              className={`accordion__item__top-button ${
                show !== i ? "rotate-0" : "rotate-180"
              }`}
            >
              <ArrowDown />
            </div>
          </div>
          <div
            className={`accordion__item__bottom ${show !== i ? "hidden" : ""}`}
          >
            <div className="accordion__item__bottom-descr">{item.descr}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
