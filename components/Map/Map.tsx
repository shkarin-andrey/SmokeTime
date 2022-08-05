import Link from "next/link";
import { createElement, FC, memo, useCallback } from "react";
import { iMap } from "./Map.interface";

const Map: FC<iMap> = ({ className }) => {
  const getMap = useCallback(
    () =>
      createElement("iframe", {
        src: "https://yandex.ru/map-widget/v1/?um=constructor%3Ad8a78c177a5d6c3ccffcdfef36d75acd11f1f9a74e5079289f5a734dc4d7820e&amp;source=constructor",
        width: "100%",
        height: "300",
        frameBorder: "0",
      }),
    []
  );

  return (
    <div className={`map ${className}`}>
      <div className="map__info">
        <div className="map__item">
          <div>
            <span>Email:</span>
            <Link href="mailto:smoke-time-opt@mail.ru">
              <a> smoke-time-opt@mail.ru</a>
            </Link>
          </div>
        </div>
        <div className="map__item">
          <span>Телефон:</span>
          <Link href="tel:+79272971619">
            <a> +7 (927) 297-16-19</a>
          </Link>
        </div>
        <address className="map__item">
          <span>Адрес:</span> г. Самара, ул.Гастелло 49
        </address>
      </div>
      {getMap()}
    </div>
  );
};

export default memo(Map);
