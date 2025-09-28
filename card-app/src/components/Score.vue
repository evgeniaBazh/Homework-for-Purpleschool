<script setup>
import Like from './../assets/Like.vue'
const {likes} = defineProps({
    likes: Number,
})
</script>

<template>
    <div class="score">
        <span class="count">{{ likes }}</span>
        <Like/>
    </div>
</template>

<style scoped>
.score {
    max-width: 110px;
    padding: 12px 24px;
    background-color: var(--color-score);
    border-radius: 36px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.count {
    margin-right: 10px;
}
</style>