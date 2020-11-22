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
    </v-app-bar>

    <v-main>
      <CausePicker/>
    </v-main>
  </v-app>
</template>

<script>
import CausePicker from './components/CausePicker';

export default {
  name: 'App',

  components: {
    CausePicker,
  },

  data: () => ({
    //
  }),
};
</script>
