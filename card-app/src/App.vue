<script setup>
import Button from "./components/Button.vue";
import Header from "./components/Header.vue";
import Cards from "./components/Cards.vue";
import { onMounted, ref } from "vue";

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
</script>

<template>
  <main class="main">
    <Header />
    <div class="wrapBtn">
      <Button> Начать игру </Button>
    </div>
    <Cards :data="data" />
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
