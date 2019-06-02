<template>
  <div>
    <!-- <div class="search">
      <input type="search" placeholder="文字を入力してください">
      <button @click.prevent="searchImg">SEARCH</button>
    </div> -->
    <!-- <div class="filter">
      <input v-model="filterImg" placeholder="タグで絞り込む">
    </div> -->
    <!-- <div class="sort">    
      <button @click="sortMany">ManyLikes</button>
      <button @click="sortFew">FewLikes</button>
    </div> -->
    <!-- <div v-if="imgs.length > 5" class="pager">
      <button @click="topPage" :disabled="btnPrev">TOP</button>
      <button @click="prevPage" :disabled="btnPrev">PREV</button>
      <div>{{ currentPage }}/{{ totalPage }}</div>
      <button @click="nextPage" :disabled="btnNext">NEXT</button>
      <button @click="endPage" :disabled="btnNext">END</button>
    </div> -->
    <!-- <transition>
      <div class="result" :key="filteredImgs">
        <div v-for="img in filteredImgs" :key="img.id">
          <p><i class="fas fa-heart fa-pink"></i>{{ img.likes }}</p>
          <p><i class="fas fa-tag fa-blue "></i>{{ img.tags }}</p>
          <a :href="img.pageURL" target="_blank"><img :src="img.previewURL"></a>
        </div>
      </div>
    </transition> -->
    <Search />
    <Filter />
    <Sort />
    <Pager />
    <Result />
  </div>
</template>

<script>
import Search from '@/components/Search.vue'
import Filter from '@/components/Filter.vue'
import Sort from '@/components/Sort.vue'
import Pager from '@/components/Pager.vue'
import Result from '@/components/Result.vue'

export default {
  name: 'home',
  components: {
    Search,
    Filter,
    Sort,
    Pager,
    Result
  },
  data() {
    return {
      imgs: [],
      filterImg: '',
      currentPage: 1,
      viewRange: 10,
    }
  },
  computed: {
    currentView() {
      return this.imgs.filter((img, index) => {
        return (index < this.currentPage * this.viewRange) &&
               (index >= (this.currentPage - 1) * this.viewRange);
      })
    },
    totalPage() {
      return Math.ceil(this.imgs.length / this.viewRange);
    },
    btnNext() {
      const maxPage = Math.ceil(this.imgs.length / this.viewRange);
      return this.currentPage >= maxPage;
    },
    btnPrev() {
      return this.currentPage === 1;
    },
    filteredImgs() {
      return this.currentView.filter((img) => {
        return img.tags.match(this.filterImg);
      })
    }
  },
  methods: {
    searchImg(e) {
      let API_KEY = '12654185-9ddf6ac2004d8209b3b3e202c';
      let baseUrl = 'https://pixabay.com/api/?key=' + API_KEY;
      let option = '&orientation=horizontal&per_page=50';
      let keyword = '&q=' + encodeURIComponent( e.target.previousElementSibling.value );
      let URL = baseUrl + keyword + option;
      this.imgs = [];
      fetch( URL )
      .then(( data ) => data.json())
      .then(( json ) => {
        if (json.totalHits > 0) {
          json.hits.map((img)=>{
            this.currentPage = 1
            this.imgs.push(img)
            // console.log(this.imgs)
          })             
        } else {
          alert('nothing...')
        }
      })
      .catch(() => {
        alert('is error...');
      });
    },
    prevPage() {
      if (this.currentPage > 1) this.currentPage--;
    },
    nextPage() {
      this.currentPage++;
      this.btnPrev = false;
    },
    topPage() {
      this.currentPage = 1;
    },
    endPage() {
      const maxPage = Math.ceil(this.imgs.length / this.viewRange);
      this.currentPage = maxPage;     
    },
    sortMany(){
      this.imgs.sort((a, b) => {
        return b.likes - a.likes;
      })
    },
    sortFew(){
      this.imgs.sort((a, b) => {
        return a.likes - b.likes;
      })
    }
  }
}
</script>


<style scoped>
.search {
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: auto;  
}
.filter {
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: auto;  
}
.sort {
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: auto;
}
.pager {
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: auto;
}
.result {
  display: flex;
  flex-wrap: wrap;
  width: 50%;
  margin: auto;
}
.result div {
  flex-basis: 50%;
  text-align: center;
}
.result div a:hover {
  opacity: .7;
}
.result div a img {
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
}

.fas {
   margin-right: 3px;
}
.fa-pink {
  color: #ff7a8e;
}
.fa-blue {
  color: #be70e6;
}

.v-enter-active {
  transition: opacity .8s;
}
.v-enter {
  opacity: 0;
}
</style>



