import Link from "next/link";
import { FC } from "react";
import { routes } from "../../routes";
import { useRouter } from "next/router";

const Navigate: FC = () => {
  const router = useRouter();
  const activeRouter = router.pathname;

  return (
    <nav className="navigate">
      <ul className="navigate-list">
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
