import { ChangeEvent, FC, useEffect, useState } from "react";
import { FormGroup, Input, Label } from "reactstrap";
import { filterSelect } from "./filterSelect";
import {
  brandFilter,
  searchFilter,
  strongFilter,
  volumeFilter,
} from "../../store/reducers/filterSlice";
import { useRouter } from "next/router";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";

const Filter: FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { brand, strong, volume, search } = useAppSelector(
    (state) => state.shopFilter
  );

  const querySearch = search.length ? `search=${search}&` : "";
  const queryBrand = brand !== "all" ? `brand=${brand}&` : "";
  const queryStrong = strong !== "all" ? `strong=${strong}&` : "";
  const queryVolume = volume !== "all" ? `volume=${volume}` : "";

  const [value, setValue] = useState<string>("");
  const [timer, setTimer] = useState<ReturnType<typeof setTimeout> | null>(
    null
  );

  useEffect(() => {
    router.push(
      `/shop?${querySearch + queryBrand + queryStrong + queryVolume}&page=1`
    );
  }, [brand, strong, volume, search]);

  const inputSearch = (value: string) => {
    setValue(value);
    if (timer) {
      clearInterval(timer);
    }
    setTimer(
      setTimeout(() => {
        dispatch(searchFilter(value));
      }, 500)
    );
  };

  return (
    <div className="filter">
      <h2 className="text-center mb-4">Фильтр</h2>
      <Input
        placeholder="Поиск..."
        name="search"
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          inputSearch(e.target.value)
        }
      />
      <FormGroup className="mt-3">
        <Label for="exampleSelect">Бренд</Label>
        <Input
          id="exampleSelect"
          name="brand"
          type="select"
          value={brand}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            dispatch(brandFilter(e.target.value))
          }
        >
          {filterSelect.brands.map((item, i) => (
            <option key={i} value={item.value}>
              {item.name}
            </option>
          ))}
        </Input>
      </FormGroup>
      <FormGroup className="mt-2">
        <Label for="exampleSelect">Крепость</Label>
        <Input
          id="exampleSelect"
          name="strong"
          type="select"
          value={strong}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            dispatch(strongFilter(e.target.value))
          }
        >
          {filterSelect.strong.map((item, i) => (
            <option key={i} value={item.value}>
              {item.value === "all" ? item.name : item.name + " мг."}
            </option>
          ))}
        </Input>
      </FormGroup>
      <FormGroup className="mt-2">
        <Label for="exampleSelect">Объем</Label>
        <Input
          id="exampleSelect"
          name="volume"
          type="select"
          value={volume}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            dispatch(volumeFilter(e.target.value))
          }
        >
          {filterSelect.volume.map((item, i) => (
            <option key={i} value={item}>
              {item === "all" ? "Все" : item + " мл."}
            </option>
          ))}
        </Input>
      </FormGroup>
      <style jsx>{`
        .filter {
          border: 1px solid #a000d8;
          border-radius: 4px;
          padding: 20px;
          margin-bottom: 30px;
        }
      `}</style>
    </div>
  );
};

export default Filter;
