<template>
   <div class="header">

            <div class="header_content">
                  
                  <div class="top-nav">
    <div>
      <h2 class="cozy">Cozy house</h2>
      
    </div>
    <input id="menu-toggle" type="checkbox" />
    <label class='menu-button-container' for="menu-toggle">
    <div class='menu-button'></div>
  </label>
    <ul class="menu" v-if="this.user.user" >
      <li @click="$router.push('/');this.scroll_fnc()">About the shelter</li>
 <li @click="$router.push('/pets/1');this.scroll_fnc()">Pets</li>
 <li @click="$router.push('/login');this.scroll_fnc()" class="dropdown"><span class="dropbtn">{{this.user.nickname}}</span>
  <div class="dropdown-content">
    <span >Settings</span>
    <span  @click="this.logout">Log out</span>
    
  </div>
</li>
</ul>
    <ul class="menu" v-else >
      <li @click="$router.push('/');this.scroll_fnc()">About the shelter</li>
 <li @click="$router.push('/pets/1');this.scroll_fnc()">Pets</li>
 <li @click="$router.push('/login');this.scroll_fnc()">Login / Sign up</li>
    </ul>


</div>


                  <div class="header_content_center">
                        <h2>Not only people 
                              need a house</h2>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida 
                                    est in porttitor  porttitor. Duis sodales elementum ipsum, vehicula 
                                    condimentum erat fringilla et.</p>
                              <button @click="$router.push('/login');checkFriend()" :class="{ 'green' : this.user.user}">{{be_friend}}</button>
                              </div>

            </div>
      </div>
</template>

<script>
import store from '@/store';
import { mapActions } from 'vuex';

export default {
name: 'Navigation',
data(){
      return{
            friend:false,
            friend_txt: '✓ You are my friend',
       
      }
},
props:[
     "scroll_fnc",'user' 
],
computed:{
   be_friend(){
    
      return this.user.user ? this.friend_txt : 'Be a friend'
   },
   
  
},
methods:{
      friend_make(){
        
            this.friend = !this.friend;
      },
      checkFriend(){
        if(this.user.user){return}
        this.scroll_fnc()
        
      },
    ...mapActions(['logout']),
    
}
}
</script>

<style>




.dropdown-content {
  display: none;
  position: absolute;
  background-color: rgb(59,47,42);
  
   box-shadow: 0px 0px 30px 0px rgb(27,26,28);
  z-index: 1;
}

.dropdown-content span {
  color: #fff;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {background-color: #ddd;}

.dropdown:hover .dropdown-content {display: block;}



.cozy{
      font-family: Georgia;
    font-weight: 400;
    letter-spacing: 0.06em;
    color: #f1cdb3;
}

.top-nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  
  
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  color: #FFF;
  height: 50px;
  padding: 1em;
}

.menu {
  display: flex;
  flex-direction: row;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.menu > li {
  margin: 0 1rem;
  overflow: hidden;
}

.menu-button-container {
  display: none;
  height: 100%;
  width: 30px;
  cursor: pointer;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#menu-toggle {
  display: none;
}

.menu-button,
.menu-button::before,
.menu-button::after {
  display: block;
  background-color: #fff;
  position: absolute;
  height: 4px;
  width: 30px;
  transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
  border-radius: 2px;
}

.menu-button::before {
  content: '';
  margin-top: -8px;
}

.menu-button::after {
  content: '';
  margin-top: 8px;
}

#menu-toggle:checked + .menu-button-container .menu-button::before {
  margin-top: 0px;
  transform: rotate(405deg);
}

#menu-toggle:checked + .menu-button-container .menu-button {
  background: rgba(255, 255, 255, 0);
}

#menu-toggle:checked + .menu-button-container .menu-button::after {
  margin-top: 0px;
  transform: rotate(-405deg);
}

@media (max-width: 700px) {
  .menu-button-container {
    display: flex;
  }
  .menu {
    position: absolute;
    top: 0;
    margin-top: 75px;
    left: 0;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  #menu-toggle ~ .menu li {
    height: 0;
    margin: 0;
    padding: 0;
    border: 0;
    transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
  }
  #menu-toggle:checked ~ .menu li {
    border: 1px solid #372E2A;
    height: 2.5em;
    padding: 0.5em 1em;
    width: 80%;
    transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
  }
  .menu > li {
    display: flex;
    justify-content: center;
    margin: 0;
   
    width: 100%;
    color: white;
    background-color: rgb(64,49,43,0.6);
    align-items: center;
  }

  .menu li:hover{
      cursor: pointer
  }

  .menu > li:not(:last-child) {
    border-bottom: 1px solid #444;
  }
}

.green{
background-color: green !important;
    font-size: medium;
    transition: background-color 0.5s;
}
</style>