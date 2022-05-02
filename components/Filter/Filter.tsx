import { ChangeEvent, FC, useState } from "react";
import { FormGroup, Input, Label } from "reactstrap";
import { filterSelect } from "./filterSelect";
import { useDispatch, useSelector } from "react-redux";
import {
  brandFilter,
  searchFilter,
  strongFilter,
  volumeFilter,
} from "../../store/actions/filter";
import { FilterState } from "../../type/filter";
import { useRouter } from "next/router";

interface iFilter {
  shopFilter: FilterState;
}

const Filter: FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { brand, strong, volume } = useSelector(
    (state: iFilter) => state.shopFilter
  );

  const [value, setValue] = useState<string>("");
  const [timer, setTimer] = useState<any>(null);

  return (
    <div className="filter">
      <h2 className="text-center mb-4">Фильтрация</h2>
      <Input
        placeholder="Поиск..."
        name="search"
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setValue(e.target.value);
          if (timer) {
            clearInterval(timer);
          }
          setTimer(
            setTimeout(() => {
              dispatch(searchFilter(e.target.value));
              router.push(`/shop?search=${e.target.value}&page=1`);
            }, 500)
          );
        }}
      />
      <FormGroup className="mt-3">
        <Label for="exampleSelect">Бренд</Label>
        <Input
          id="exampleSelect"
          name="brand"
          type="select"
          value={brand}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            dispatch(brandFilter(e.target.value));
            router.push(`/shop?brand=${e.target.value}&page=1`);
          }}
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
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            dispatch(strongFilter(e.target.value));
            router.push(`/shop?strong=${e.target.value}&page=1`);
          }}
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
              {item} мл.
            </option>
          ))}
        </Input>
      </FormGroup>
      <style jsx>{`
        .filter {
          border: 1px solid #a000d8;
          border-radius: 4px;
          padding: 20px;
        }
      `}</style>
    </div>
  );
};

export default Filter;
