import Link from "next/link";
import { FC } from "react";

interface iListPagination {
  page: string;
  pages: string;
  href: string;
}

const ListPagination: FC<iListPagination> = ({ page, pages, href }) => {
  return (
    <>
      {page === undefined || +page < 4 ? (
        <>
          <Link href={`${href}page=2`}>
            <a className={`item ${page === "2" ? "active" : ""}`}>2</a>
          </Link>
          <Link href={`${href}page=3`}>
            <a className={`item ${page === "3" ? "active" : ""}`}>3</a>
          </Link>
          <Link href={`${href}page=4`}>
            <a className={`item ${page === "4" ? "active" : ""}`}>4</a>
          </Link>
          <div>...</div>
        </>
      ) : (
        ""
      )}

      {+page >= 4 && +page <= +pages - 3 && (
        <>
          <div>...</div>
          <Link href={`${href}page=${+page - 1}`}>
            <a className="item">{+page - 1}</a>
          </Link>
          <Link href={`${href}page=${page}`}>
            <a className="item active">{page}</a>
          </Link>
          <Link href={`${href}page=${+page + 1}`}>
            <a className="item">{+page + 1}</a>
          </Link>
          <div>...</div>
        </>
      )}

      {+pages - 3 < +page && (
        <>
          <div>...</div>
          <Link href={`${href}page=${+pages - 3}`}>
            <a className={`item ${+page === +pages - 3 ? "active" : ""}`}>
              {+pages - 3}
            </a>
          </Link>
          <Link href={`${href}page=${+pages - 2}`}>
            <a className={`item ${+page === +pages - 2 ? "active" : ""}`}>
              {+pages - 2}
            </a>
          </Link>
          <Link href={`${href}page=${+pages - 1}`}>
            <a className={`item ${+page === +pages - 1 ? "active" : ""}`}>
              {+pages - 1}
            </a>
          </Link>
        </>
      )}
    </>
  );
};

export default ListPagination;
