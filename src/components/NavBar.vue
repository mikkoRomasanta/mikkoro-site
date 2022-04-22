<template>
  <v-app-bar app color="indigo" dark flat class="px-8" id="navbar">
    <v-btn icon>
      <v-icon class="bondiblue--text">fa-brands fa-firefox</v-icon>
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn class="bondiblue--text" text @click="scroll('home')">Home</v-btn>
    <v-btn class="bondiblue--text" text @click="scroll('about')">About</v-btn>
    <v-btn class="bondiblue--text" text @click="scroll('projects')"
      >Projects</v-btn
    >
    <v-btn class="bondiblue--text" text @click="scroll('contact')"
      >Contact</v-btn
    >
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    scroll(refName) {
      const element = document.getElementById(refName)
      element.scrollIntoView({ behavior: "smooth" })
    },
  },
}
</script>

<style></style>
