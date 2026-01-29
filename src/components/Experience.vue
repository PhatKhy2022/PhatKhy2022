<script setup lang="ts">
const experiences = [
  {
    role: 'Software Engineer',
    company: 'Sourceamax',
    period: 'Current / Recent',
    desc: 'Developing enterprise-level applications using Adobe ColdFusion (FW/1, Taffy), Node.js, and Vue.js. Implementing Jasper Reports and managing web mobile solutions with Ionic.'
  },
  {
    role: "Associate's Degree in Web Development",
    company: 'Passerelles numériques Cambodia (School)',
    period: 'Education',
    desc: 'Intensive software development training focused on PHP, Laravel, TypeScript, and Full-Stack fundamentals. Developed production-ready web applications and professional coding standards.'
  },
  {
    role: 'Bachelor of Computer Science',
    company: 'Asia Euro University (University)',
    period: '2023 - 2025',
    desc: 'Studied System Analysis & Design, Software Project Management, and Introduction to Mobile Development. Mastered core fundamentals in Java, HTML5, and CSS.'
  }
];
</script>

<template>
  <section id="experience" class="exp-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Professional <span class="gradient-text">Journey</span></h2>
      </div>

      <div class="timeline">
        <div class="vertical-line"></div>

        <div v-for="(exp, index) in experiences" :key="index" class="timeline-item" v-motion
          :initial="{ opacity: 0, x: -50 }" :visible-once="{ opacity: 1, x: 0, transition: { delay: index * 150 } }">
          <div class="timeline-dot"></div>

          <div class="glass exp-card">
            <div class="exp-header">
              <div class="role-group">
                <h3 class="role-title">{{ exp.role }}</h3>
                <p class="company-name">{{ exp.company }}</p>
              </div>
              <span class="period-badge">{{ exp.period }}</span>
            </div>
            <p class="exp-desc">{{ exp.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.exp-section {
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

.timeline {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
}

.vertical-line {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, transparent, var(--primary-color), var(--secondary-color), transparent);
  opacity: 0.3;
}

.timeline-item {
  position: relative;
  padding-left: 3rem;
  margin-bottom: 3rem;
}

.timeline-dot {
  position: absolute;
  left: -5px;
  top: 0;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--primary-color);
  box-shadow: 0 0 15px var(--primary-glow);
}

.exp-card {
  padding: 2rem;
}

.exp-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.role-title {
  font-size: 1.25rem;
  margin-bottom: 0.2rem;
}

.company-name {
  color: var(--secondary-color);
  font-weight: 600;
}

.period-badge {
  font-size: 0.85rem;
  color: var(--text-secondary);
  background: rgba(255, 255, 255, 0.05);
  padding: 0.3rem 1rem;
  border-radius: 100px;
  border: 1px solid var(--border-color);
}

.exp-desc {
  color: var(--text-secondary);
  line-height: 1.6;
}
</style>
