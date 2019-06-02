import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    imgs: [],
    matchImg: '',
    currentPage: 1,
    viewRange: 10,
    btnPrev: true
  },
  mutations: {
    searchImg(state, json) {
      // console.log(json)
      state.imgs = [];
      json.json.hits.map((img)=>{
        state.currentPage = 1
        state.imgs.push(img)
      })
    },
    sortMany(state){
      state.imgs.sort((a, b) => {
        return b.likes - a.likes;
      })
    },
    sortFew(state){
      state.imgs.sort((a, b) => {
        return a.likes - b.likes;
      })
    },
    prevPage(state) {
      if (state.currentPage > 1) state.currentPage--;
    },
    nextPage(state) {
      state.currentPage++;
      state.btnPrev = false;
    },
    topPage(state) {
      state.currentPage = 1;
    },
    endPage(state) {
      const maxPage = Math.ceil(state.imgs.length / state.viewRange);
      state.currentPage = maxPage;     
    }
  },
  actions: {
    searchImg({ commit }, event ) {
      let API_KEY = '12654185-9ddf6ac2004d8209b3b3e202c';
      let baseUrl = 'https://pixabay.com/api/?key=' + API_KEY;
      let option = '&orientation=horizontal&per_page=50';
      let keyword = '&q=' + encodeURIComponent( event.target.previousElementSibling.value );
      let URL = baseUrl + keyword + option;
      fetch( URL )
        .then(( data ) => data.json())
        .then(( json ) => {
          if (json.totalHits > 0) {
            commit('searchImg', { json })
          } else {
            alert('nothing...')
          }
        })
        .catch(() => {
          alert('is error...');
        });     
    }
  },
  getters: {
    currentView(state) {
      // console.log(state)
      return state.imgs.filter((img, index) => {
        return (index < state.currentPage * state.viewRange) &&
               (index >= (state.currentPage - 1) * state.viewRange);
      })
    },
    filteredImgs(state, getters) {
      // console.log(getters)
      return getters.currentView.filter((img) => {
        return img.tags.match(state.matchImg);
      })
    },
    totalPage(state) {
      return Math.ceil(state.imgs.length / state.viewRange);
    },
    btnNext(state) {
      const maxPage = Math.ceil(state.imgs.length / state.viewRange);
      return state.currentPage >= maxPage;
    },
    btnPrev(state) {
      return state.currentPage === 1;
    }   
  }
})
