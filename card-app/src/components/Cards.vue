<script setup>
import Card from './Card.vue'
const emit = defineEmits(['flip', 'cardStatus'])
const props = defineProps(['data', 'cards'])

</script>

<template>
    <div class="wrap">
        <Card v-for="card in props.cards" :initial-state="card.state" :initial-status="card.status" :translation="card.translation" :word="card.word"/>
    </div>
</template>

<style scoped>
.wrap {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 20px;
}

</style>