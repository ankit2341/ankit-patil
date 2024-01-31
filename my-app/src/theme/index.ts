import { extendTheme } from "@chakra-ui/react";
import { Nunito } from "next/font/google";

export const nunito = Nunito({ subsets: ["latin"] });
// export const fontColor = "rgba(54, 71, 98, 1)";
export const fontColor = "black";
export const fontColorLight = "rgba(126, 138, 158, 1)";

export const theme = extendTheme({
  fonts: {
    heading: `${nunito.style.fontFamily}, sans-serif`,
    body: `${nunito.style.fontFamily}, sans-serif`,
  },
  colors: {
    brand: {
      background: "rgba(246, 244, 250, 1)",
      backgroundDark: "rgb(240, 237, 246, 1)",
      primary: "rgba(148, 82, 255, 1)",
      font: fontColor,
      fontLight: fontColorLight,
      500: "rgba(148, 82, 255, 1)",
      600: "rgba(107, 70, 193, 1)",
    },
  },
  styles: {
    global: {
      "html, body": {
        bg: "brand.background",
        color: "brand.font",
      },
    },
  },
});
