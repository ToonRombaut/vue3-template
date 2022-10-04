<script setup>
import {onMounted, onUnmounted, computed, ref} from "vue"
//store
import {useAppStore} from "@/stores/app";
const appStore = useAppStore();
//smoothscroll
import {useSmoothScroll} from "@/composables/smoothScrollComposable"
//components
import MobileNav from "@/components/layout/nav/mobile/MobileNav.vue"
import Footer from "@/components/layout/Footer.vue"
//refs
const contentRef = ref(null);
//hooks
onMounted(() => {
    window.addEventListener("resize",appStore.setWindowWidth);
    useSmoothScroll(contentRef.value);
})

onUnmounted(() => {
        window.removeEventListener("resize",appStore.setWindowWidth);
})

const isTablet = computed(() => appStore.isTablet);

</script>

<template>
    <div class="default-layout">
        <MobileNav v-if="isTablet" />
        <div asscroll-container>
            <div ref="contentRef" class="layout-content">
                <router-view />
                <Footer/>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.default-layout{
  height:100vh;
  overflow:hidden;
  .layout-content{
    max-width: $max-content-width;
    width:100%;

    padding-top: $mobile-nav-height;
    @include screen-sm{
    margin-top: $desktop-nav-height;

    }
  }
}
</style>