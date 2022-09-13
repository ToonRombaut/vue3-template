<script setup>
defineProps(['modelValue'])
defineEmits(['update:modelValue'])
</script>

<template>
    <label for="check" class="hamburger">
        <input type="checkbox" id="check" :value="modelValue" :checked="modelValue" @input="$emit('update:modelValue',$event.target.checked)">
        <span></span>
        <span></span>
        <span></span>
    </label>
</template>

<style lang="scss" scoped>
.hamburger {
  display: flex;
  flex-direction: column;
  width: 35px;
  cursor: pointer;
  span {
    background: #000;
    border-radius: 180px;
    height: 4px;
    margin: 4px 0;
    transition: 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6) all;
    opacity: 1;
    &:nth-of-type(1) {
      width: 50%;
    }
    &:nth-of-type(2) {
      width: 100%;
    }
    &:nth-of-type(3) {
      width: 75%;
    }
  }
  input[type="checkbox"] {
    display: none;
  }
  input[type="checkbox"]:checked ~ span:nth-of-type(1) {
    transform-origin: bottom;
    transform:  translateY(12px);
    opacity: 0;
  }
  input[type="checkbox"]:checked ~ span:nth-of-type(3) {
    transform-origin: bottom;
    width: 50%;
    transform: translateY(-12px);
    opacity: 0;
  }
}
</style>