<template>
  <div @getPet="getPetItem">

  </div>
</template>

<script>
export default {
name: 'PetsItem',
methods:{
      getPetItem(n){
            console.log(n)
      }
}
}
</script>

<style scoped>
      .dialog{
            top:0;
            bottom:0;
            right: 0;
            left: 0;
            background: rgb(0, 0,0,0.5);
            position: fixed;
            display: flex;
      }

      .dialog__content{
            margin: auto;
            background: white;
            min-height: 400px;
            min-width: 400px;
      }

</style>