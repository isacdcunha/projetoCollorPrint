<script setup lang="ts">
import AppFooter from '@/components/appFooter.vue';
import AppHeader from '@/components/appHeader.vue';

</script>

<template>
    <header><AppHeader/></header>
    <main>
        <div class="servicos">
            <h2>O que fazemos?</h2>
            <h1>Veja alguns de nossos serviços</h1>
        </div>
    </main>
    <footer><AppFooter/></footer>
</template>

<style scoped>
.servicos{
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>