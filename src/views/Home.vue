<template>
  <div class="home">
    <CausePicker />
  </div>
</template>

<script>
// @ is an alias to /src
import CausePicker from '@/components/CausePicker.vue'

export default {
  name: 'Home',
  components: {
    CausePicker
  }
}
</script>
