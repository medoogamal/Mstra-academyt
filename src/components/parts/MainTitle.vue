<script setup>
import { toRefs } from 'vue'

const props = defineProps({
  text: String
})
const { text } = toRefs(props)
</script>
<template>
  <div class="mian-title">
    <h1>{{ text }}</h1>
  </div>
</template>
<style scoped>
.mian-title {
  margin: 0 auto 80px;
  border: 2px solid rgb(24, 23, 23);
  padding: 10px 20px;
  width: fit-content;
  position: relative;
  transition: var(--main-transition);
  z-index: 2;
}

.mian-title::before {
  content: '';
  position: absolute;
  width: 15px;
  height: 15px;
  background-color: #07294d;
  top: 50%;
  transform: translateY(-50%);
  left: -35px;
  border-radius: 50%;
  transition: 0.3s;
  z-index: 2;
}

.mian-title::after {
  content: '';
  position: absolute;
  width: 15px;
  height: 15px;
  background-color: #07294d;
  top: 50%;
  transform: translateY(-50%);
  right: -35px;
  border-radius: 50%;
  transition: var(--main-transition);
  z-index: 2;
}

.mian-title h1 {
  margin: 0;
  padding: 0 30px;
  z-index: 2;
  font-weight: bold;
}

.mian-title:hover::before {
  z-index: -1;
  animation: left 0.5s linear forwards;
}

.mian-title:hover::after {
  z-index: -1;
  animation: right 0.5s linear forwards;
}

.mian-title:hover {
  cursor: pointer;
  color: white;
  border: 2px solid white;
  transition-delay: 0.5s;
}

@keyframes left {
  50% {
    left: 0;
    width: 15px;
    height: 15px;
  }

  100% {
    left: 0;
    width: 50%;
    height: 100%;
    border-radius: 0;
  }
}

@keyframes right {
  50% {
    right: 0;
    width: 15px;
    height: 15px;
  }

  100% {
    right: 0;
    width: 60%;
    height: 100%;
    border-radius: 0;
  }
}
</style>
