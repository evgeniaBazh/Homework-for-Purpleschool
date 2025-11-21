<script setup>
import Button from "./components/Button.vue";
import Header from "./components/Header.vue";
import Cards from "./components/Cards.vue";
import { onMounted, ref, computed } from "vue";

const API_ENDPOINT = "http://localhost:8080/api/random-words";
const data = ref([]);
const error = ref(null);

async function getWord() {
  try {
    const res = await fetch(`${API_ENDPOINT}`);
    if (res.status != 200) {
      error.value = await res.json();
      data.value = [];
      return;
    }
    data.value = await res.json();
  } catch (err) {
    console.error("Ошибка запроса:", err);
    error.value = err.message;
    data.value = [];
  }
}


onMounted(() => {
  getWord();
});

const cards = computed(() => {
    const words = data.value.map((item) => {
        return { 
            word: item.word,
            translation: item.translation,
            state: 'closed',
            status: 'pending',
        }
    })
    return words
})

const activeCards = ref(false)
const activeBtn = ref(true)

const handleClickBtn = () => {
  activeCards.value = !activeCards.value
  activeBtn.value = !activeBtn.value
}
</script>

<template>
  <main class="main">
    <Header />
    <div class="wrapBtn" v-if="activeBtn">
      <Button @click="handleClickBtn"> Начать игру </Button>
    </div>
    <Cards v-if="activeCards" :data="data" :cards="cards" @repeat="getWord"/>
  </main>
</template>

<style scoped>
.main {
  background: var(--color-bg-main);
}

.wrapBtn {
  display: grid;
  place-items: center;
  min-height: 100vh;
}
</style>
