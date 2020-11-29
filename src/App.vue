<template>
  <v-app>
    <v-app-bar
      app
      color="#fff"
      light
      prominent
    >
      <v-spacer></v-spacer>
      <div class="d-flex justify-center">
        <v-img
            :src="require('./assets/logo.png')"
            width="100"
        ></v-img>
        <div class="d-flex justify-center align-start flex-column logo mt-4 ml-2" color="#153B50">
            <span class="text-h4 font-weight-light">CBAH</span>
            <span class="text-subtitle-1">Charity Begins At Home</span>
        </div>
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
  color: #153B50;
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
