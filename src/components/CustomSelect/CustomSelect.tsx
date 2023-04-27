import React from "react";
import Select, { SingleValue } from "react-select";
import { selectStyles } from "./styles";
import { Option } from "../../types/types";
export interface SelectLibraProps {
  onChange: (option: SingleValue<Option>) => void;
  options: Option[],
  defaultValue: Option,
}

export const CustomSelect = ({
  onChange,
  options,
}: SelectLibraProps) => {
  return (
    <Select
      defaultValue={options[0]}
      onChange={onChange}
      options={options}
      styles={selectStyles}
      isMulti={false}
    />
  );
};
