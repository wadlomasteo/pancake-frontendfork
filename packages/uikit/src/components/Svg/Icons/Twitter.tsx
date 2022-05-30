import * as React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 18 15" {...props}>
      <path
        fill="currentColor"
        d=""
      />
    </Svg>
  );
};

export default Icon;
