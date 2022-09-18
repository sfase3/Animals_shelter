<template>
  <main class="login">
      <section class="forms">
            
            <form  class="register" v-if="log"  @submit.prevent="register">
                  <h2>Log in</h2>
                  <span>Don't have an account ? <span @click="changeLog_Reg" style="color:blue;text-decoration:underline">Sign in</span></span>
                  <input class="inputs" type="email" placeholder="Email address" v-model="login_form.email" >
                  <input class="inputs" type="password" placeholder="Password" v-model="login_form.password">
            <input type="submit" value="Log in">
            </form>

            <form v-else  class="register"  @submit.prevent="register">
                  <h2>Register</h2>
                  <span>Already have an account ? <span @click="changeLog_Reg" style="color:blue;text-decoration:underline">Log in</span></span>
                  <input class="inputs" type="text" placeholder="Nickname" v-model="register_form.nickname">
                  <input class="inputs" type="email" placeholder="Email address" v-model="register_form.email" >
                  <input class="inputs" type="password" placeholder="Password" v-model="register_form.password">
            <input type="submit" value="Register">
            </form>
          
      </section>
  </main>
</template>

<script>
import {ref} from 'vue'
import {useStore} from 'vuex'
import Anim from '@/pages/Anim.vue';
import { mapActions } from 'vuex';
//import store from '@/store/index'

export default {
    name: "Login",
    data(){
      return {
            log: true 
      }
    },
    methods:{
      changeLog_Reg(){
            this.log = !this.log
      },
      
    },
    setup() {
        const login_form = ref({});
        const register_form = ref({});
        const store = useStore();
        const login = async () => {
            store.dispatch("login", login_form.value);
        };
        const register = async () => {
            store.dispatch("register", register_form.value,register_form.nickname )
            
        };
        return {
            login_form,
            register_form,
            login,
            register
        };
    },
    components: { Anim }
}
</script>

<style>
.login{
      height: 600px;
      display: flex;
      align-items: center;
      justify-content: center;
}

.register{
      display: flex;
      flex-direction: column;
}

.register h2{
      margin-top: 0;
      margin-bottom: 10px
}

.register input {
      margin-top: 10px;
      
      padding-left: 10px;
}

input[type='submit']{
      
      font-family: Poppins-Medium;
    font-size: 15px;
    
    line-height: 1.2;
    text-transform: uppercase;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    width: 100%;
    height: 50px;
}

input[type='submit']:hover{
      color: #fff;
      background-color: #f1cdb3;
}

input:focus::placeholder {
  color: transparent;
}

.inputs {
      font-family: Poppins-Regular;
    font-size: 15px;
    color: #555555;
    line-height: 1.2;
    display: block;
    height: 45px;
    background: transparent;
    padding: 0 5px;
}
</style>