import { useContext } from "react";
import { ListContext } from "./ListContainer";

export interface ListItemProps {
  label: string;
  value: boolean;
}

export const ListItem = ({ label }: Omit<ListItemProps, "value">) => {
  const listContext = useContext(ListContext);

  return (
    <div className="flex gap-2">
      <input
        type="checkbox"
        onChange={(e) =>
          listContext.onChange({
            label: label,
            value: e.target.checked,
          })
        }
      />
      <span>{label}</span>
    </div>
  );
};
