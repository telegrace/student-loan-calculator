import { createVuetify } from "vuetify";
import "vuetify/dist/vuetify.min.css";

export default createVuetify({
  theme: {
    defaultTheme: "customLightTheme",
    themes: {
      customLightTheme: {
        dark: false,
        variables: {},

        colors: {
          background: "#FFFFFF",
          primary: "#00474b",
          secondary: "#00474b",
          highlight: "#30c3b0",
        },
      },
    },
  },
});
// https://coolors.co/30c3b0-00474b-ffffff-00474b-c9e8ea
