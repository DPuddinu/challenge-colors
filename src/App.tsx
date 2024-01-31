import { useState } from "react";
import { ListContainer } from "./components/ListContainer";
import { ListItemProps } from "./components/ListItem";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const App = () => {
  const [left, setLeft] = useState<ListItemProps[]>(
    colors.map((color) => ({ label: color, value: false }))
  );
  const [right, setRight] = useState<ListItemProps[]>([]);

  return (
    <div className="bg-slate-700 h-screen w-screen p-4">
      <div className="flex gap-2">
        <ListContainer
          items={left}
          onChange={(selectedItem) => {
            setLeft((old) =>
              old.map((item) => {
                if (item.label === selectedItem.label) {
                  item = selectedItem;
                }
                return item;
              })
            );
          }}
        />
        <div className="flex flex-col gap-2 justify-center">
          <button
            className="rounded w-24 h-18 bg-slate-400 shadow"
            onClick={() => {
              const checked: ListItemProps[] = [];
              const nonchecked: ListItemProps[] = [];

              right.forEach((item) => {
                if (item.value) {
                  checked.push(item);
                } else {
                  nonchecked.push(item);
                }
              });

              setLeft((old) => [
                ...old,
                ...checked.map((item) => {
                  return { label: item.label, value: false };
                }),
              ]);
              setRight((old) => old.filter((item) => !item.value));
            }}
          >
            {"<"}
          </button>
          <button
            className="rounded w-24 h-18 bg-slate-400 shadow"
            onClick={() => {
              const checked: ListItemProps[] = [];
              const nonchecked: ListItemProps[] = [];

              left.forEach((item) => {
                if (item.value) {
                  checked.push(item);
                } else {
                  nonchecked.push(item);
                }
              });

              setRight((old) => [
                ...old,
                ...checked.map((item) => {
                  return { label: item.label, value: false };
                }),
              ]);
              setLeft((old) => old.filter((item) => !item.value));
            }}
          >
            {">"}
          </button>
        </div>

        <ListContainer
          items={right}
          onChange={(selectedItem) => {
            setRight((old) =>
              old.map((item) => {
                if (item.label === selectedItem.label) {
                  item = selectedItem;
                }
                return item;
              })
            );
          }}
        />
      </div>
    </div>
  );
};

export default App;
