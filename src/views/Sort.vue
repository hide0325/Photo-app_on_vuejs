<template>
  <div class="sort mb-3"> 
    <i class="fas fa-heart fa-pink" @click="sortMany"></i>
    <i class="fas fa-heart fa-blue" @click="sortFew"></i>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Sort',
  methods: {
    ...mapMutations(['sortMany', 'sortFew'])
  }
}
</script>

<style lang="stylus" scoped>
.fas
  font-size 3rem
  text-shadow 2px 2px 3px
  &:hover
    opacity .7
    cursor pointer
  &.fa-pink
    color #ff7a8e
    margin-right 7px
  &.fa-blue
    color #4d9fd9
</style>