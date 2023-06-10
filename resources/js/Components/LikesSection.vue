<script setup>
import {computed , toRefs} from 'vue';
import {usePage} from '@inertiajs/vue3';

import LikedHeart from './Icons/LikedHeart.vue';
import Like from './Icons/Like.vue';
import Comment from './Icons/Comment.vue';
import Share from './Icons/Share.vue';
import Save from './Icons/Save.vue';

// import Heart from 'vue-material-design-icons/Heart.vue';
// import HeartOutline from 'vue-material-design-icons/HeartOutline.vue';
// import CommentOutline from 'vue-material-design-icons/CommentOutline.vue';
// import SendOutline from 'vue-material-design-icons/SendOutline.vue';
// import BookmarkOutline from 'vue-material-design-icons/BookmarkOutline.vue';

const props = defineProps(['post'])
const { post } = toRefs(props)
const emit = defineEmits(['like'])

const user = usePage().props.auth.user;

const isHeartActiveComputed = computed(()=>{
    let isTrue = false

    for(let i = 0; i < post.value.likes.length; i++){
        const like = post.value.likes[i];
        if (like.user_id === user.id && like.post_id === post.value.id){
            isTrue = true;
        }
    }
    return isTrue
})
</script>

<template>
    <div class="flex z-20 items-center justify-between">
        <div class="flex items-center">
            <button @click="$emit('like', {post, user})" class="mt-[10px]">
                <Like v-if="!isHeartActiveComputed" class="cursor-pointer" />
                <LikedHeart v-else class="cursor-pointer" />
            </button>
            <Comment class="pt-[10px] cursor-pointer" />
            <Share class="pt-[10px] cursor-pointer" />
        </div>
        <Save class="pt-[10px] cursor-pointer" />
    </div>
</template>
