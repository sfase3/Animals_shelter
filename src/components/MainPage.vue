<template>
 

      <div class="about_shelter">
            
                 
                  <div><img src="@/img/pets_12128.png" alt=""></div>
            
                  <div class="about_shelter_content_info">
                        <h2>About the shelter “Cozy House”</h2>
                        <div>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur blandit condimentum. Proin accumsan lorem vel gravida fringilla. Suspendisse potenti. Mauris ut pulvinar nunc.</p>
                              <p>Donec consectetur, diam in porta tempus, urna ligula vestibulum nibh, ac ornare felis justo nec leo. Praesent mattis nibh quis 
                                    ultrices pharetra. Morbi tempus at ante sit amet tristique. 
                                    Maecenas dignissim justo orci, in laoreet urna dapibus nec. Praesent quis tortor faucibus, tristique ante vitae, dignissim 
                                    lorem. Sed at ligula et sem mattis gravida ac vel erat.</p>
                        </div>
                  </div>
            </div>
      
      
            <div class="slider">
                  <div class="slider_container">
                  <h1>Our friends who are looking for a house</h1>
                  <div class="flex_row">
                        <div class="animal">
                              <img src="@/img/place_for_photo_11857.png" alt="">
                              <h3>Katrine</h3>
                        </div>
                        <div class="animal">
                              <img src="@/img/place_for_photo_11867.png" alt="">
                              <h3>Jennifer</h3>
                        </div>
                        <div class="animal">
                              <img src="@/img/place_for_photo_11877.png" alt="">
                              <h3>Woody</h3>
                        </div>
                  </div>

                  <div class="btn_down l">
                        <button class="btn_all" @click="$router.push('/pets/1');this.scroll_undo()">Get to know the rest</button>
                  </div>

            </div>
            </div>
      
      
            <div class="icons">
                  <h1>Than you can help our shelter</h1>
                  <div class="icons_icon">
                        <div class="icons_icon_item">
                             
                                    <img src="@/img/cat_food_11363.png" alt="">
                              
                                    <h4>Pet food</h4>          
                        </div>
                        <div class="icons_icon_item">
                              <img src="@/img/ambulance_11347.png" alt="">
                                    <h4>Transportation</h4> 
                        </div>
                        <div class="icons_icon_item">
                              <img src="@/img/ball_11354.png" alt="">
                                    <h4>Toys</h4> 
                        </div>
                        <div class="icons_icon_item">
                              <img src="@/img/bowl_11361.png" alt="">
                                    <h4>Bowls and cups</h4> 
                        </div>
                        <div class="icons_icon_item">
                              <img src="@/img/shampoo_11370.png" alt="">
                                    <h4>Shampoos</h4> 
                        </div>
                        <div class="icons_icon_item">
                              <img src="@/img/pills_11446.png" alt="">
                                    <h4>Vitamins</h4>
                        </div>
                        <div class="icons_icon_item">
                              <img src="@/img/syringe_11448.png" alt="">
                                    <h4>Medicines</h4>
                        </div>
                        <div class="icons_icon_item">
                              <img src="@/img/leash_11450.png" alt="">
                                    <h4>Collars / leashes</h4>
                        </div>
                        <div class="icons_icon_item">
                              <img src="@/img/cat_11456.png" alt="">
                                    <h4>Sleeping area</h4>
                        </div>
                  </div>
            </div>
      

      
            <div class="about_shelter down">
            
                 
                  <div><img src="@/img/dog12157.png" alt=""></div>
            
                  <div class="about_shelter_content_info">
                        <h2 >In addition, you can make a donation</h2>
                        <!-- <span style="font-family: Georgia;
                        font-size: 15px;
                        line-height: 1.2;
                        font-weight: 400;
                        letter-spacing: 0.06em;
                        color: #545454;

                        ">Name of the bank / Type of bank account;</span> -->
                        <div class="card" style="margin-top: 10px;">
                              <img style="width: 30px;
                              height: 24px;" src="@/img/credit_card_(1)_11473.png" alt="">
                              <span style="font-family: 'Times New Roman';
                              font-size: 20px;
                              line-height: 45px;
                              font-weight: 400;
                              letter-spacing: 0.06em;
                              
                              color: #292929;">8380 2880 8028 8791 7435</span>
                        </div>
                        <p class="info_p">
                              Legal information and lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a ipsum at libero sagittis dignissim sed 
ac diam. Praesent ultrices maximus tortor et vulputate. Interdum 
et malesuada fames ac ante ipsum primis in faucibus.
                        </p>
                  </div>
            </div>
      
            
            
</template>

<script>


export default {
name: 'MainPage',
methods:{
      getInfo(name){
            
      }
},
props:['scroll_undo'],
components: {
     
}
}
</script>

<style scoped>


.btn_all:hover{
      background-color: #f1cdb3;
}


</style>