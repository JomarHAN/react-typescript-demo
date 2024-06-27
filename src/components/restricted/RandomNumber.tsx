import React from "react";

type RandomNumberType = {
  value: number;
};

type PositiveNumber = RandomNumberType & {
  isPositive: boolean;
  isNegative?: never;
  isZero?: never;
};

type NegativeNumber = RandomNumberType & {
  isNegative: boolean;
  isPositive?: never;
  isZero?: never;
};

type Zero = RandomNumberType & {
  isNegative?: never;
  isPositive?: never;
  isZero: boolean;
};

type RandomNumberProps = PositiveNumber | NegativeNumber | Zero;

const RandomNumber = ({
  value,
  isNegative,
  isPositive,
  isZero,
}: RandomNumberProps) => {
  return (
    <div>
      RandomNumber {value} {isPositive && "Positive"} {isNegative && "Negative"}{" "}
      {isZero && "Zero"}
    </div>
  );
};

export default RandomNumber;
