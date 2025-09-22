<script setup>
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    timezone: 'UTC'
};
  const now = new Date().toLocaleString("ru", options); 
</script>

<template>
  <div class="wrap">
    <h1 class="date">{{ now }}</h1>
  </div>
</template>

<style scoped>
.wrap {
  display: flex;
  justify-content: center;
}
.date {
  border: 1px solid green;
  padding: 5px 15px;
  width: max-content;;
}
</style>
