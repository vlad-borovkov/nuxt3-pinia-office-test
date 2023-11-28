<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useCreateCanonical } from '~/composables/useCreateCanonical'
import { usePostsStore } from '~/stores/Posts'
import {onMounted} from 'vue'

const postsStore = usePostsStore()
const { posts } = storeToRefs(postsStore)
const route = useRoute()
await postsStore.fetchPosts()

</script>

<template>
  <div class="test">
    {{ posts }}
  </div>
</template>

<style lang="scss" scoped></style>
