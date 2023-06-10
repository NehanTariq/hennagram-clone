<script setup>
import { toRefs } from 'vue';
import {usePage } from '@inertiajs/vue3';

import Create from '../Components/Icons/Create.vue';
import Explore from '../Components/Icons/Explore.vue';
import Hamburger from '@/Components/Icons/Hamburger.vue';
import Home from '@/Components/Icons/Home.vue';
import Messages from '@/Components/Icons/Messages.vue';
import Notifications from '@/Components/Icons/Notifications.vue';
import Search from '@/Components/Icons/Search.vue';
import Toggle from '@/Components/Icons/Toggle.vue';

const props = defineProps({ iconString: String })
const { iconString } = toRefs(props)

const user = usePage().props.auth.user

let icon = null;

if (iconString.value === 'Home') icon = Home;
if (iconString.value === 'Search') icon = Search;
if (iconString.value === 'Create') icon = Create;
if (iconString.value === 'Messages') icon = Messages;
if (iconString.value === 'Explore') icon = Explore;
if (iconString.value === 'Notifications') icon = Notifications;
if (iconString.value === 'Profile') icon = Toggle;
if (iconString.value === 'Log out') icon = Hamburger;

</script>

<template>
    <div class="w-full xl:inline-block xl:hover:bg-[#F0F0D7] p-2 rounded-[10px] transition duration-300 ease-in-out cursor-pointer">
        <div class="flex items-center">
            <img 
            v-if="iconString === 'Profile'"
            :class="{'mr-0': iconString === 'Profile'}"
            class="rounded-full w-[30px] cursor-pointer" 
            :src="user.file"
            >
            <component v-else :is="icon" />
            <span class="xl:block hidden text-dark font-semibold text-[16px] pl-5 mt-0.5">
                {{ iconString }}
            </span>
        </div>
    </div>
</template>
