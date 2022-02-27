import Svg, { Path } from "react-native-svg";
import { useTheme } from "@emotion/react";

export const TopLane = () => {
  const theme = useTheme();

  return (
    <Svg width="49" height="47" viewBox="0 0 49 47" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.6447 39.0358L1.13428 15.4587L1.50715 7.77394L3.70798 4.49997L7.4594 2.31278L16.6765 1.9581L29.5314 2.5174L42.3817 4.90012L42.4499 6.11422L40.4491 8.20592L31.8186 11.7709L14.5939 9.9975L10.9198 11.0979L10.2059 16.1316L11.9293 32.7379L10.8561 36.8804L6.4954 40.55"
        fill={theme.colors.text}
      />
      <Path
        d="M4.27633 39.4132C4.35818 33.5155 -1.69411 9.2563 4.36273 3.51322C10.4241 -2.2344 36.0929 3.4723 40.631 4.94104C45.1736 6.40977 36.4203 11.0843 31.6139 12.3211C26.803 13.5579 15.0895 8.89253 11.7883 12.362C8.48702 15.8315 12.9069 28.5682 11.811 33.1335C10.7197 37.6989 6.19979 38.4992 5.23579 39.7497M4.67194 39.6087C4.58099 33.8565 -2.63082 10.2021 3.40782 4.34536C9.44647 -1.5114 35.9883 3.21311 40.8993 4.47268C45.8148 5.73224 37.8799 10.6568 32.8962 11.9073C27.9125 13.1578 14.3756 8.3787 11.0061 11.9846C7.64124 15.5905 13.4753 28.8228 12.7022 33.5291C11.9247 38.24 7.43207 39.0767 6.36349 40.2453L4.67194 39.6087Z"
        stroke={theme.colors.text}
        stroke-width="0.5"
        stroke-linecap="round"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M46.6127 8.05754L49 31.3527L47.5085 41.0109L46.4945 43.2709L42.111 45.3898L32.6484 46.945L21.144 45.6308L7.86626 42.7934L8.52106 41.9431L10.7219 39.7786L18.1974 36.3319L34.7764 37.2731L39.1917 36.9457L40.1194 31.4482L37.05 13.9871L38.6506 11.3315L44.2437 6.99805"
        fill={theme.colors.background}
      />
      <Path
        d="M46.358 8.01208C46.208 13.8597 52.092 37.4232 45.8078 43.3664C39.5191 49.3095 13.4092 45.0488 8.64379 43.671C3.8738 42.2932 12.2042 36.4137 17.2016 35.0996C22.1989 33.7855 35.1584 39.2603 38.6369 35.7771C42.111 32.294 37.2546 18.7389 38.0595 14.2008C38.8598 9.65815 42.3247 9.45353 43.4524 8.535M45.776 9.07157C45.6396 14.9738 51.6464 38.3554 45.6441 43.9757C39.6373 49.596 14.446 44.1848 9.7442 42.8025C5.04697 41.4202 12.7044 36.8002 17.4471 35.6771C22.1898 34.5585 34.9083 39.6877 38.2095 36.0727C41.5108 32.4577 36.2997 18.6934 37.2455 14.0007C38.1913 9.30348 42.7249 8.85785 43.898 7.90749L45.776 9.07157Z"
        stroke={theme.colors.text}
        stroke-width="0.5"
        stroke-linecap="round"
      />
      <Path
        d="M25.002 21.8751L28.3532 23.2392L29.4582 29.0641L23.5924 29.196L23.1467 24.0213L24.6337 22.1206"
        fill={theme.colors.background}
      />
      <Path
        d="M22.3736 23.9395C21.5915 22.9755 22.3736 21.3749 24.1516 22.1615M24.1516 22.1615C25.4475 22.0979 26.2979 22.3389 27.7029 22.1615H24.1516ZM24.1516 22.1615C25.3475 22.157 26.2751 22.0479 27.7029 22.1615H24.1516ZM27.7029 22.1615C29.2035 22.0069 29.7446 22.4935 29.4763 23.9395L27.7029 22.1615ZM27.7029 22.1615C28.2349 21.8069 28.5442 22.3571 29.4763 23.9395L27.7029 22.1615ZM29.4763 23.9395C29.5718 24.6079 29.2035 25.5492 29.4763 27.4908V23.9395ZM29.4763 23.9395C29.5491 25.3036 29.49 26.7224 29.4763 27.4908V23.9395ZM29.4763 27.4908C29.2672 29.3143 29.4354 28.7004 27.7029 29.2642L29.4763 27.4908ZM29.4763 27.4908C28.4669 28.6231 28.2941 30.2783 27.7029 29.2642L29.4763 27.4908ZM27.7029 29.2642C26.357 29.0823 24.7291 29.3279 24.1516 29.2642H27.7029ZM27.7029 29.2642C26.7435 29.1778 25.8795 29.2324 24.1516 29.2642H27.7029ZM24.1516 29.2642C23.2058 29.3825 21.7325 29.5689 22.3736 27.4908L24.1516 29.2642ZM24.1516 29.2642C22.7465 29.9554 22.1372 28.664 22.3736 27.4908L24.1516 29.2642ZM22.3736 27.4908C22.5919 26.7451 22.5146 26.1267 22.3736 23.9395V27.4908ZM22.3736 27.4908C22.2827 25.9539 22.2509 24.7443 22.3736 23.9395V27.4908ZM22.3736 23.9395C23.1194 22.7481 23.7514 21.9342 24.1516 22.1615L22.3736 23.9395Z"
        stroke={theme.colors.text}
        stroke-width="0.5"
        stroke-linecap="round"
      />
    </Svg>
  );
};