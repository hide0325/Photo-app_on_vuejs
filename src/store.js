import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    imgs: [],
    matchImg: '',
    currentPage: 1,
    viewRange: 12,
    btnPrev: true,
    baseUrl: 'https://pixabay.com/api/?key=12654185-9ddf6ac2004d8209b3b3e202c',
    searchOption: '&orientation=horizontal&per_page=50'
  },
  mutations: {
    setLoading(state, isLoading) {
      // console.log(isLoading)
      state.loading = isLoading
    },
    searchImg(state, json) {
      // console.log(json)
      state.imgs = [];
      json.json.hits.map((img)=>{
        state.currentPage = 1
        state.imgs.push(img)
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
    },
  },
  actions: {
    mountSearchImg({ dispatch  }, initialValue ) {
      const keyword = '&q=' + encodeURIComponent( initialValue );
      dispatch('fetchData', keyword );
    },
    searchImg({ dispatch }, event ) {
      const keyword = '&q=' + encodeURIComponent( event.target.previousElementSibling.value );
      dispatch('fetchData', keyword);
    },
    fetchData({ commit, state }, keyword) {

      // console.log(keyword)
      const URL = state.baseUrl + keyword + state.searchOption;

      async function asyncFnc() {
        commit('setLoading', true);
        const res = await axios.get(URL);
        commit('setLoading', false);
        // console.log(res.data);
        return res.data;
      }
      asyncFnc()
        .then((json) => {
          // console.log(json)
          if (json.totalHits > 0) {
            commit('searchImg', { json });
          } else {
            alert('noting...');
          }
        })
        .catch((err) => {
          console.log(err);
          commit('setLoading', false);
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
