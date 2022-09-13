<template>
  <div class="content_pets">
            <div class="div_h1">
                  <h1>Our friends who
                        are looking for a house</h1>
            </div>
            <div class="pets">
                  <div class="pets_item">
                        <div class="pets_item_img">
                              <img src="place_for_photo_11861.png" alt="">
                        </div>
                        <div>
                              <h2>Katrine</h2>
                        </div>
                        <div class="div_btn_learn">
                              <button class="btn_learn">
                                    Learn More
                              </button>
                        </div>
                  </div>
            </div>
            <div class="footer_pagination">
                  <ul class="pagination">
                        <li class="page-item">1</li>
                        <li class="page-item">2</li>
                      </ul>
            </div>
      </div>
</template>

<script>
export default {
name: 'Pets'
}
</script>

<style scoped>
*{
      list-style: none;
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

.pets{
      width: 80%;
      margin: auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
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
height: 50px;
border: 2px solid #f1cdb3;
border-radius: 50%;
text-align: center;
font-size: 24px;
line-height: 48px;
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

.div_btn_learn{
margin: auto;
}
</style>