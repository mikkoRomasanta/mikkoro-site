<template>
  <v-app
    id="home"
    :style="{ background: $vuetify.theme.themes.dark.background }"
  >
    <nav-bar />
    <v-container fluid>
      <v-row>
        <v-col cols="6">
          <v-img src="xof.gif" contain max-height="25rem"></v-img>
        </v-col>
        <v-col cols="6">
          <h5 class="amaranth--text top">Hello Im Mikko</h5>
          <h1 class="amaranth--text">Developer</h1>
          <p class="bondiblue--text">
            An IT graduate from the Philippines <br />
            Who is currently trying to enter the programming industry
            <br />
            Recently I've been creating apps for personal use to try and hone my
            craft<br />
            This site is one of my recent projects. Thank you for visiting
          </p>
          <v-btn tile class="amaranth jaguar--text" dark> about me </v-btn>
        </v-col>
      </v-row>
      <v-row id="about">
        <v-col cols="12" class="padd">
          <h1
            class="jaggedice--text"
            style="font-size: 6rem; text-align: center"
          ></h1>
          <div class="first">
            <v-row>
              <v-col cols="12">
                <v-row>
                  <v-col cols="6"
                    ><h1 class="bondiblue--text">Junior Developer</h1></v-col
                  >
                  <v-col cols="6"></v-col>
                  <v-col cols="6"></v-col>
                  <v-col cols="6" class="child">
                    <div class="jaggedice--text">
                      <p>PHP</p>
                      <p>Javascript</p>
                      <p>Maintain and improve</p>
                      <p>the functionality of existing products and software</p>
                    </div>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </div>
          <div class="first-rev mt-4">
            <v-row>
              <v-col cols="12">
                <v-row>
                  <v-col cols="6"></v-col>
                  <v-col cols="6"
                    ><h1 class="amaranth--text">IT Staff</h1></v-col
                  >
                  <v-col cols="6" class="child-rev"
                    ><div class="jaggedice--text">
                      <p>Hardware, Software, and Network</p>
                      <p>troubleshooting, installation, and maintenance</p>
                      <p>PHP</p>
                      <p>Laravel</p>
                      <p>Javascript</p>
                    </div></v-col
                  >
                  <v-col cols="7"> </v-col>
                </v-row>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <SiteFooter />
  </v-app>
</template>

<script>
import NavBar from "../components/NavBar.vue"
import SiteFooter from "../components/SiteFooter.vue"

export default {
  name: "HomeView",

  components: {
    NavBar,
    SiteFooter,
  },
}
</script>
<style>
html {
  font-size: 20px;
}
.top {
  margin-top: 9rem;
}
.topToolbar {
  margin-top: 5rem;
  text-align: center;
}
.first {
  width: 100%;
  height: 25rem;
  /* background: linear-gradient(to right, #27214d, #27214d, #08040b, #08040b); */
  text-align: center;
  padding: 2rem 2rem;
}
.first-rev {
  width: 100%;
  height: 25rem;
  text-align: center;
  padding: 2rem 2rem;
}
.first h1 {
  font-size: 4rem;
  text-align: right;
}
.first-rev h1 {
  font-size: 4rem;
  text-align: left;
}
@media (max-width: 599px) {
  .first h1,
  .first-rev h1 {
    font-size: 1.5rem;
    margin-right: 20%;
  }
}
.child {
  display: inline-block;
  padding-top: 1rem;
  vertical-align: middle;
  text-align: left;
  font-size: 1rem;
  /* margin-left: 20%; */
}
.child-rev {
  display: inline-block;
  padding-top: 1rem;
  vertical-align: middle;
  text-align: right;
  font-size: 1rem;
  /* margin-left: 20%; */
}
.col-12.padd {
  padding: 1rem 0 !important;
}

#about {
  position: relative;
}
#about:after {
  content: "";
  position: absolute;
  z-index: 1;
  top: 2rem;
  bottom: 2rem;
  left: 50%;
  border-left: 0.15rem solid #d42450;
  transform: translate(-50%);
}
</style>

<!-- COLOR CODES
BLACK | Jaguar        #08040B
WHITE | Jagged Ice    #C6E4E4
L.BLUE | Bondi Blue   #00A7B5
D.BLUE | Indigo       #301D78
G.BLUE | Paua         #27214D
PINK | Amaranth       #D42450
-->
