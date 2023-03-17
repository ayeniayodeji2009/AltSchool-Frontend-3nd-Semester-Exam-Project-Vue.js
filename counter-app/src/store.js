//import Vue from 'vue'
//import Vuex from 'vuex'



import {createStore} from 'vuex';

const store = createStore({
state:{
  count: 0,
  customInput: "",
  showButton: true
},
getters:{
  getCount(state){      
    return state.count;     
   }
},

actions:{

  // async showSetButton({commit}){   
  //   return Promise.resolve(commit('showSetButton'))    
  // },

  // async hideSetButton({commit}, payload){   
  //   return Promise.resolve(commit('hideSetButton' , payload))    
  // },
  
  async setValue({commit}){   
    return Promise.resolve(commit('setValue'))
  },

  
async setValueInput({commit}, payload){   
    return Promise.resolve(commit('setValueInput' , payload))    
  },
  async increaseChangeCount({commit}, payload){   
    return Promise.resolve(commit('increaseChangeCount', payload))    
  },

  async decreaseChangeCount({commit}, payload){   
      return Promise.resolve(commit('decreaseChangeCount', payload))    
  },

  async reset({commit}){    
    return Promise.resolve(commit('reset'))   
  }
},
mutations:{


  setValue(state){
    state.count = state.customInput
 // console.log(typeof state.count)
  },

  setValueInput(state, payload){           
      state.customInput = payload
   //   console.log(state.customInput)
   //   console.log(typeof state.customInput)
  },

  increaseChangeCount(state,payload){           
    return state.count += payload        
  },

  decreaseChangeCount(state,payload){           
    return   state.count -= payload 
  },
  
  reset(state){          
    return state.count = 0;        
  }
}
})
export default store










// Vue.use(Vuex)

// export default new Vuex.Store({
//   state: {
//     count: 0
//   },
//   getters: {
//     parity: state => state.count % 2 === 0 ? 'even' : 'odd'
//   },
//   mutations: {
//     increment(state) {
//       state.count++;
//     },
//     decrement(state) {
//       state.count--;
//     }
//   },
//   actions: {
//     increment: ({ commit }) => commit('increment'),
//     decrement: ({ commit }) => commit('decrement'),
//     incrementIfOdd: ({ commit, getters }) => getters.parity === 'odd' ? commit('increment') : false,
//     incrementAsync: ({ commit }) => {
//       setTimeout(() => { commit('increment') }, 1000);
//     }
//   }
// });