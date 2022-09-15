import { createStore } from 'vuex'
import animals from '@/animals_info/animals';
import mutations from './mutations';


function serializeRespons(list){
  return list.reduce((acc,list)=>{
    
        acc[acc.name] = list;
        return acc
  },{})
  }

const {LIST} = mutations;

export default createStore({
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
      console.log('essss')
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
    console.log('hello')
    const{currentPage,animPerPage,slicedIDs} = getters;
    const from = (currentPage*animPerPage)- animPerPage
    const to = currentPage * animPerPage

    const animToFetch = slicedIDs(from,to)

    console.log(animToFetch)

    commit(LIST,animToFetch)

    

   }
  },
  modules: {
  }
})
