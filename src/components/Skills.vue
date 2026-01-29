<script setup lang="ts">
import { Layout, Server, Smartphone, Database, Cpu } from 'lucide-vue-next';

const skills = [
  { name: 'Frontend & UI', icon: Layout, items: ['Vue.js', 'Adobe ColdFusion', 'Ionic Framework', 'FW/1', 'TypeScript', 'JavaScript', 'HTML5/CSS', 'Bootstrap', 'WordPress'] },
  { name: 'Backend Mastery', icon: Server, items: ['Node.js', 'PHP', 'Laravel', 'Adobe ColdFusion', 'C#', 'Java', 'FW/1', 'Taffy'] },
  { name: 'Mobile Development', icon: Smartphone, items: ['Android App Dev', 'iOS App Dev', 'Ionic Framework'] },
  { name: 'Cloud & Infrastructure', icon: Database, items: ['Google Kubernetes Engine', 'SQL', 'Jasper Reports'] },
  { name: 'Software Engineering', icon: Cpu, items: ['System Analysis & Design', 'Software Project Management'] }
];
</script>

<template>
  <section id="about" class="skills-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Technical <span class="gradient-text">Mastery</span></h2>
        <p class="section-subtitle">
          I leverage a modern stack to build robust and scalable solutions that solve real-world problems.
        </p>
      </div>

      <div class="skills-grid">
        <div v-for="skill in skills" :key="skill.name" class="glass skill-card">
          <div class="icon-wrapper">
            <component :is="skill.icon" />
          </div>
          <h3 class="skill-name">{{ skill.name }}</h3>
          <div class="tags-container">
            <span v-for="item in skill.items" :key="item" class="skill-tag">
              {{ item }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-section {
  background: rgba(255, 255, 255, 0.01);
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.section-subtitle {
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.skill-card {
  padding: 2rem;
  transition: var(--transition);
}

.skill-card:hover {
  border-color: var(--primary-color);
  transform: translateY(-10px);
}

.icon-wrapper {
  color: var(--secondary-color);
  margin-bottom: 1.5rem;
  display: inline-block;
  padding: 0.8rem;
  background: rgba(0, 209, 255, 0.1);
  border-radius: 12px;
}

.skill-name {
  margin-bottom: 1rem;
  font-size: 1.25rem;
}

.tags-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  font-size: 0.75rem;
  padding: 0.3rem 0.8rem;
  background: rgba(255,255,255,0.05);
  border-radius: 100px;
  color: var(--text-secondary);
  border: 1px solid var(--border-color);
}
</style>
