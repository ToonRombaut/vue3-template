<script setup>
</script>

<template>
   <div class="home">
      <img src="@/assets/img/home.jpg"/>
      <div class="overlay">
        <h1>New collection</h1>
        <h2>-202206-</h2>
      </div>
   </div>
</template>

<style lang="scss" scoped>
.home{
  position:relative;
  img{
    width:100%;
    object-fit:cover;
    height:40vh;
    object-position: center;
  }
  .overlay{
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:40vh;
    background-color: rgba(0,0,0,0.3);
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1,h2{
      color:white;
      text-align: center;
      margin: 0.5rem;
    }
  }
}

</style>
