import Link from "next/link";
import { FC } from "react";

const Map: FC = () => {
  return (
    <div className="map">
      <div className="map__info">
        <div className="map__item">
          <div>
            <span>Email:</span>
            <Link href="mailto:info@domen.ru">
              <a> info@domen.ru</a>
            </Link>
          </div>
        </div>
        <div className="map__item">
          <span>Телефон:</span>
          <Link href="tel:+79999999999">
            <a> +7 (999) 999-99-99</a>
          </Link>
        </div>
        <address className="map__item">
          <span>Адрес:</span> г. Самара, Финская улица, 96
        </address>
      </div>
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad8a78c177a5d6c3ccffcdfef36d75acd11f1f9a74e5079289f5a734dc4d7820e&amp;source=constructor"
        width="100%"
        height="300"
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default Map;
