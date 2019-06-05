<template>
  <v-app>
    <v-content>
      <v-container>
        <div id="app">
          <Title />
          <Loading />
          <Search />
          <Match />
          <Sort />
          <Pager />
          <Result />
        </div>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Loading from '@/components/Loading.vue'
import Title from '@/views/Title.vue'
import Search from '@/views/Search.vue'
import Match from '@/views/Match.vue'
import Sort from '@/views/Sort.vue'
import Pager from '@/views/Pager.vue'
import Result from '@/views/Result.vue'

export default {
  name: 'App',
  components: {
    Loading,
    Title,
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
