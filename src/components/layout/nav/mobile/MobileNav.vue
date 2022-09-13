<script setup>
import {ref, watch, computed} from "vue"
import Hamburger from "./Hamburger.vue"
import NavItem from "./NavItem.vue"
import {useRoute} from 'vue-router'

import {Vue3Lottie} from "vue3-lottie"
import "vue3-lottie/dist/style.css"
import basketJson from "@/assets/animations/basket.json"

const basketRef =ref(null);
let isPlaying = false

function playBasketAnimation(){
    if(isPlaying) return
    isPlaying = true;
    basketRef.value.play();
    setTimeout(() => {
        basketRef.value.stop()
        isPlaying = false;
    }, 1000);
}


let open = ref(false);

const route = useRoute();

const path = computed(() => route.path)

const routeWatcher = watch(path, () => open.value = false)

</script>

<template>
    <div class="mobile-nav" :class="{open}"> 
        <div class="content">
            <div class="nav-bar">
                <Hamburger v-model="open" />
                <div class="logo-container">
                    <img src="@/assets/img/logo.png" alt="logo">
                </div>
                <div class="shopping-cart-container">
                    <router-link to="/" class="shopping-cart-link">
                        <Vue3Lottie :animationData="basketJson" :auto-play="false" height="100%" ref="basketRef" @mouseenter="playBasketAnimation" @click="playBasketAnimation" />
                    </router-link>
                </div>
            </div>
            <div class="menu-items-container mt-5">
                <NavItem href="/">
                    Home
                </NavItem>
                <NavItem href="/shop">
                    Products
                </NavItem>
                <NavItem href="/about">
                    About
                </NavItem>
                <NavItem href="/contact">
                    Contact
                </NavItem>

            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.mobile-nav{
    position:fixed;
    width:100%;
    height: $mobile-nav-height;
    top:0;
    left:0;
    box-shadow: 0 0 25px rgba(0,0,0,0.3);
    background-color:white;
    z-index:10;
    overflow: hidden;
    transition: all .3s ease-in-out;
    &.open{
        height:100%;
    }
    .content{
        max-width: $max-content-width;
        width:85%;
        margin: 0 auto;
        display:flex;
        flex-direction: column;
        .nav-bar{
            height:$mobile-nav-height;
            display:flex;
            justify-content:space-between;
            align-items:center;
            .logo-container{
                height:60%;
                img{
                    height:100%;
                }
            }
            .shopping-cart-container{
                height:60%;
    
            }
        }
        .menu-items-container{
            display:flex;
            flex-direction: column;
            align-items: center;
        }
    }
}
</style>