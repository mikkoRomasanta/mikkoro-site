<template>
  <v-footer dark padless>
    <v-card flat tile class="black white--text py-5 text-center" width="100%">
      <v-row>
        <v-col cols="12" sm="4">
          <v-card-text class="white--text pt-2">
            <v-btn icon>
              <v-icon class="amaranth--text">fa-brands fa-firefox</v-icon>
              <span class="jaggedice--text pl-4"
                >Site still under construction</span
              >
            </v-btn>
          </v-card-text>
        </v-col>
        <v-col cols="12" sm="4">
          <v-card-text class="pt-2">
            <v-btn
              v-for="(icon, index) in icons"
              :key="icon"
              class="mx-1 amaranth--text"
              icon
              :href="url[index]"
              target="_blank"
            >
              <v-icon size="24px">{{ icon }}</v-icon>
            </v-btn>
          </v-card-text>
        </v-col>
        <v-col cols="12" sm="4">
          <v-card-text class="pt-2 bondiblue--text">
            <span class="amaranth--text">mikko</span>romasanta
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-github", "mdi-linkedin"],
    url: [
      "https://facebook.com/27xxxxxx",
      "https://github.com/mikkoRomasanta",
      "https://www.linkedin.com/in/mikkoromasanta/",
    ],
  }),
}
</script>
