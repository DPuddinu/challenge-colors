import { ListItem, ListItemProps } from "./ListItem";
import { createContext } from "react";

interface ListContainerProps {
  items: ListItemProps[];
  onChange: (item: ListItemProps) => void;
}

export const ListContext = createContext<ListContainerProps>({
  items: [],
  onChange: () => {},
});

export const ListContainer = ({ items, onChange }: ListContainerProps) => {
  return (
    <ListContext.Provider
      value={{
        items,
        onChange,
      }}
    >
      <div className="border rounded bg-slate-400 p-2 min-h-32 min-w-32">
        {items.map((item) => (
          <ListItem label={item.label} key={item.label} />
        ))}
      </div>
    </ListContext.Provider>
  );
};
