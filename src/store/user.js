import router from '../router'
import {auth} from '../firebase'
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  
} from 'firebase/auth';

const store_user = {
      state: {
            user: null,
            nickname: null
      },
      getters: {

      },
      mutations: {
            setUser(state,user){
                  state.user = user
            },

            clearUser(state){
                  state.user = null
            },

            setNick(state,nick){
                state.nickname = nick
            }
      },
      actions:{
            async login ({ commit }, details) {
                  
                  const { email, password } = details
                  
                  try {
                    await signInWithEmailAndPassword(auth, email, password)
                  } catch (error) {
                    switch(error.code) {
                      case 'auth/user-not-found':
                        alert("User not found")
                        break
                      case 'auth/wrong-password':
                        alert("Wrong password")
                        break
                      default:
                        alert("Something went wrong")
                    }
            
                    return
                  }
            
                  commit('setUser', auth.currentUser)
                  commit('setNick',auth.currentUser.displayName) 
                  router.push('/')


                 
                },

                async register ({ commit}, details) {
                  
                  const { email, password,nickname } = details
                  
                 try {
                  const {user} = await createUserWithEmailAndPassword(auth, email, password)
                   await updateProfile(user, {
                        displayName: nickname
                      })
                    commit('setNick',user.displayName) 
                   
                 } catch (error) {
                   switch(error.code) {
                     case 'auth/email-already-in-use':
                       alert("Email already in use")
                      
                       break
                     case 'auth/invalid-email':
                       alert("Invalid email")
                       break
                     case 'auth/operation-not-allowed':
                       alert("Operation not allowed")
                       break
                     case 'auth/weak-password':
                       alert("Weak password")
                       break
                     default:
                       alert("Something went wrong")
                   }
           
                   return
                 }
           
                 commit('setUser', auth.currentUser)
           
                 router.push('/')
                 
               },

               async logout ({ commit }) {
                  await signOut(auth)
            
                  commit('clearUser')
            
                  router.push('/login')
                  
                },
                fetchUser ({ commit }) {
                  
                  auth.onAuthStateChanged(async user => {
                    if (user === null) {
                      commit('clearUser')
                      
                    } else {
                        
                     commit('setUser', user)
                     commit('setNick',user.displayName) 
                        
                      if (router.isReady() && router.currentRoute.value.path === '/login') {
                        router.push('/')
                      }
                    }
                  })
                },
               
      }
}

export default store_user;