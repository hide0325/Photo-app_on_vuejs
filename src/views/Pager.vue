<template>
  <div v-if="imgs.length > 5" class="pager">
    <button @click="topPage" :disabled="btnPrev">TOP</button>
    <button @click="prevPage" :disabled="btnPrev">PREV</button>
    <div>{{ currentPage }}/{{ totalPage }}</div>
    <button @click="nextPage" :disabled="btnNext">NEXT</button>
    <button @click="endPage" :disabled="btnNext">END</button>
  </div>  
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Pager',
  computed: {
    ...mapState(['imgs', 'currentPage', 'viewRange']),
    ...mapGetters(['currentView', 'totalPage', 'btnNext', 'btnPrev'])
  },
  methods: {
    ...mapMutations(['prevPage', 'nextPage', 'topPage', 'endPage'])
  }
}
</script>

<style lang="stylus" scoped>
.pager
  display flex
  justify-content space-between
</style>

