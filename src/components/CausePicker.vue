<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to Charity Links
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
          <a
            href="#"
            class="subheading mx-3"
          >
            COVID-19
          </a>
        </v-row>
      </v-col>s
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'CausePicker',
  }
</script>
