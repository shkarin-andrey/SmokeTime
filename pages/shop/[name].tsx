import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import MainLayout from "../../layout";

const Brand = () => {
  const router = useRouter();
  const [shopItem, setShopItem] = useState({ name: "" });
  const id = router.query.name;

  useEffect(() => {
    if (id) {
      fetch(`${process.env.BASE_URL}/api/shop/${id}`)
        .then((resp) => resp.json())
        .then((shopData) => setShopItem(shopData));
    }
  }, [id]);

  return (
    <MainLayout>
      <h1 className="big-title">
        Жидкости для вейпа <span>{shopItem?.name}</span>
      </h1>
    </MainLayout>
  );
};

export default Brand;
