<script setup lang="ts">
import p1 from '../assets/project1.png';
import p2 from '../assets/project2.png';

const projects = [
  {
    title: 'Enterprise ERP System',
    desc: 'Scalable business management platform featuring real-time financial tracking and automated Jasper Reports integration.',
    image: p1,
    tags: ['Adobe ColdFusion', 'Vue.js', 'Jasper Reports', 'SQL', 'MariaDB']
  },
  {
    title: 'Logistics Web Mobile Solution',
    desc: 'Responsive web mobile application for real-time asset tracking and fleet management via Taffy REST APIs.',
    image: p2,
    tags: ['Ionic Framework', 'Node.js', 'Taffy']
  }
];
</script>

<template>
  <section id="projects">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Featured <span class="gradient-text">Work</span></h2>
        <p class="section-subtitle">
          A selection of my most impactful projects, showcasing technical expertise and innovative problem-solving.
        </p>
      </div>

      <div class="projects-grid">
        <div v-for="project in projects" :key="project.title" class="glass project-card">
          <div class="project-image-wrapper">
            <img :src="project.image" :alt="project.title" class="project-img" />
          </div>
          <div class="project-info">
            <div class="project-tags">
              <span v-for="tag in project.tags" :key="tag" class="project-tag">
                {{ tag }}
              </span>
            </div>
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-desc">{{ project.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
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

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 3rem;
}

.project-card {
  overflow: hidden;
  padding: 0;
  cursor: pointer;
  transition: var(--transition);
}

.project-card:hover {
  transform: translateY(-15px);
  border-color: rgba(255,255,255,0.3);
}

.project-image-wrapper {
  height: 240px;
  overflow: hidden;
}

.project-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-card:hover .project-img {
  transform: scale(1.05);
}

.project-info {
  padding: 2rem;
}

.project-tags {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.project-tag {
  font-size: 0.7rem;
  padding: 0.2rem 0.6rem;
  background: rgba(255,255,255,0.05);
  border-radius: 4px;
  border: 1px solid var(--border-color);
  color: var(--secondary-color);
}

.project-title {
  font-size: 1.5rem;
  margin-bottom: 0.8rem;
}

.project-desc {
  color: var(--text-secondary);
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
  line-height: 1.5;
}
</style>
