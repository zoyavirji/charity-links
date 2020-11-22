<template>
  <div class="cause">
    <h1>Cause</h1>
    <CauseInfo :id="$route.params.id" />
  </div>
</template>

<script>
import CauseInfo from '@/components/CauseInfo.vue';

export default {
  name: 'Cause',
  components: {
    CauseInfo
  }
}
</script>
