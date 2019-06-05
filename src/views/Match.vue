<template>
  <div class="match mb-3">
    <input class="match__input" v-model="$store.state.matchImg" placeholder="タグ名で絞り込む">
  </div>  
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Match',
  data() {
    return {
      matchImg: ''
    }
  }
}
</script>

<style lang="stylus" scoped>
.match
  &__input
    display block
    border 1px solid #8c8c8c
    border-radius 2px
    padding: 5px
    margin-left auto
</style>