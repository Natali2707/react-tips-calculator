import { StylesConfig } from "react-select";
import { Option } from "./../../types/types";

export const selectStyles: StylesConfig<Option, false> = {
  control: (styles) => ({
    ...styles,
    width: "%",
    padding: "16px 25px",
    fontSize: "18px",
    textAlign: "center",
    lineHeight: "26px",
    border: "none",
    borderRadius: "30px",
    outline: "none",
    cursor: "pointer",
    ".css-1dimb5e-singleValue": {
      color: "rgba(117, 108, 108, 0.6)",
    },
    ".css-1u9des2-indicatorSeparator": {
      width: 0,
    },
  }),
};
