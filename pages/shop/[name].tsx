import { useRouter } from "next/router";
import { FC } from "react";
import MainLayout from "../../layout";

const Brand: FC = () => {
  const router = useRouter();

  return (
    <MainLayout>
      <h1 className="big-title">
        Жидкости для вейпа <span>{router.query.name}</span>
      </h1>
    </MainLayout>
  );
};

export default Brand;
