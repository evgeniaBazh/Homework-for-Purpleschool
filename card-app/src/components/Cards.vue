<script setup>
import Card from './Card.vue'
import Button from './Button.vue'
const emit = defineEmits(['flip', 'cardStatus', 'repeat'])
const props = defineProps(['data', 'cards'])


</script>

<template>
    <div>
        <div class="wrap">
            <Card v-for="(card, index) in props.cards" :index :initial-state="card.state" :initial-status="card.status" :translation="card.translation" :word="card.word"/>
        </div>
        <div class="wrapBtn">
            <Button @click="emit('repeat')">Начать заново</Button>
        </div>
    </div>
</template>

<style scoped>
.wrap {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 20px;
}
.wrapBtn {
    align-items: center;
    display: flex;
    justify-content: center;
    margin-top: 30px;
    margin-bottom: 50px;
}
</style>