import { createStore } from 'vuex'
import animals from '@/animals_info/animals';
import mutations from './mutations';
import store_user from './user';
import router from '../router'
import {auth} from '../firebase'
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut 
} from 'firebase/auth';
//firebase




const {LIST} = mutations;

 const store =  createStore({
  state: {
    animals_list: animals,
    page: 1,
    limit: 8,
    all_pages: 0,
    render_list: {}
  },
  getters: {
    moviesList:(state) => state.animals_list,
    slicedIDs: (state) => (from,to)=>state.animals_list.slice(from,to),
    currentPage: (state) => state.page,
    animPerPage: (state) => state.limit
  },
  mutations: {
    setPage(state,page){
      state.page = page;
    },
    sliceAnimals(state){
      //state.top250IDs.slice(12*(state.currentPage-1),12*state.currentPage)
      state.animals_list.slice(state.limit*(state.page-1),state*state.page)
    },

    [LIST](state,val){
      
      state.render_list = val
    },

    setAllPage(state){
      
      state.all_pages = Math.ceil((state.animals_list.length+1)/state.limit)
    }

  },
  actions: {
    initAnimalsStore:{
      handler({dispatch}){
            dispatch('fetchAnimals')
      },
      root: true
},
   fetchAnimals({getters,commit}){
    
    const{currentPage,animPerPage,slicedIDs} = getters;
    const from = (currentPage*animPerPage)- animPerPage
    const to = currentPage * animPerPage

    const animToFetch = slicedIDs(from,to)

    

    commit(LIST,animToFetch)

    

   }
  },
  modules: {
    store_user
  }
})

store.dispatch('fetchUser');

export default store