import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";

interface iPaginationList {
  pages: number;
}

const PaginationList: FC<iPaginationList> = ({ pages }) => {
  const router = useRouter();
  const page: any = router.query.page;

  return (
    <div className="pagination">
      <Link
        href={`/shop?page=${+page <= 1 || page === undefined ? 1 : +page - 1}`}
      >
        <a className="item">&lsaquo;</a>
      </Link>

      {page === undefined || +page < 4 ? (
        <>
          <Link href={`/shop?page=1`}>
            <a
              className={`item ${
                page === undefined || page === "1" ? "active" : ""
              }`}
            >
              1
            </a>
          </Link>
          <Link href={`/shop?page=2`}>
            <a className={`item ${page === "2" ? "active" : ""}`}>2</a>
          </Link>
          <Link href={`/shop?page=3`}>
            <a className={`item ${page === "3" ? "active" : ""}`}>3</a>
          </Link>
          <Link href={`/shop?page=4`}>
            <a className={`item ${page === "4" ? "active" : ""}`}>4</a>
          </Link>
          <div>...</div>
          <Link href={`/shop?page=${pages}`}>
            <a className="item">{pages}</a>
          </Link>
        </>
      ) : (
        ""
      )}

      {+page >= 4 && +page <= +pages - 3 && (
        <>
          <Link href={`/shop?page=1`}>
            <a className="item">1</a>
          </Link>
          <div>...</div>
          <Link href={`/shop?page=${+page - 1}`}>
            <a className="item">{+page - 1}</a>
          </Link>
          <Link href={`/shop?page=${page}`}>
            <a className="item active">{page}</a>
          </Link>
          <Link href={`/shop?page=${+page + 1}`}>
            <a className="item">{+page + 1}</a>
          </Link>
          <div>...</div>
          <Link href={`/shop?page=${pages}`}>
            <a className="item">{pages}</a>
          </Link>
        </>
      )}

      {+pages - 3 < +page && (
        <>
          <Link href={`/shop?page=1`}>
            <a className="item">1</a>
          </Link>
          <div>...</div>
          <Link href={`/shop?page=${+pages - 3}`}>
            <a className={`item ${+page === +pages - 3 ? "active" : ""}`}>
              {+pages - 3}
            </a>
          </Link>
          <Link href={`/shop?page=${+pages - 2}`}>
            <a className={`item ${+page === +pages - 2 ? "active" : ""}`}>
              {+pages - 2}
            </a>
          </Link>
          <Link href={`/shop?page=${+pages - 1}`}>
            <a className={`item ${+page === +pages - 1 ? "active" : ""}`}>
              {+pages - 1}
            </a>
          </Link>

          <Link href={`/shop?page=${pages}`}>
            <a className={`item ${+page === +pages ? "active" : ""}`}>
              {pages}
            </a>
          </Link>
        </>
      )}

      <Link href={`/shop?page=${page < pages ? +page + 1 : page}`}>
        <a className="item">&rsaquo;</a>
      </Link>
    </div>
  );
};

export default PaginationList;
