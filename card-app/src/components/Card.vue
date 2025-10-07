<script setup>
import { ref } from 'vue'
const emit = defineEmits(['flip', 'cardStatus'])
const card = ref({
    word: 'hello',
    translation: 'привет',
    state: 'closed',
    status: 'pending',
})
const flipValue = ref(false)
const status = ref(false)

const handleFlipCard = () => {
    flipValue.value = !flipValue.value
    emit('flip', flipValue.value)
}

const cardStatus = () => {
    status.value = !status.value
    emit('cardStatus')
}
</script>

<template>
    <div @click="handleFlipCard()" class="card">
        <div class="edgingCard">
            <span class="numberCard">01</span>
            <p>{{ card.word }}</p>
            <span class="eventText">Перевернуть</span>
        </div>
    </div>
</template>

<style scoped>
.card {
    width: 250px;
    height: 376px;
    border-radius: 16px;
    box-shadow: var(--blur-and-shadow-card);
    color: var(--color-text);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-primary);
}

.edgingCard {
    width: 212px;
    height: 320px;
    border: 1px solid var(--color-score);
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.numberCard {
    position: absolute;
    top: -8px;
    left: 16px;
    font-size: 14px;
    font-weight: 400;
    background-color: var(--color-primary)
}

.eventText {
    position: absolute;
    bottom: -8px;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 12px;
    background-color: var(--color-primary);
    padding: 0 4px;
}
</style>