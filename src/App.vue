<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { ChevronUp } from 'lucide-vue-next';
import Navbar from './components/Navbar.vue';

const scrollProgress = ref(0);
const isVisible = ref(false);

const updateScroll = () => {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  scrollProgress.value = height > 0 ? (winScroll / height) * 100 : 0;
  isVisible.value = winScroll > 600;
};

const jumpToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(() => {
  window.addEventListener('scroll', updateScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', updateScroll);
});
</script>

<template>
  <div class="app-wrapper">
    <!-- Progress Bar -->
    <div class="progress-bar" :style="{ width: scrollProgress + '%' }"></div>

    <Navbar />

    <router-view></router-view>

    <!-- Scroll up button -->
    <button class="scroll-top glass no-print" :class="{ 'visible': isVisible }" @click="jumpToTop">
      <ChevronUp :size="20" />
    </button>

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
  background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
  z-index: 2000;
  transition: width 0.1s ease-out;
}

.scroll-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  cursor: pointer;
  z-index: 1000;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.4s ease-out;
  pointer-events: none;
}

.scroll-top.visible {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

.scroll-top:hover {
  background: var(--primary-color);
  border-color: var(--primary-color);
  box-shadow: 0 0 20px var(--primary-glow);
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

@media (max-width: 768px) {

  /* Custom cursor was hidden on mobile, now it's just not there */
  .app-wrapper {
    cursor: auto;
    /* Ensure default cursor on mobile */
  }

  a,
  button {
    cursor: pointer;
    /* Ensure default pointer on interactive elements on mobile */
  }
}
</style>
