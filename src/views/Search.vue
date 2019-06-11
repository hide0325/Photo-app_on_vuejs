<template>
  <form class="search mb-3">
    <input class="search__input" placeholder="文字を入力してください">
    <button class="search__btn" ref="btn" @click.prevent="searchImg">SEARCH</button>
  </form>  
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Search',
  methods: {
    ...mapActions(['mountSearchImg', 'searchImg'])
  },
  mounted() {
    const btn = this.$refs.btn.previousElementSibling.value
    this.mountSearchImg(btn)
  }
}
</script>

<style lang="stylus" scoped>
.search
  display flex
  justify-content flex-end
  &__input
    border 1px solid #8c8c8c
    border-radius 2px
    padding: 5px
    margin-right 7px
  &__btn
    background #2c3e50
    border-radius 6px
    box-shadow 0px 3px 1px -2px rgba(0,0,0,0.2),
               0px 2px 2px 0px rgba(0,0,0,0.14),
               0px 1px 5px 0px rgba(0,0,0,0.12)
    padding: 5px 15px
    color #FFF
    &:hover
      opacity .7
</style>