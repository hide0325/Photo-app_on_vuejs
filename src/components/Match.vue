<template>
  <div class="match">
    <input v-model="$store.state.matchImg" placeholder="タグで絞り込む">
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
  display flex
  justify-content space-between
  width 50%
  margin auto
</style>

