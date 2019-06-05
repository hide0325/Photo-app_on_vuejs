<template>
  <transition>
    <div class="result" :key="filteredImgs">
      <div class="result-box" v-for="img in filteredImgs" :key="img.id">
        <p class="result-box__txt">
          <i class="fas fa-heart fa-pink"></i>
          {{ img.likes }}
        </p>
        <p class="result-box__txt">
          <i class="fas fa-tag fa-blue "></i>
          {{ img.tags }}
        </p>
        <a class="result-box__link" :href="img.pageURL" target="_blank">
          <img class="result-box__link__img" :src="img.previewURL">
        </a>
      </div>
    </div>
  </transition>  
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Result',
  computed: {
    ...mapGetters(['filteredImgs'])
  }
}
</script>

<style lang="stylus" scoped>
.result
  display flex
  flex-wrap wrap

.result-box
  flex-basis 50%
  display flex
  flex-direction column
  &__txt
    display flex
    word-break break-all
  &__link
    margin-top auto
    &:hover
      opacity .7
    &__img
      width 100%
      box-sizing border-box
      padding 5px

.fas
  margin 0 7px
.fa-pink
  color #ff7a8e
.fa-blue
  color #be70e6

.v-enter-active
  transition opacity .8s
.v-enter
  opacity 0
</style>

