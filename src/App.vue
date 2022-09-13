<script setup>
import DefaultLayout from "@/layouts/DefaultLayout.vue"

</script>

<template>
  <DefaultLayout />
</template>

<style lang="scss">
*{
  -webkit-tap-highlight-color: transparent;
  font-family: vidaloka;
  &:focus{
    -webkit-tap-highlight-color: transparent;
    outline: none;
    -ms-touch-action: manipulation;
    touch-action: manipulation;

  }
}
a{
  text-decoration: none;
  color: $primary;
  &:active,:focus,:visited{
    color: $primary;
  }
}

@font-face {
    font-family: 'vidaloka';
    src: url('./assets/fonts/vidaloka.woff2') format('woff2'),
        url('./assets/fonts/vidaloka.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}
</style>