<script setup>
import { computed, ref } from 'vue'
import Card from './Card.vue'
const props = defineProps(['data'])
const initialState = ref("closed");
const initialStatus = ref("pending");

const cards = computed(() => {
    const words = props.data.map((item) => {
        return { 
            word: item.word,
            translation: item.translation,
            initialState,
            initialStatus,
        }
    })
    return words
})



</script>

<template>
    <div class="wrap">
        <Card v-for="card in cards"  :initial-state="card.initialState" :initial-status="card.initialStatus" :translation="card.translation" :word="card.word"/>
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