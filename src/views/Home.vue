<script setup>
</script>

<template>
   <div class="home">
      <img src="@/assets/img/home.jpg"/>
      <div class="overlay">
        <h1>New collection</h1>
        <h2>-202206-</h2>
        <button>Shop now</button>
      </div>
      <div class="content">
        <div class="perks">
          <div class="perk">
            <img src="@/assets/svg/shipping.svg" alt="shipping" />
            <p>Free shipping in Europe</p>
          </div>
          <div class="perk">
            <img src="@/assets/svg/safe-pay.svg" alt="secure payment" />
            <p>Secure payment</p>
          </div>
          <div class="perk">
            <img src="@/assets/svg/mail.svg" alt="contact" />
            <p>Contact us</p>
          </div>
        </div>
      </div>
   </div>
</template>

<style lang="scss" scoped>
.home{
  position:relative;
  img{
    width:100%;
    object-fit:cover;
    height:60vh;
    object-position: center;
  }
  .overlay{
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:60vh;
    background-color: rgba(0,0,0,0.5);
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1,h2{
      color:white;
      text-align: center;
      margin: 0.5rem;
    }
    button{
      position:absolute;
      bottom:2rem;
      background:transparent;
      border:white 2px solid;
      border-radius: 5px;
      color:white;
      text-transform: uppercase;
      padding:0.75rem 1.5rem;
    }
  }
  .perks{
    padding-top:2rem;
    .perk{
      display:flex;
      flex-direction: column;
      align-items:center;
      margin-bottom:3rem;
      img{
        height:50px;
        object-fit: contain;
      }
      p{
        padding-top:0.25rem;
      }
    }
  }
}

</style>
