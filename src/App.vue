<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Navbar from './components/Navbar.vue';

const scrollProgress = ref(0);

const updateScroll = () => {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  scrollProgress.value = height > 0 ? (winScroll / height) * 100 : 0;
};

onMounted(() => {
  window.addEventListener('scroll', updateScroll);
});
</script>

<template>
  <div class="app-wrapper">
    <!-- Progress Bar -->
    <div class="progress-bar" :style="{ width: scrollProgress + '%' }"></div>

    <Navbar />
    
    <router-view></router-view>

    <footer class="footer">
      <p class="footer-text">
        &copy; {{ new Date().getFullYear() }} Khy Phat - Portfolio. Built with Vue 3.
      </p>
    </footer>
  </div>
</template>

<style>
.app-wrapper {
  position: relative;
  min-height: 100vh;
  background-color: var(--bg-color);
  color: var(--text-primary);
}

.progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  height: 4px;
  background: var(--primary-color);
  z-index: 2000;
  transition: width 0.1s ease-out;
}

.footer {
  padding: 4rem 0;
  border-top: 1px solid var(--border-color);
  text-align: center;
}

.footer-text {
  color: var(--text-secondary);
  font-size: 0.9rem;
}
</style>
