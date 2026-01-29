<script setup lang="ts">
import { ref } from 'vue';
import { Github, Linkedin, Menu, X } from 'lucide-vue-next';

const isOpen = ref(false);

const navItems = [
  { name: 'About', href: '/#about' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Growth', href: '/#growth' },
  { name: 'Impact', href: '/#impact' },
  { name: 'Experience', href: '/#experience' },
  { name: 'Contact', href: '/#contact' },
];
</script>

<template>
  <nav class="glass nav-container" v-motion :initial="{ opacity: 0, y: -20 }"
    :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }">
    <router-link to="/" class="logo gradient-text">
      KHY PHAT
    </router-link>

    <div class="desktop-menu">
      <a v-for="item in navItems" :key="item.name" :href="item.href" class="nav-link">
        {{ item.name }}
      </a>

      <div class="nav-divider">
        <a href="https://github.com/PhatKhy2022" target="_blank" class="icon-link">
          <Github :size="20" />
        </a>
        <a href="https://www.linkedin.com/in/khy-phat-13a310278/" target="_blank" class="icon-link">
          <Linkedin :size="20" />
        </a>
      </div>
    </div>

    <div class="mobile-toggle">
      <component :is="isOpen ? X : Menu" @click="isOpen = !isOpen" />
    </div>
  </nav>
</template>

<style scoped>
.nav-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 1rem 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--border-color);
  background: rgba(3, 0, 20, 0.7);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  transition: var(--transition);
}

.logo {
  font-size: 1.5rem;
  font-weight: 800;
  cursor: pointer;
}

.desktop-menu {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-link {
  font-weight: 500;
  font-size: 0.9rem;
  color: var(--text-secondary);
  transition: var(--transition);
}

.nav-link:hover {
  color: var(--text-primary);
}

.nav-divider {
  display: flex;
  gap: 1rem;
  margin-left: 1rem;
  border-left: 1px solid var(--border-color);
  padding-left: 1rem;
  align-items: center;
}

.icon-link {
  cursor: pointer;
  color: var(--text-primary);
  transition: var(--transition);
  display: flex;
  align-items: center;
}

.icon-link:hover {
  filter: drop-shadow(0 0 8px var(--primary-glow));
  color: var(--primary-color);
}

.mobile-toggle {
  display: none;
}

@media (max-width: 768px) {
  .desktop-menu {
    display: none;
  }

  .mobile-toggle {
    display: block;
    cursor: pointer;
  }
}
</style>
