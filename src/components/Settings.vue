<template>
  <main class="login">
      <section class="forms">
            
            <form  class="register" >
            <h2>Username</h2>
            <input class="inputs" type="text" v-model="this.user.nickname" >      
            <input type="submit" @click.prevent="this.updateNick(this.user.nickname)" value="Save">
            </form>

      </section>
  </main>
</template>

<script>
import { mapActions } from 'vuex'

export default {
name: 'Settings',
props: ['user'],
methods:{
     ...mapActions(['updateNick'])
}
}
</script>

<style scoped>
.settings{
      height: 600px;
}

button{
      margin-top: 20px
}
 
.lll_item{
      width: 15%
}

.mg{
      margin: 10px auto !important
}

</style>