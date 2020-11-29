<template>
  <v-app>
    <v-app-bar
      app
      color="#fff"
      light
      prominent
    >
      <v-spacer></v-spacer>
      <router-link to="/">
      <div class="d-flex justify-center">
        <v-img
            :src="require('./assets/logo.png')"
            width="100"
        ></v-img>
        <div class="d-flex justify-center align-start flex-column logo ml-2">
            <span class="cyan--text text--darken-2 font-weight-bold logo">CBAH</span>
            <span class="text-subtitle-1 cyan--text text--darken-4">Charity Begins At Home</span>
        </div>
      </div>
      </router-link>
      <v-spacer></v-spacer>
      <a class="align-self-center" href="/about">About</a>
    </v-app-bar>

    <v-main>
    <router-view/>
        </v-main>
  </v-app>
</template>

<style lang="scss">
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #153B50;
}

.logo {
    font-family: 'Quicksand', sans-serif;
    font-size: 42px;
    margin-bottom: -12px;
}

</style>
