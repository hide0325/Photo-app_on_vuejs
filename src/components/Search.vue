<template>
  <div class="search">
    <input type="search" placeholder="文字を入力してください">
    <button @click="searchImg">SEARCH</button>
  </div> 
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Search',
  methods: {
    ...mapActions(['searchImg'])
  }
}
</script>

<style lang="stylus" scoped>
.search
  display flex
  justify-content space-between
  width 50%
  margin auto
</style>
