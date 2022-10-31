import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      p: {
        padding: 0,
        margin: 0,
      },
      "*": {
        padding: 0,
        margin: 0,
        boxSizing: "borderBox",
      },
      a: {
        textDecoration: "none",
      },
    },
  },
});
