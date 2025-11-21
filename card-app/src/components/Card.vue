<script setup>
import { inject, onBeforeUnmount, onMounted, ref } from "vue";
import Cross from "../assets/Cross.vue";
import CrossMini from "../assets/CrossMini.vue";
import CheckMark from "../assets/CheckMark.vue";
import CheckMarkMini from "../assets/CheckMarkMini.vue";

const props = defineProps([
  "initialState",
  "initialStatus",
  "word",
  "translation",
  "index",
]);

const state = ref(props.initialState);
const status = ref(props.initialStatus);
const scores = inject('scores')


const emit = defineEmits(["flip", "cardStatus"]);

onMounted(() => {
  state.value = props.initialState;
  status.value = props.initialStatus;
});

const handleFlipCard = () => {
  if (status.value !== "pending") return; // Запрещаем переворот, если статус уже установлен
  state.value = state.value === "closed" ? "opened" : "closed";
  emit("flip", state.value);
};

// Добавьте эту функцию для обработки изменения статуса
const handleStatusChange = (newStatus) => {
  console.log("Changing status to:", newStatus); // Для отладки
  status.value = newStatus; // Обновляем локальный статус
  emit("cardStatus", {
    status: newStatus,
    index: props.index,
  });

  if (newStatus === 'failed') {
    scores.value -= 4
  }

  if (newStatus === 'succes') {
    scores.value += 10
  }
  console.log({newStatus, scores})
  
};

</script>

<template>
  <div class="card" @click="handleFlipCard()">
    <div class="edging-card">
      <span class="number-card">{{ index + 1 }}</span>
      <button
        v-if="state === 'opened' && status === 'succes'"
        class="btn top-text"
      >
        <CheckMark />
      </button>
      <button
        v-if="state === 'opened' && status === 'failed'"
        class="btn top-text"
      >
        <Cross />
      </button>
      <p v-if="state === 'closed'">{{ word }}</p>
      <p v-if="state === 'opened'">{{ translation }}</p>
      <span v-if="state === 'closed'" class="eventText">Перевернуть</span>
      <span v-if="state === 'opened' && status === 'succes'" class="eventText"
        >Завершено</span
      >
      <span v-if="state === 'opened' && status === 'failed'" class="eventText"
        >Завершено</span
      >
      <div
        v-if="state === 'opened' && status === 'pending'"
        class="btns eventText"
        style="bottom: -16px"
      >
        <button class="btn" @click.stop="handleStatusChange('failed')">
          <CrossMini />
        </button>
        <button class="btn" @click.stop="handleStatusChange('succes')">
          <CheckMarkMini />
        </button>
      </div>
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

.edging-card {
  width: 212px;
  height: 320px;
  border: 1px solid var(--color-score);
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.number-card {
  position: absolute;
  top: -8px;
  left: 16px;
  font-size: 14px;
  font-weight: 400;
  background-color: var(--color-primary);
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

.top-text {
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
