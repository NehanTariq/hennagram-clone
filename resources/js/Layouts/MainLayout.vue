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
import CreatePostOverlay from '@/Components/CreatePostOverlay.vue';

let showCreatePost = ref(false)
</script>

<template>
    <div id="MainLayout" class="w-full h-screen">
        <!-- NAV BAR -->
        <div v-if="$page.url === '/'" id="TopNavHome" class="fixed z-30 md:hidden block w-full bg-light h-[61px] border-b border-b-gray-300">
            <div class="flex items-center justify-between h-full">
                <Link href="/">
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
            class="md:hidden fixed flex items-center justify-between z-30 w-full bg-light h-[61px] border-b border-b-gray-300"
        >
            <Link href="/" class="px-4">
                <ChevronLeft class="cursor-pointer"/>
            </Link>
            <div class="font-extrabold text-lg">{{ $page.props.auth.user.name }}</div>
            <Create class="px-4"/>
        </div>
        
        <!-- SIDE NAVIGATION BAR -->
        <div id="SideNav" class="fixed h-full bg-light xl:w-[280px] w-[80px] md:block hidden border-r border-r-gray-300">
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
                <MenuItem iconString="Create" @click="showCreatePost = true" class="mb-4" />
                <Link :href="route('users.show', {id: $page.props.auth.user.id })">
                    <MenuItem iconString="Profile" class="mb-4" />
                </Link>

            </div>
            <Link :href="route('logout')" as="button" method="post" class="absolute bottom-0 px-3 w-full">
                <MenuItem iconString="Log out" class="mb-4" />
            </Link>
        </div>

        <div class="flex lg:justify-between bg-primary h-full w-[100%-280px] xl:pl-[280px] lg:pl-[100px] overflow-auto">
            <div 
                class="mx-auto md:pt-6 pt-20"
                :class="$page.url === '/' ? 'lg:w-8/12 w-full' : 'max-w-[1200px]'"
            >
            <main>
                <slot />
            </main>
            </div>

            <!-- PERSONAL PROFILE & USER SUGGESTIONS -->
            <div v-if="$page.url === '/'" id="SuggestionsSection" class="lg:w-4/12 lg:block hidden text-dark mt-10">
                <Link :href="route('users.show',{ id: $page.props.auth.user.id })" class="flex items-center justify-between max-w-[300px] bg-light rounded-[20px] p-[20px]">
                    <div class="flex items-center">
                        <img class="rounded-full z-10 w-[58px] h-[58px]" :src="$page.props.auth.user.file">
                        <div class="pl-4">
                            <div class="text-dark font-bold">{{ $page.props.auth.user.name }}</div>
                            <div class="text-gray-500 font-bold text-sm">{{ $page.props.auth.user.name }}</div>
                        </div>
                    </div>
                    <button class="text-blue-500 hover:text-gray-900 text-xs font-bold">
                        Switch
                    </button>
                </Link>

                <!-- USER SUGGESTIONS -->
                <div class="max-w-[300px] flex items-center justify-between pb-3 pt-6 bg-light rounded-t-[20px] p-[20px] mt-[20px]">
                    <div class="text-gray-500 font-bold">Suggestions for you</div>
                    <button class="text-blue-500 hover:text-gray-900 text-xs font-bold">
                        See All
                    </button>
                </div>

                <div v-for="randUser in $page.props.randomUsers" :key="randUser">
                    <Link :href="route('users.show', {id: randUser.id})" class="flex items-center justify-between max-w-[300px] pb-2 bg-light rounded-b-[20px] p-[20px]">
                        <div class="flex items-center">
                            <img class="rounded-full z-10 w-[37px] h-[37px]" :src="randUser.file">
                            <div class="pl-4">
                                <div class="text-dark font-bold">{{ randUser.name }}</div>
                                <div class="text-gray-500 font-bold text-sm">Suggested for you</div>
                            </div>
                        </div>
                        <button class="text-blue-500 hover:text-gray-900 text-xs font-bold">
                            Follow
                        </button>
                    </Link>
                </div>
                
                <!-- STATIC TERMS & CONDITIONS -->
                <div class="max-w-[300px] mt-5">
                    <div class="text-sm text-gray-400">About • Help • Press • API • Jobs • Privacy • Terms • Locations • Language • Meta • Verified</div>
                    <div class="text-left text-sm text-gray-400 mt-4">ⓒ 2023 HENNAGRAM BY NEHAN TARIQ</div>
                </div>
            </div>
        </div>

        <!-- BOTTOM NAV BAR FOR MOBILE -->
        <div id="BottomNav" class="fixed z-30 bottom-0 w-full md:hidden flex items-center justify-around bg-light py-2 border-t-gray-300 ">
            <Link href="/">
                <Home class="cursor-pointer" />
            </Link>
            <Search class="cursor-pointer" />
            <Explore class="cursor-pointer" />
            <Create @click="showCreatePost = true" class="cursor-pointer" />
            <Link :href="route('users.show', {id: $page.props.auth.user.id})">
                <img :src="$page.props.auth.user.file" class="rounded-full w-[30px] cursor-pointer" />
            </Link>
        </div>
    </div>

    <CreatePostOverlay v-if="showCreatePost" @close="showCreatePost = false" />
</template>
