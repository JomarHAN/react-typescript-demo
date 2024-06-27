import React from "react";

type Props<T> = {
  onClick: (value: T) => void;
  items: T[];
};

const List = <T extends { id: number; name: string }>({
  items,
  onClick,
}: Props<T>) => {
  return (
    <div>
      {items.map((item) => (
        <button key={item.id} onClick={() => onClick(item)}>
          {item.name} {item.id}
        </button>
      ))}
    </div>
  );
};

export default List;
