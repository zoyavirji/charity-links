<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to CBAH
        </h1>

        <p class="subheading font-weight-regular">
          Description of this site
        </p>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Select Your Cause:
        </h2>

        <v-row justify="center">
          <v-card
            v-for="cause in causeData"
            :key="cause.id"
          >
          <a :href="'/cause/' + cause.id">
            <v-img
              :src="cause.imageUrl"
              class="white--text align-center"
              height="200px"
              max-width="300px"
              >
               <v-card-title v-text="cause.title"></v-card-title>
            </v-img>
            </a>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import {CauseData} from '../assets/CauseData.js';

  export default {
    name: 'CausePicker',
    data: () => ({
      causeData: CauseData,
    }),
  }
</script>

<style>
    a:link {
        text-decoration: none;
    }
</style>
