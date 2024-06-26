import { Name } from "./Person.types";

type TypePersonList = {
  names: Name[];
};

export const PersonList = ({ names }: TypePersonList) => {
  return (
    <div>
      {names.map((name, index) => (
        <h2 key={`${name.first}--${index}`}>
          {name.first} {name.last}
        </h2>
      ))}
    </div>
  );
};
