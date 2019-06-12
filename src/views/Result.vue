<template>
  <transition>
    <div class="result" :key="currentPage">
      <div class="result-box mb-3" v-for="img in filteredImgs" :key="img.id">
        <div class="result-box__txt">
          <i class="fas fa-heart fa-pink"></i>
          {{ img.likes }}
        </div>
        <div class="result-box__txt">
          <i class="fas fa-tag fa-purple "></i>
          {{ img.tags }}
        </div>
        <a class="result-box__link" :href="img.pageURL" target="_blank">
          <v-card class="ma-2">
            <v-img aspect-ratio="1" :src="img.previewURL"></v-img>
          </v-card>
        </a>
      </div>
    </div>
  </transition>  
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'Result',
  computed: {
    ...mapState(['currentPage']),
    ...mapGetters(['filteredImgs'])
  }
}
</script>

<style lang="stylus" scoped>
.result
  display flex
  flex-wrap wrap

.result-box
  flex-basis 25%
  display flex
  flex-direction column
  &__txt
    display flex
    word-break break-all
  &__link
    margin-top auto
    &:hover
      opacity .7

.fas
  margin 0 7px
.fa-pink
  color #ff7a8e
.fa-purple
  color #be70e6

.v-enter-active
  transition opacity .8s
.v-enter
  opacity 0
</style>

