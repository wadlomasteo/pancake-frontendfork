import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 20 16" {...props}>
      <path d="" />
    </Svg>
  );
};

export default Icon;
