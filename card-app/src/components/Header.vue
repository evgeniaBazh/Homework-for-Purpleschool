<script setup>
import { inject } from 'vue';
import Score from './Score.vue'
const scores = inject('scores')
console.log(scores);
</script>

<template>
    <header class="wrapHeader">
        <p class="heading">Запомни слово</p>
        <Score :scores="scores" />
    </header>
</template>

<style scoped>
.wrapHeader {
    background-size: cover;
    background-position: top center;
    padding: 49px 66px;
    display: flex;
    justify-content: space-between;
    font-weight: 700;
    font-size: 16px;
    color: var(--color-text);
}   

.heading {
    text-transform: uppercase;
}
</style>