import Link from "next/link";
import { FC } from "react";
import { routes } from "../../routes";

const Navigate: FC = () => {
  return (
    <nav className="navigate">
      <ul className="navigate-list">
        {routes.map((item) => (
          <li key={item.path} className="navigate-item">
            <Link href={item.path}>
              <a className="navigate-link">{item.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigate;
