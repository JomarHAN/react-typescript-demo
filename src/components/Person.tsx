import { PersonProps } from "./Person.types";

type TypePerson = {
  name: PersonProps;
};

export const Person = ({ name }: TypePerson) => {
  return (
    <div>
      <h2>
        {name.name.first} {name.name.last}
      </h2>
    </div>
  );
};
