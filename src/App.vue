<template>
  <v-app>
    <v-app-bar
      app
      elevate-on-scroll
      color="rgb(207, 195, 150)"
      light
      shrink-on-scroll
      prominent
      :src="require('./assets/header.jpg')"
      fade-img-on-scroll
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top, rgba(207, 195, 150, .5), 	rgba(207, 195, 150, .3)"
        ></v-img>
      </template>
      <v-spacer></v-spacer>
      <div class="d-flex align-center" color="rgb(86, 72, 50)">
        <v-toolbar-title>Charity Links</v-toolbar-title>
      </div>
      <v-spacer></v-spacer>
      <a href="/about">About</a>
    </v-app-bar>

    <v-main>
    <router-view/>
        </v-main>
  </v-app>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
