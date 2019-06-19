<template>
  <transition-group
    class="result"
    tag="div"
    @before-enter="beforeEnter"
    @enter="enter"
    :css="false"
  >
    <div
      class="result-box mb-3"
      v-for="(img, index) in filteredImgs"
      :key="img.id"
      :data-index="index"
    >
      <div class="result-box__txt">
        <i class="fas fa-heart fa-pink"></i>
        {{ img.likes }}
      </div>
      <div class="result-box__txt">
        <i class="fas fa-tag fa-purple"></i>
        {{ img.tags }}
      </div>
      <a
        class="result-box__link"
        :href="img.pageURL"
        target="_blank"
      >
        <v-card class="ma-2">
          <v-img aspect-ratio="1" :src="img.previewURL"></v-img>
        </v-card>
      </a>
    </div>
  </transition-group> 
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Result',
  computed: {
    ...mapGetters(['filteredImgs'])
  },
  methods: {
    beforeEnter(el) {
      el.classList.add('v-enter');
    },
    enter(el, done) {
      let delay = el.dataset.index * 100;
      setTimeout(() => {
        el.classList.remove('v-enter')
        el.classList.add('v-enter-active')
      }, delay)
      // after-enter、after-leaveフックに遷移させるにはdoneをsetTimeoutで指定する
      // setTimeout(done, 2000)
    }
    // afterEnter(el) {
    //   el.style.background = 'tomato';
    // }
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

.v-enter
  opacity 0
.v-enter-active
  transition opacity .8s
</style>