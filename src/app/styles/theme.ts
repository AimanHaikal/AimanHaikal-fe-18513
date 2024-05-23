// theme.js
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: {
      50: "#f9fafb",
      // Add more shades if needed
    },
    // Add more custom colors if needed
  },
  fonts: {
    body: "Roboto, sans-serif",
    heading: "Poppins, sans-serif",
  },
  // Add more theme customizations if needed
});

export default theme;
