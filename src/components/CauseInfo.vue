<template>
  <v-card>
    {{causeData.title}}
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
