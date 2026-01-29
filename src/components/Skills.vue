<script setup lang="ts">
import { Layout, Server, Smartphone, Database, Cpu } from 'lucide-vue-next';

const skills = [
  {
    name: 'Frontend & UI',
    icon: Layout,
    desc: 'Architecting responsive, high-performance interfaces with modern frameworks and pixel-perfect precision.',
    items: ['Vue.js', 'Adobe ColdFusion', 'Ionic Framework', 'FW/1', 'TypeScript', 'JavaScript', 'HTML5/CSS', 'Bootstrap', 'WordPress']
  },
  {
    name: 'Backend Mastery',
    icon: Server,
    desc: 'Building robust server-side architectures, RESTful APIs, and complex enterprise logic modules.',
    items: ['Node.js', 'PHP', 'Laravel', 'Adobe ColdFusion', 'C#', 'Java', 'FW/1', 'Taffy']
  },
  {
    name: 'Web Mobile & Hybrid',
    icon: Smartphone,
    desc: 'Developing seamless cross-platform mobile experiences using hybrid technologies and web-first principles.',
    items: ['Ionic Framework', 'Responsive Design', 'Web-first Mobile', 'Mobile System Excellence']
  },
  {
    name: 'Cloud & Database',
    icon: Database,
    desc: 'Managing scalable data structures and cloud-native infrastructure for high-availability systems.',
    items: ['SQL', 'MariaDB', 'Jasper Reports', 'Cloud Native Architecture']
  },
  {
    name: 'Engineering Leadership',
    icon: Cpu,
    desc: 'Applying rigorous system analysis, project management, and software design patterns to large-scale builds.',
    items: ['System Analysis & Design', 'Software Project Management', 'Design Patterns']
  }
];
</script>

<template>
  <section id="about" class="skills-section">
    <div class="container">
      <div class="section-header" v-motion :initial="{ opacity: 0, y: 20 }" :visible-once="{ opacity: 1, y: 0 }">
        <h2 class="section-title">Technical <span class="gradient-text">Mastery</span></h2>
        <p class="section-subtitle">
          I combine deep architectural knowledge with modern development practices to build scalable, production-ready
          systems.
        </p>
      </div>

      <div class="skills-grid">
        <div v-for="(skill, index) in skills" :key="skill.name" class="glass skill-card" v-motion
          :initial="{ opacity: 0, y: 30 }" :visible-once="{ opacity: 1, y: 0, transition: { delay: index * 100 } }">

          <div class="card-glow"></div>

          <div class="icon-header">
            <div class="icon-wrapper">
              <component :is="skill.icon" :size="24" />
            </div>
            <h3 class="skill-name">{{ skill.name }}</h3>
          </div>

          <p class="skill-desc">{{ skill.desc }}</p>

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
  position: relative;
  padding: 8rem 0;
  background: radial-gradient(circle at 50% 50%, rgba(112, 0, 255, 0.05) 0%, transparent 70%);
}

.section-header {
  text-align: center;
  margin-bottom: 5rem;
}

.section-title {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 800;
  margin-bottom: 1.5rem;
}

.section-subtitle {
  color: var(--text-secondary);
  max-width: 700px;
  margin: 0 auto;
  font-size: 1.1rem;
  line-height: 1.8;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
}

.skill-card {
  padding: 2.5rem;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.card-glow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), rgba(255, 255, 255, 0.06), transparent 40%);
  opacity: 0;
  transition: opacity 0.5s;
  pointer-events: none;
}

.skill-card:hover .card-glow {
  opacity: 1;
}

.skill-card:hover {
  border-color: rgba(112, 0, 255, 0.3);
  transform: translateY(-10px) scale(1.02);
  background: rgba(255, 255, 255, 0.02);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5), inset 0 0 20px rgba(112, 0, 255, 0.05);
}

.icon-header {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 1.5rem;
}

.icon-wrapper {
  color: var(--secondary-color);
  padding: 0.8rem;
  background: rgba(0, 209, 255, 0.08);
  border-radius: 14px;
  transition: all 0.4s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(0, 209, 255, 0.1);
}

.skill-card:hover .icon-wrapper {
  transform: rotate(5deg) scale(1.1);
  background: var(--primary-color);
  color: white;
  border-color: var(--primary-color);
  box-shadow: 0 0 20px var(--primary-glow);
}

.skill-name {
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  transition: color 0.3s;
}

.skill-desc {
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  flex-grow: 1;
}

.tags-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
}

.skill-tag {
  font-size: 0.75rem;
  padding: 0.4rem 0.9rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 8px;
  color: var(--text-secondary);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  font-weight: 500;
}

.skill-card:hover .skill-tag {
  border-color: rgba(0, 209, 255, 0.2);
  color: var(--text-primary);
  background: rgba(0, 209, 255, 0.05);
}

.skill-tag:hover {
  background: var(--secondary-color) !important;
  color: white !important;
  border-color: var(--secondary-color) !important;
  transform: translateY(-3px);
  box-shadow: 0 4px 12px var(--secondary-glow);
}
</style>
