<template>
   <div class="header">
            <div class="header_content">
                  
                  <div class="header_content_nav">
                        <div>
                              <h3>Cozy House</h3>
                              <span>Shelter for pets in Boston
                              </span>
                        </div>
                        <ul>
                              <li @click="$router.push('/')">About the shelter</li>
                              <li @click="$router.push('/pets/1')">Pets</li>
                              
                        </ul>
                  </div>

                  <div class="header_content_center">
                        <h2>Not only people 
                              need a house</h2>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida 
                                    est in porttitor  porttitor. Duis sodales elementum ipsum, vehicula 
                                    condimentum erat fringilla et.</p>
                              <button @click="friend_make" :class="{ 'green' : friend}">{{be_friend}}</button>
                              </div>

            </div>
      </div>
</template>

<script>
export default {
name: 'Navigation',
data(){
      return{
            friend:false,
            friend_txt: '✓ You are my friend',

      }
},
computed:{
   be_friend(){
      return this.friend ? this.friend_txt : 'Be a friend'
   }
},
methods:{
      friend_make(){
            this.friend = !this.friend;
      }
}
}
</script>

<style>
.green{
background-color: green !important;
    font-size: medium;
    transition: background-color 0.5s;
}
</style>