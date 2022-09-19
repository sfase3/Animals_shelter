<template>
  <div  id="app">
<Preloader v-if="this.load"></Preloader>
<div v-else>
      <div ref="nav"><NavBar :user="user_store"   :scroll_fnc="this.goto"></NavBar></div>
  
  <div ref="scroll" >
      <router-view :scroll_undo="this.undo" :user="user_store" :key="$route.path"></router-view>
  </div>
      <Footer></Footer>
</div>
  


  </div>        
</template>



<script>

import MainPage from './components/MainPage.vue';
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
import PreloaderVue from './views/Preloader.vue';
import { onBeforeMount,onMounted } from 'vue';
import { mapActions,mapMutations,mapState, useStore,} from 'vuex';
import store from './store';
import Preloader from './views/Preloader.vue';

export default {
data(){
      return{
            user_store: store.state.store_user,
           load: true
      }
},
components: {
    MainPage,
    NavBar,
    Footer,
    Preloader
},
mounted(){
    
      this.setAllPage()
      setTimeout(this.givePAGE,1000)
},

methods:{
      givePAGE(){
            this.load = false
      },
       ...mapActions(['fetchAnimals']),
       
       ...mapMutations(['setAllPage']),
       ...mapState('store_user',['user','nickname','load']),
       goto() {
        window.scrollTo({
            left: 0,top: this.$refs.scroll.offsetTop-(this.$refs.scroll.offsetTop/10),behavior:'smooth'
      });
    },
    undo(){
      
      window.scrollTo({
            left: 0,top: this.$refs.nav.clientHeight,behavior:'smooth'
      });
    }
}
}
</script>




<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}



*{
      list-style-type: none; 
      
}



html , body{
      
      margin: 0;
      padding: 0;
    
    
}

.icons_icon{
      width: 100%;


}

.down{
      padding-top:  35px !important;
      padding-left: 70px !important;
      padding-right: 70px!important;
      margin: auto;
      background-color: #f6f6f6;
}

::-webkit-scrollbar {
      width: 6px;
    }
    
    ::-webkit-scrollbar-track {
      background-color:rgb(27,26,28,0.85);
    }
    
    ::-webkit-scrollbar-thumb {
      background-color: rgb(157, 148, 131,0.5);
      border-radius: 10px;
      border: 1px solid transparent;
      background-clip: content-box;
    }
    
    ::-webkit-scrollbar-thumb:hover {
      background-color: #a8bbbf;
    }


    li:hover{
      border-color:#f1cdb3;
      cursor: pointer;
      
    }


.footer_content{
      width: 40%;
      height: 362px;
      margin-left: 20%;
      margin-right: 40%;
      
      display: flex;
      justify-content: space-around;
}

.footer_content_item img{
  height: 22px;
  width: 28px;
}

.btn_anim button:hover{
      background-color: #F1CDB3;
}

.footer_content_item{
     
      padding-bottom: 25px;
     height: 322px;
     display: flex;
     flex-direction: column;
     justify-content: space-between;
     font-size: 20px;

font-weight: 400;
letter-spacing: 0.06em;
color: #f1cdb3;
width: 50%;
padding-left: 25px;
     
}

.footer{
      height: 362px;
      width: 100%;
      background-image: url('1.png');
}

.info_p{
      font-family: Arial;
font-size: 12px;
line-height: 18px;
font-weight: 400;
font-style: italic;
color: #b2b2b2;
width: 350px;
}

.card{
      width: 319px;
height: 47px;
background-color: #f1cdb3;
border-radius: 9px;
display: flex;
justify-content: space-around;
align-items: center;
}

.donat{
      width: 100%;
      height: 434px;
background-color: #f6f6f6;
}

.icons_icon_item{
      width: 20%;
      height: 130px;
      font-family: Georgia;
font-size: 20px;
line-height: 45px;
font-weight: 400;
letter-spacing: 0.06em;
color: #545454;
display: flex;
flex-direction: column;
align-items: center;
padding-top: 30px;
}

.icons_icon_item img{
      width: 58px;
height: 55px;
}

.icons_icon {
      display: flex;
      
flex-wrap: wrap;
justify-content: center;
}

.icons_icon_item h4{
      margin: 0.67em;
}

.icons{
      overflow: hidden;
    width: 80%;
    
    
    padding-top: 60px;
    padding-bottom: 60px;
    padding-left: 10%;
    padding-right: 10%;
    overflow: hidden;
}

