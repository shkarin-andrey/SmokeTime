import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { routes } from "../../routes";
import { useRouter } from "next/router";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

const Navigate: FC = () => {
  const router = useRouter();
  const activeRouter = router.pathname;
  const [show, setShow] = useState(false);

  useEffect(() => {
    show ? disableBodyScroll(document.body) : enableBodyScroll(document.body);
  }, [show]);

  return (
    <nav
      className={`navigate ${show ? "active" : ""}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) setShow(false);
      }}
    >
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
