<template>
  <div id="app">
    <Loading />
    <Search />
    <Match />
    <Sort />
    <Pager />
    <Result />
  </div>
</template>

<script>
import Loading from '@/components/Loading.vue'
import Search from '@/views/Search.vue'
import Match from '@/views/Match.vue'
import Sort from '@/views/Sort.vue'
import Pager from '@/views/Pager.vue'
import Result from '@/views/Result.vue'

export default {
  name: 'App',
  components: {
    Loading,
    Search,
    Match,
    Sort,
    Pager,
    Result
  }
}
</script>

<style lang="stylus">
#app
  width 50%
  margin auto
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e50
</style>
