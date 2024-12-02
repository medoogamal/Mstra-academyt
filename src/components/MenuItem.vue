<script setup>
import { computed, toRefs } from "vue";

import HomeOutline from "vue-material-design-icons/HomeOutline.vue";
import Magnify from "vue-material-design-icons/Magnify.vue";
import compass from "vue-material-design-icons/Compass.vue";
import SendOutline from "vue-material-design-icons/SendOutline.vue";
import HeartOutline from "vue-material-design-icons/HeartOutline.vue";
import plus from "vue-material-design-icons/Plus.vue";
import AccountOutline from "vue-material-design-icons/AccountOutline.vue";
import Menu from "vue-material-design-icons/Menu.vue";
import Library from "vue-material-design-icons/Book.vue";
import Logout from "vue-material-design-icons/Logout.vue";
const props = defineProps({
    iconString: String,
});
const { iconString } = toRefs(props);


// const user = usePage().props.auth.user;

let icon = null;

if (iconString.value === "Home") icon = HomeOutline;
if (iconString.value === "Payments") icon = Magnify;
if (iconString.value === "Courses") icon = compass;
if (iconString.value === "Events") icon = SendOutline;
if (iconString.value === "Notifications") icon = HeartOutline;
if (iconString.value === "Mentor") icon = plus;
if (iconString.value === "Library") icon = Library;
if (iconString.value === "Join") icon = AccountOutline;
if (iconString.value === "Log Out") icon = Menu;
</script>

<template>
    <div
        class="w-full xl:inline-block xl:hover:bg-gray-600 p-2 rounded-full transition duration-300 ease-in-out cursor-pointer"
    >
        <div class="flex items-center">
            <img
                v-if="iconString === 'Profile'"
                :class="{ 'mr-1': iconString === 'Profile' }"
                class="rounded-full ml-[2px] w-[30px] cursor-pointer"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7f1Es84yxr11Bfj_10hV2_srMeJ-Ry71Yiw&usqp=CAU"
            />
            <component v-else :is="icon" fillColor="#fff" :size="30" />
            <span
                class="xl:block hidden text-white font-extrabold text-[18px] pl-2 mt-0.5"
                >{{ iconString }}</span
            >
        </div>
    </div>
</template>
