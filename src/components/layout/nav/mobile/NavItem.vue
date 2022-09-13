<script setup>
import {computed} from "vue";
import {useRoute} from 'vue-router'

const props = defineProps({
    href:{
        type: String,
        required: true,
    },
})

const route = useRoute();
const active = computed(() => route.path === props.href)

</script>

<template>
    <router-link :to="href" class="nav-item mb-5" :class="{active}">
        <slot />
        <transition name="indicator">
            <div class="active-indicator" v-if="active"></div>
        </transition>
    </router-link>
</template>


<style lang="scss" scoped>
.nav-item{
    font-size: 1.5rem;
    position: relative;
    &.active{
        font-weight: bold;
        .active-indicator{
            opacity: 1;
        }
    }
    .active-indicator{
        position: absolute;
        left: calc(-8px - 1rem);
        top:50%;
        transform: translate(0,-50%);
        width: 8px;
        height:8px;
        border-radius: 180px;
        background-color: $primary;
    }
    .indicator-enter-active,
    .indicator-leave-active {
        transition: all 0.2s ease-in-out;
    }

    .indicator-enter-from,
    .indicator-leave-to {
        opacity: 0;
        transform: translate(-50vw, -50%);
    }
}
</style>