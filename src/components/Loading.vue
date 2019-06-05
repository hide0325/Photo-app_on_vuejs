<template>
  <p v-if="loading" class="loading">Loading...</p>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['loading'])
  }
};
</script>

<style lang="stylus" scoped>
.loading
  position fixed
  background-color rgba(0, 0, 0, 0.75)
  height 100vh
  width 100vw
  left 0
  top 0
  display flex
  align-items center
  justify-content center
  margin 0
  color #fff
</style>
