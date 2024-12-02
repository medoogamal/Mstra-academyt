<template>
  <div class="relative">
    <div class="img my-10 md:h-[300px] h-[230px] overflow-hidden">
      <img src="/images/bg-2.jpg" class="w-full h-[300px]" alt="" />
      <div
        class="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-full z-10 text-center grid md:grid-cols-4 grid-cols-2"
      >
        <div class="box md:mb-0 mb-4">
          <h2 class="font-bold text-2xl text-[#ffc600]">111+</h2>
          <p class="text-white">Students enrolled</p>
        </div>
        <div class="box md:mb-0 mb-4">
          <h2 class="font-bold text-2xl text-[#ffc600]">12+</h2>
          <p class="text-white">Courses Uploaded</p>
        </div>

        <div class="box">
          <h2 class="font-bold text-2xl text-[#ffc600]">10+</h2>
          <p class="text-white">Events</p>
        </div>
        <div class="box">
          <h2 class="font-bold text-2xl text-[#ffc600]">7+</h2>
          <p class="text-white">Global Teacher</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.img::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgb(112, 78, 112);
  opacity: 0.7;
  z-index: 3;
}
</style>
