<script setup>
import { ref } from 'vue'
import Cross from '../assets/Cross.vue'
import CrossMini from '../assets/CrossMini.vue'
import CheckMark from '../assets/CheckMark.vue'
import CheckMarkMini from '../assets/CheckMarkMini.vue'
const emit = defineEmits(['flip', 'cardStatus'])
const cards = ref([{
    word: 'dust-coat',
    translation: 'пятно на пальто',
    state: 'closed',
    status: 'pending',
    },
    {
    word: 'camel caravan',
    translation: 'караван верблюдов',
    state: 'open',
    status: 'pending',
    },
    {word: 'auto',
    translation: 'автомобиль',
    state: 'open',
    status: 'succes',
    },
    {word: 'lead',
    translation: 'свинец',
    state: 'open',
    status: 'failed',
    },

])
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
    <div class="wrap">
        <div v-for="card in cards" @click="handleFlipCard()" class="card">
            <div class="edgingCard">
                <span class="numberCard">01</span>
                <button v-if="card.state === 'open' && card.status === 'succes'" class="btn topText"><CheckMark/></button>
                <button v-if="card.state === 'open' && card.status === 'failed'" class="btn topText"><Cross/></button>
                <p v-if="card.state === 'closed'">{{ card.word }}</p>
                <p v-if="card.state === 'open'">{{ card.translation }}</p>
                <span v-if="card.state === 'closed'" class="eventText">Перевернуть</span>
                <span v-if="card.state === 'open' && card.status === 'succes'" class="eventText">Завершено</span>
                <span v-if="card.state === 'open' && card.status === 'failed'" class="eventText">Завершено</span>
                <div v-if="card.state === 'open' && card.status === 'pending'" class="btns eventText" style="bottom: -16px;"
                >
                    <button class="btn"><CrossMini/></button>
                    <button class="btn"><CheckMarkMini/></button>
                </div>
            </div>
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

.topText {
    position: absolute;
    top: -18px;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 12px;
    z-index: 10;
    padding: 0 4px;
}

.btns {
    width: 80px;
    display: flex;
    justify-content: space-between;
}

.btn {
    cursor: pointer;
    outline: none;
    border: none;
    background-color: transparent;
}
</style>