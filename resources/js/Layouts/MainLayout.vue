<script setup>
import { ref } from 'vue';
import { Link } from '@inertiajs/vue3';

// IMPORT ICONS
import Comment from '../Components/Icons/Comment.vue';
import Create from '../Components/Icons/Create.vue';
import ChevronLeft from '../Components/Icons/ChevronLeft.vue';
import ChevronRight from '../Components/Icons/ChevronRight.vue';
import Explore from '../Components/Icons/Explore.vue';
import Hamburger from '@/Components/Icons/Hamburger.vue';
import Home from '@/Components/Icons/Home.vue';
import LikedHeart from '@/Components/Icons/LikedHeart.vue';
import Messages from '@/Components/Icons/Messages.vue';
import Like from '@/Components/Icons/Like.vue';
import Save from '@/Components/Icons/Save.vue';
import Search from '@/Components/Icons/Search.vue';
import Share from '@/Components/Icons/Share.vue';
import Toggle from '@/Components/Icons/Toggle.vue';

import MenuItem from '@/Components/MenuItem.vue';

let showCreatePost = ref(false)
</script>

<template>
 <div id="MainLayout" class="w-full h-screen">
    <!-- USER STORIES -->
    <div v-if="$page.url === '/'" id="TopNavHome" class="fixed z-30 md:hidden block w-full bg-FFFFEE h-[61px] border-b border-b-gray-300">
        <div class="flex items-center justify-between h-full">
            <Link href="/" class="flex align-center">
                <!-- <img src="/images/hennagram-logo-small.png" alt="logo" class="w-[30px] ml-6 cursor-pointer"> -->
                <img src="/images/hennagram-logo.png" alt="logo" class="w-[105px] ml-6 cursor-pointer">
            </Link>
            <div class="flex items-center gap-5 mr-6">                    
                <Like class="cursor-pointer" />
                <Messages class="cursor-pointer" />
            </div>
        </div>
    </div>

    <!-- USER STORIES -->
    <div 
        v-if="$page.url !== '/'"
        id="TopNavUser"
        class="md:hidden fixed flex items-center justify-between z-30 w-full bg-white h-[61px] border-b border-b-gray-300"
    >
    <Link href="/" class="px-4">
        <ChevronLeft class="cursor-pointer"/>
    </Link>
    <div class="font-extrabold text-lg">NAME HERE</div>
    <Create />
    </div>
    
    <!-- SIDE NAVIGATION BAR -->
    <div id="SideNav" class="fixed h-full bg-white xl:w-[280px] w-[80px] md:block hidden border-r border-r-gray-300">
        <Link href="/">
            <img src="/images/Hennagram-logo-small.png" class="xl:hidden block w-[25px] mt-10 ml-[25px] mb-10 cursor-pointer" />
            <img src="/images/Hennagram-logo.png" class="xl:block hidden w-[120px] mt-10 ml-6 mb-10 cursor-pointer" />
        </Link>

        <div class="px-3">
            <Link href="/">
                <MenuItem iconString="Home" class="mb-4" />
            </Link>
            <MenuItem iconString="Search" class="mb-4" />
            <MenuItem iconString="Explore" class="mb-4" />
            <MenuItem iconString="Messages" class="mb-4" />
            <MenuItem iconString="Notifications" class="mb-4" />
            <MenuItem iconString="Profile" class="mb-4" />

        </div>
    </div>
 </div>
</template>
