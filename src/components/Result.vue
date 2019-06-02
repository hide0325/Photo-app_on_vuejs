<template>
  <transition>
    <div class="result" :key="filteredImgs">
      <div v-for="img in filteredImgs" :key="img.id">
        <p><i class="fas fa-heart fa-pink"></i>{{ img.likes }}</p>
        <p><i class="fas fa-tag fa-blue "></i>{{ img.tags }}</p>
        <a :href="img.pageURL" target="_blank"><img :src="img.previewURL"></a>
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
  width 50%
  margin auto
.result div
  flex-basis 50%
  text-align center
.result div ahover
  opacity .7
.result div a img
  width 100%
  padding 5px
  box-sizing border-box

.fas
   margin-right 3px
.fa-pink
  color #ff7a8e
.fa-blue
  color #be70e6

.v-enter-active
  transition opacity .8s
.v-enter
  opacity 0
</style>

