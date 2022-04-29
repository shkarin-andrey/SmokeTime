import { FC, useState } from "react";
import { FormGroup, Input, Label } from "reactstrap";
import { filterSelect } from "./filterSelect";

const Filter: FC = () => {
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("all");
  const [strong, setStrong] = useState("all");
  const [volume, setVolume] = useState("30");

  console.log("search", search);
  console.log("brand", brand);
  console.log("strong", strong);
  console.log("volume", volume);

  return (
    <div className="filter">
      <h2 className="text-center mb-4">Фильтрация</h2>
      <Input
        placeholder="Поиск..."
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <FormGroup className="mt-3">
        <Label for="exampleSelect">Бренд</Label>
        <Input
          id="exampleSelect"
          name="brand"
          type="select"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
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
          onChange={(e) => setStrong(e.target.value)}
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
          name="brand"
          type="select"
          value={volume}
          onChange={(e) => setVolume(e.target.value)}
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
