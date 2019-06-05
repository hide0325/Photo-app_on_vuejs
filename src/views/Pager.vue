<template>
  <div v-if="imgs.length > 5" class="pager mb-3">
    <v-btn @click="topPage" :disabled="btnPrev">TOP</v-btn>
    <v-btn @click="prevPage" :disabled="btnPrev">PREV</v-btn>
    <div class="pager__state subheading">{{ currentPage }} / {{ totalPage }}</div>
    <v-btn @click="nextPage" :disabled="btnNext">NEXT</v-btn>
    <v-btn @click="endPage" :disabled="btnNext">END</v-btn>
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
  justify-content space-around
  &__state
    display flex
    align-items center

.v-btn
  min-width min-content
</style>

