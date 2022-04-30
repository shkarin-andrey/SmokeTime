import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import ListPagination from "./ListPagination";
interface iPaginationList {
  pages: number;
}

const PaginationList: FC<iPaginationList> = ({ pages }) => {
  const router = useRouter();
  const page: any = router.query.page;
  const urlBrand: any = router.query.brand;
  const urlStrong: any = router.query.strong;

  const href = `/shop?${urlBrand ? `brand=${urlBrand}&` : ""}${
    urlStrong ? `strong=${urlStrong}&` : ""
  }`;

  let list: number[] = [];

  for (let i = 2; i < pages; i++) {
    list.push(i);
  }

  return (
    <div className="pagination">
      <Link
        href={`${href}page=${+page <= 1 || page === undefined ? 1 : +page - 1}`}
      >
        <a className="item">&lsaquo;</a>
      </Link>
      <Link href={`${href}page=1`}>
        <a
          className={`item ${
            page === undefined || page === "1" ? "active" : ""
          }`}
        >
          1
        </a>
      </Link>

      {pages <= 7 &&
        list.map((item) => (
          <Link key={item} href={`${href}page=${item}`}>
            <a
              className={`item ${
                page === undefined || +page === item ? "active" : ""
              }`}
            >
              {item}
            </a>
          </Link>
        ))}

      {pages > 7 && <ListPagination page={page} pages={pages} href={href} />}

      <Link href={`${href}page=${pages}`}>
        <a className={`item ${+page === +pages ? "active" : ""}`}>{pages}</a>
      </Link>
      <Link href={`${href}page=${page < pages ? +page + 1 : page}`}>
        <a className="item">&rsaquo;</a>
      </Link>
    </div>
  );
};

export default PaginationList;
