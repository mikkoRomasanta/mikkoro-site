import "@fortawesome/fontawesome-free/css/all.css"
import "material-design-icons-iconfont/dist/material-design-icons.css"
import Vue from "vue"
import Vuetify from "vuetify/lib/framework"

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: "fa" || "md" || "mdi",
  },
  theme: {
    themes: {
      dark: {
        background: "#08040B",
        jaguar: "#08040B",
        jaggedice: "#C6E4E4",
        bondiblue: "#00A7B5",
        indigo: "#301D78",
        paua: "#27214D",
        amaranth: "D42450",
      },
      light: {
        background: "#C6E4E4",
        jaguar: "#08040B",
        jaggedice: "#C6E4E4",
        bondiblue: "#00A7B5",
        indigo: "#301D78",
        paua: "#27214D",
        amaranth: "D42450",
      },
    },
  },
})
