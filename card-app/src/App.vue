<script setup>
import Button from './components/Button.vue';
import Header from './components/Header.vue'
import Card from './components/Card.vue'
</script>

<template>
  <main class="main">
    <Header/>
    <div class="wrapBtn">
      <Button>
        Начать игру
      </Button>
    </div>
    <Card @flip="($event) => console.log($event)"/>
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
