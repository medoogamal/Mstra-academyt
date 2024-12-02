<script setup>
import HeaderSectionpart from '../../components/structure/HeaderSectionpart.vue'
import HeaderNavigation from '../../components/structure/HeaderNavigation.vue'
import FooterSection from '../../components/structure/FooterSection.vue'

import { useLanguageStore } from '../../stores/store.js'

const languageStore = useLanguageStore()
</script>
<template>
  <div class="dark:text-white text-black" :dir="languageStore.direction">
    <HeaderSectionpart />
    <HeaderNavigation />

    <main class="mt-[68px]">
      <slot />
    </main>

    <FooterSection />
  </div>
</template>

<style></style>
