import { FC, useState } from "react";
import { CSSTransition } from "react-transition-group";
import ArrowDown from "../../public/icons/arrowDown";
import { iAccordionItem } from "./Accordion.interface";

const AccordionItem: FC<iAccordionItem> = ({ title, descr }) => {
  const [show, setShow] = useState(false);
  return (
    <div className={`accordion__item`}>
      <div className={`accordion__item__top`} onClick={() => setShow(!show)}>
        <h3 className="accordion__item__top-title">{title}</h3>
        <div
          className={`accordion__item__top-button ${
            !show ? "rotate-0" : "rotate-180"
          }`}
        >
          <ArrowDown />
        </div>
      </div>
      <CSSTransition
        in={show}
        timeout={300}
        classNames="accordion__item__bottom"
      >
        <div className={`accordion__item__bottom`}>
          <div className="accordion__item__bottom-descr">{descr}</div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default AccordionItem;
