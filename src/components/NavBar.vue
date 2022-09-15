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
                              <li>To help the shelter</li>
                              <li>Contacts</li>
                        </ul>
                  </div>

                  <div class="header_content_center">
                        <h2>Not only people 
                              need a house</h2>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida 
                                    est in porttitor  porttitor. Duis sodales elementum ipsum, vehicula 
                                    condimentum erat fringilla et.</p>
                              <button>Make a friend</button>
                              </div>

            </div>
      </div>
</template>

<script>
export default {
name: 'Navigation'
}
</script>

<style>

</style>