.slider{
      overflow: hidden;
      width: 80%;
    
background-color: #f6f6f6;
padding-top: 60px;
padding-bottom: 60px;
padding-left: 10%;
padding-right: 10%;
}

 h1{
      font-family: Georgia;
font-size: 35px;
line-height: 45px;
font-weight: 400;
letter-spacing: 0.06em;
color: #545454;
text-align: center;
}

.header{
height: 800px;
width: 100%;
background-image: url("3.png");
background-size: cover;
background-repeat: no-repeat;
overflow: hidden;
}

.header_content{
      width: 80%;
      padding-left: 10%;
      padding-right: 10%;
      color: white;
    
}

.header_content_nav{
      margin: 0;
      width: 100%;
      padding-top: 10px;
      display: flex;
      justify-content: space-between;
}

.div_arrow{
      width: 35px;
      display: flex;
      justify-content: center;
      align-items: center;
      
}



.header_content_nav div h3 {
      font-family: Georgia;


font-weight: 400;
letter-spacing: 0.06em;
color: #f1cdb3;
}

.header_content_nav ul{
      display: flex;
      flex-direction: row;
}

li{
      margin-left: 25px;
      border-bottom: 3px solid transparent;
      border-radius: 1.5px;
}

.header_content_center{
      padding-top: 250px;
}

.header_content_center h2{
      font-family: Georgia;
      font-size: 44px;
      line-height: 57px;
      font-weight: 400;
      letter-spacing: 0.06em;
      color: #ffffff;
}

.header_content_center p{
      font-family: Arial;
font-size: 15px;
line-height: 24px;
font-weight: 400;
color: #cdcdcd;
}

.header_content_center button{
      width: 205px;
height: 52px;
background-color: #f1cdb3;
border-radius: 26px;
}

.about_shelter{
      width: auto;
      padding-left: 25%;
      padding-right: 25%;
      padding-top: 70px;
      padding-bottom: 70px;
      display: flex;
      overflow: hidden;
      justify-content: space-around;
}

.about_shelter_content_info{
      padding-left: 70px;
}

.about_shelter_content_info h2{
      max-width: 350px;
      font-family: Georgia;
font-size: 35px;
line-height: 45px;
font-weight: 400;
letter-spacing: 0.06em;
color: #545454;
}

.flex_row {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      
}

.animal {
      width: 270px;
height: 350px;
background-color: #fafafa;
border-radius: 9px;
margin-left: 20px;
}

.animal h3{
      text-align: center;
}

.animal button {
      width: 188px;
height: 52px;
border: 2px solid #f1cdb3;
border-radius: 26px;
margin: 0 41px;
}

.btn_anim{
      width: 100%;
}

.btn_down{
      padding-top: 75px;
      text-align: center;
      margin: 0 41px;
      padding-left: 20px;

}

.btn_down button{
      width: 267px;
height: 52px;
border: 2px solid #f1cdb3;
border-radius: 26px;
font-family: Georgia;
font-size: 17px;

font-weight: 400;

}


