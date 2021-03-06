import Link from "next/link";
import { FC, useState } from "react";
import { routes } from "../../routes";
import { useRouter } from "next/router";

const Navigate: FC = () => {
  const router = useRouter();
  const activeRouter = router.pathname;
  const [show, setShow] = useState(false);

  return (
    <nav className={`navigate ${show ? "active" : ""}`}>
      <div className={`hamburger`} onClick={() => setShow(!show)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className="navigate-list">
        <div className={`close`} onClick={() => setShow(false)}>
          &#10008;
        </div>
        {routes.map((item) => (
          <li key={item.path} className="navigate-item">
            <Link href={item.path}>
              <a
                className={`navigate-link ${
                  activeRouter.search(item.path) !== -1 ? "active" : ""
                }`}
              >
                {item.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigate;
