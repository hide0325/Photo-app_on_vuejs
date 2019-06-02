<template>
  <div>
    <Search />
    <Match />
    <Sort />
    <Pager />
    <Result />
  </div>
</template>

<script>
import Search from '@/components/Search.vue'
import Match from '@/components/Match.vue'
import Sort from '@/components/Sort.vue'
import Pager from '@/components/Pager.vue'
import Result from '@/components/Result.vue'

export default {
  name: 'Home',
  components: {
    Search,
    Match,
    Sort,
    Pager,
    Result
  }
}
</script>