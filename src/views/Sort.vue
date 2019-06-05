<template>
  <div class="sort">    
    <button @click="sortMany">ManyLikes</button>
    <button @click="sortFew">FewLikes</button>
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