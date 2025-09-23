<script setup></script>

<template>
    <button class="button">
        <slot />
    </button>
</template>

<style scoped>
.button {
    border: none;
    border-radius: 100px;
    background: var(--color-button);
    padding: 16px 10px;
    font-family: var(--font);
    font-size: 24px;
    font-weight: 400;
    color: var(--primary);
    cursor: pointer;
    width: 315px;
}

.button:hover {
    background: var(--color-button-hover)
}
</style>