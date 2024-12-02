<script setup>
import { toRefs } from 'vue'

const props = defineProps({
  text: String
})
const { text } = toRefs(props)
</script>

<template>
  <button
    class="block bg-[#51be78] text-white px-6 py-2"
  >
    {{ text }}
  </button>
</template>
