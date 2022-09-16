<template>
      <div v-if="boole" @click.stop="hideInfo" style="width:100%">
            <div  class="modal">
                  <div class="modal_img"><img :src="require(`@/img/pets_imgs/${this.name}.png`)" alt=""></div>
                  <div class="modal_info">
                        <h2>{{this.name}}</h2>
                        <h4>{{this.poroda}}</h4>
                        <span>Age: {{this.age}} {{this.months}}</span> <br>
                        <span>Parasites: {{this.parasite}}</span>
                        <p>{{this.info}}</p>
                        <button class="btn_learn">Close</button>
                  </div>
            </div>
      </div>
  <div v-else :ref="scroll" class="content_pets">
      
      
      
            <div  class="div_h1">
                  <h1>Our friends who
                        are looking for a house</h1>
                  
            </div>
            <div class="pets">
                  <div class="pets_item" v-for="pets in this.render_list" v-bind:key="pets.name">
                        <div class="pets_item_img">
                              <img :src="require(`@/img/pets_imgs/${pets.name}.png`)" alt="">
                        </div>
                        <div>
                              <h2>{{pets.name}}</h2>
                        </div>
                        <div class="div_btn_learn">
                              <button class="btn_learn" @click="getMore(pets)">
                                    Learn More
                              </button>
                        </div>
                  </div>
            </div>
            <div class="footer_pagination">
                  <ul class="pagination">
                        <li @click="$router.push(`/pets/${numPage}`)" class="page-item" v-for="numPage in all_pages" :key="numPage" :class="{'active_page': numPage === page}">{{numPage}}</li>
                      </ul>
            </div>
      
</div>
</template>

<script>
import { mapState,mapMutations,mapActions } from 'vuex';


export default {
el: '#pets',
name: 'Pets',
data(){
      return{
      boole: false,
      name: '',
      age: '',
      months: '',
      info: '',
      poroda: '',
      parasite: ''
      }
},
computed: {
      
      ...mapState(['render_list','page','all_pages']),
     

},
mounted(){
      this.setPage(Number(this.$route.params.id) )
      
       
 this.fetchAnimals()

 
},
methods:{
      ...mapActions(['fetchAnimals']),
      ...mapMutations(['setAllPage','setPage']),
      
      getMore(pets){
            this.poroda = pets.poroda
            this.name = pets.name
            this.age = pets.age 
            this.months = pets.months_year 
            this.info = pets.info
            this.boole = true
            this.parasite = pets.parasites
      },
      
      hideInfo(){
            this.boole= false
            this.poroda = ''
            this.name = ''
            this.age = '' 
            this.months = ''
            this.info = ''
      }
}
}
</script>

<style scoped>
*{
      list-style: none;
}

.modal{
      
      display: flex;
      justify-content: center;
      align-items: center;
     
     flex-direction: column;
      margin: auto
}

.modal h2, .modal h4{
      margin: 10px
}

.modal img{
      padding-top: 10px;
}

.modal p{
      width: 50%;
      margin: auto;
}

.modal button {
      margin-top: 10px;
      margin-bottom: 10px;
}

.pets_item_img img{
      width: 270px;
      height: 270px;
}

body{
      padding: 0;
      margin: 0
}

.content_pets{
      background-color: #f6f6f6;
}

.div_h1{
      padding: 50px 0;
      text-align: center;
}

.pagination {
      padding-left: 0;
      
}

li{
            margin: 20px !important;
      }


.pets{
      width: 80%;
      margin: auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
}

.pets_item{
      margin: 2%;
      width: 270px;
height: 425px;
background-color: #fafafa;
border-radius: 9px;
text-align: center;
}

.pagination{
      display: flex;
      justify-content: center;
      margin: 0;
      padding-bottom: 20px;
}

.page-item{
      margin-left: 20px;
      width: 50px;

border: 2px solid #f1cdb3;
border-radius: 50%;
text-align: center;
font-size: 24px;
line-height: 48px;

}

.page-item:hover{
      cursor: pointer;
}

.active_page{
      background-color: #f1cdb3 !important
}



.btn_learn{
      font-family: Georgia;
font-size: 17px;

font-weight: 400;
letter-spacing: 0.06em;
color: #292929;
width: 188px;
height: 52px;
border: 2px solid #f1cdb3;
border-radius: 26px;
}

.btn_learn:hover{
      background-color: #f1cdb3;
      cursor: pointer
}

.div_btn_learn{
margin: auto;
}


@media only screen and (max-width: 1250px)  {
  .footer_content{
      width: 100%; 
  margin: 0 !important;

}
.footer_content_item{
      padding-right: 25px;
}

}


</style>