@media only screen and (max-width: 992px ) {
      .about_shelter_content_info{
            padding: 0;
            
      }
      
      
      
      .footer_content{
            width: 100%;
            margin:0;
      }
      
      .footer_content_item{
            padding: 0;
            justify-content: center;
            width: auto;
      }
      
      .info_p{
            width: 350px;
      }
      
      .icons_icon_item{
            padding: 0;
            height: 160px;
      }
      
      .icons{
            padding-bottom: 60px;
      }
      
      .about_shelter{
            padding: 0;
            width: 100%;

      }



      .flex_row{
            flex-direction: column;
          
      }

     

      .btn_down{
            margin: 0;
            padding: 0;
      }

      .icons{
            padding-top: 20px;
      }

      .icons_icon{
            flex-direction: column;
            justify-content: center;
            
           
      }

      .footer_content_item img {
    height: 20px;
    width: 25px;
}

      .icons_icon_item{
            flex-direction: row;
            width: 100%;
            justify-content: space-around;
          
      }

      .icons_icon_item h4{
            width: 200px
      }

      .animal{
            margin: 0;
            width: 100%;
            text-align: center;
            margin-bottom: 20px;
      }

      .div_arrow{
            display: none;
      }
      
      

      .slider h1{
            margin-top: 0;
      }

      .about_shelter{
            flex-direction: column;
            width: 100%; 
     padding: 0; 
   
      }

      .about_shelter div{
            text-align: center;
            
      }

      .about_shelter div:first-child{
            padding-top: 10px;
      }

      .about_shelter h2{
            margin: auto;
            text-align: center;
          
      }

      .about_shelter_content_info{
            padding-left: 0;
            
      }

      .about_shelter_content_info h2{
            width: 100%;
            margin: auto;
      }

      .about_shelter img{
            width: 200px;
            height: 275px;
      }

      .about_shelter p {
            margin: auto;
            width: 80%;
      }

      .card {
            margin: auto
      }

      .footer_content{
            width: 100%;
            margin: 0;
            display: block
      }

      .footer_content_item{
            padding: 0;
            width:90%;
            margin: auto;
            justify-content: center;
      }

      .footer{
            height: 700px;
            text-align: center;
      }

      .header{
            height: 600px !important;
      }

      .header_content{
            height: 100%;
      }

      .header_content_center {
            padding-top: 175px !important;
      }  

      .header_content_center p{
            margin-top: 0 ;
            
      }

      .header_content_nav{
            flex-direction: column;
      }
    
      .header_content_nav div{
            text-align: center;
            padding-bottom: 20px;
      }

      .header_content_center {
            text-align: center;
            
      }

      .header_content_center h2{
            margin-top: 0;
            
      }

      .header_content_nav ul{
            padding: 0;
            flex-direction: column !important;
    text-align: center;
      }

      .header_content_nav ul li {
            margin: 0;
            padding-bottom: 20px;
            font-size: 20px;
            border: 0
      }

      .down  img {
            width: 300px;
            height: 150px;
            
      }

      .down {
            padding: 0 !important;
      }



      }
      

@media only screen and (max-width: 450px ) {

      .flex_row{
            flex-direction: column;
          
      }

      .info_p{
            margin: auto !important;
      }

    

      .btn_down{
            margin: 0;
            padding: 0;
      }

      .icons{
            padding-top: 20px;
      }

      .icons_icon{
            flex-direction: column;
            justify-content: center;
            
           
      }

      

      .icons_icon_item{
            flex-direction: row;
            width: 100%;
            justify-content: space-around;
          
      }

      .icons_icon_item h4{
            width: 200px
      }

      .animal{
            margin: 0;
            width: 100%;
            text-align: center;
            margin-bottom: 20px;
      }

      .div_arrow{
            display: none;
      }
      
      

      .slider h1{
            margin-top: 0;
      }

      .about_shelter{
            flex-direction: column;
            width: 100%; 
     padding: 0; 
   
      }

      .about_shelter div{
            text-align: center;
            
      }

      .about_shelter div:first-child{
            padding-top: 10px;
      }

      .about_shelter h2{
            margin: auto;
            text-align: center;
          
      }

      .about_shelter_content_info{
            padding-left: 0;
            
      }

      .about_shelter_content_info h2{
            width: 100%;
            margin: auto;
      }

      .about_shelter img{
            width: 200px;
            height: 275px;
      }


      .card {
            margin: auto
      }

      .footer_content{
            width: 100%;
            margin: 0;
            display: block
      }

      .footer_content_item{
            padding: 0;
            width:90%;
            margin: auto;
            justify-content: center;
      }

      .footer{
            height: 700px;
            text-align: center;
      }

      .modal_img{
            width: 270px !important;
    height: 300px !important;
      }

      .header{
            height: 700px !important;
      }

      .header_content{
            height: 100%;
      }

      .icons_icon_item h4 {
     margin: 0; 
}
 

      .header_content_center p{
            margin-top: 0 ;
            
      }

      .header_content_nav{
            flex-direction: column;
      }
    
      .header_content_nav div{
            text-align: center;
            padding-bottom: 20px;
      }

      .header_content_center {
            text-align: center;
            
      }

      .header_content_center h2{
            margin-top: 0;
            
      }

      .header_content_nav ul{
            padding: 0;
            flex-direction: column !important;
    text-align: center;
      }

      .header_content_nav ul li {
            margin: 0;
            padding-bottom: 20px;
            font-size: 20px;
      }

      .down  img {
            width: 280px;
            height: 150px;
            
      }

      .down {
            padding: 0 !important;
      }

}


@media only screen and (max-width: 1250px)  {
  .footer_content{
      width: 100%; 
  margin: 0 !important;

}
.footer_content_item{
      padding-right: 0;
}

}

</style>
