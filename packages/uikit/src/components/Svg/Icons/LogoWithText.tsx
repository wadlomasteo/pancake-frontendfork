import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 1281 199" {...props}>
      <path
        d="M 228 92.1 L 208.1 85.9 L 176.2 0 L 194.4 0 L 228 92.1 Z M 71.9 92 L 71.9 18.9 L 89.9 18.9 L 89.9 86 L 71.9 92 Z M 22.3 65 L 41.3 65 L 65 0 L 47.1 0 L 22.2 64.9 L 22.3 65 Z M 118.9 65 L 137.9 65 L 161.6 0 L 143.7 0 L 118.8 64.9 L 118.9 65 Z M 182 30.4 L 175.3 51.5 L 189.1 51.5 L 189.1 65 L 152.8 65 L 172.9 6.4 L 182 30.4 Z M 19.6 57.2 L 29.1 34.4 L 17.9 0 L 0 0 L 19.6 57.2 Z M 116.2 57.2 L 125.7 34.4 L 114.5 0 L 96.6 0 L 116.2 57.2 Z M 89.9 0 L 89.9 13.5 L 71.9 13.5 L 71.9 0 L 89.9 0 Z"
        fill={textColor}
      />
    </Svg>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
