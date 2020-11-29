<template>
  <v-card max-width="800" class="mx-auto">
    <v-img
      class="white--text align-end"
      height="200px"
      :src="causeData.imageUrl"
    >
    <v-card-title>{{causeData.title}}</v-card-title>
    </v-img>
    <v-card-text class="text--primary text-justify">
      <div>{{causeData.description}}</div>
      <div class="my-4">
        <h3>Links:</h3>
        <a v-for="link in causeData.links" :key="link.url" :href="link.url" target="_blank">
        <v-btn
            rounded
            color="primary"
            dark>{{link.name}}</v-btn>
        </a>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
  import {CauseData} from '@/assets/CauseData.js';
  export default {
    name: 'CauseInfo',
    props: ['id'],
    computed: {
        causeData:  function () {
            return CauseData.filter(d => d.id === this.id)[0]
        }
    },
  }
</script>
