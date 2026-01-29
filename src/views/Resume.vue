<script setup lang="ts">
import { Mail, MapPin, Globe, Linkedin, Printer, ChevronLeft } from 'lucide-vue-next';

const skills = [
  { category: 'Frontend', items: ['Vue.js', 'Adobe ColdFusion', 'Ionic Framework', 'FW/1', 'TypeScript', 'JavaScript', 'HTML5/CSS', 'Bootstrap', 'WordPress'] },
  { category: 'Backend', items: ['Node.js', 'PHP', 'Laravel', 'Adobe ColdFusion', 'C#', 'Java', 'FW/1', 'Taffy'] },
  { category: 'Mobile & Cloud', items: ['Android/iOS', 'Ionic', 'Google Kubernetes Engine', 'SQL', 'Jasper Reports'] },
  { category: 'Engineering', items: ['System Analysis', 'Software PM', 'Git', 'CI/CD'] }
];

const experiences = [
  {
    role: 'Software Engineer',
    company: 'Sourceamax',
    period: '2023 - Present',
    desc: 'Architecting enterprise solutions using Adobe ColdFusion and Node.js. Developed mobile apps with Ionic and optimized backend reporting with Jasper Reports.'
  },
  {
    role: "Associate's Degree in Web Development",
    company: 'Passerelles numériques Cambodia (School)',
    period: 'Education',
    desc: 'Intensive Full-Stack training focusing on PHP, Laravel, and industrial software standards.'
  },
  {
    role: 'Bachelor of Computer Science',
    company: 'Asia Euro University (University)',
    period: 'Education',
    desc: 'Specialized in Software Engineering, System Analysis & Design, and Software Project Management.'
  }
];

const printResume = () => {
  window.print();
};
</script>

<template>
  <div class="resume-page">
    <div class="resume-controls no-print">
      <router-link to="/" class="btn-back">
        <ChevronLeft :size="20" /> Back to Portfolio
      </router-link>
      <div class="action-btns">
        <button @click="printResume" class="btn-print">
          <Printer :size="18" /> Print Resume
        </button>
      </div>
    </div>

    <div class="resume-container glass">
      <header class="resume-header">
        <div class="header-main">
          <div class="name-badge">AVAILABLE FOR NEW OPPORTUNITIES</div>
          <h1 class="name">KHY <span class="gradient-text">PHAT</span></h1>
          <p class="title-main">Specializing in Enterprise & Web Architecture</p>

          <div class="header-contact">
            <div class="contact-grid">
              <div class="contact-card">
                <Mail :size="16" class="icon-accent" />
                <span>khy.learning@gmail.com</span>
              </div>
              <div class="contact-card">
                <MapPin :size="16" class="icon-accent" />
                <span>Phnom Penh, Cambodia</span>
              </div>
              <div class="contact-card">
                <Globe :size="16" class="icon-accent" />
                <span>https://khy-portfolio.vercel.app</span>
              </div>
              <div class="contact-card">
                <Linkedin :size="16" class="icon-accent" />
                <span>https://www.linkedin.com/in/khy-phat-13a310278/</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div class="resume-grid">
        <aside class="resume-sidebar">
          <section class="resume-section">
            <h2 class="section-title">Expertise</h2>
            <div class="skill-groups">
              <div v-for="cat in skills" :key="cat.category" class="skill-group">
                <h3 class="group-name">{{ cat.category }}</h3>
                <div class="tag-cloud">
                  <span v-for="skill in cat.items" :key="skill" class="skill-tag-alt">{{ skill }}</span>
                </div>
              </div>
            </div>
          </section>

          <section class="resume-section">
            <h2 class="section-title">Languages</h2>
            <div class="lang-pill"><strong>Khmer</strong> Native</div>
            <div class="lang-pill"><strong>English</strong> Professional</div>
          </section>
        </aside>

        <div class="resume-main">
          <section class="resume-section">
            <h2 class="section-title">Profile Summary</h2>
            <div class="summary-wrapper">
              <p class="summary-text-alt">
                Strategic-thinking Software Engineer with a mastery of enterprise ecosystems. I specialize in bridging
                the gap between complex backend architectures (<strong>Node.js</strong>, <strong>Adobe
                  ColdFusion</strong>) and intuitive, performant frontends (<strong>Vue</strong>,
                <strong>Ionic</strong>). Proven track record in optimizing digital reporting with <strong>Jasper
                  Reports</strong> and deploying scalable solutions on <strong>GKE</strong>.
              </p>
            </div>
          </section>

          <section class="resume-section">
            <h2 class="section-title">Professional Experience</h2>
            <div class="milestone-list">
              <div v-for="exp in experiences.filter(e => e.period !== 'Education')" :key="exp.company"
                class="milestone-item">
                <div class="milestone-marker"></div>
                <div class="milestone-content">
                  <div class="milestone-header">
                    <h3 class="milestone-role">{{ exp.role }}</h3>
                    <span class="milestone-period">{{ exp.period }}</span>
                  </div>
                  <p class="milestone-company">{{ exp.company }}</p>
                  <p class="milestone-desc">{{ exp.desc }}</p>
                </div>
              </div>
            </div>
          </section>

          <section class="resume-section print-break-before">
            <h2 class="section-title">Selected Projects</h2>
            <div class="project-list">
              <div class="milestone-item project-item">
                <div class="milestone-marker"></div>
                <div class="milestone-content">
                  <div class="milestone-header">
                    <h3 class="milestone-role">Enterprise ERP System</h3>
                    <span class="milestone-period">Lead Developer</span>
                  </div>
                  <p class="milestone-desc">Designed a complex business management platform using <strong>Adobe
                      ColdFusion</strong> and <strong>Vue.js</strong>. Integrated <strong>Jasper Reports</strong> for
                    automated financial reporting and managed scalable deployments.</p>
                </div>
              </div>
              <div class="milestone-item project-item">
                <div class="milestone-marker"></div>
                <div class="milestone-content">
                  <div class="milestone-header">
                    <h3 class="milestone-role">Logistics Mobile Solution</h3>
                    <span class="milestone-period">Full-Stack Architecture</span>
                  </div>
                  <p class="milestone-desc">Architected a cross-platform tracking app with <strong>Ionic
                      Framework</strong> and <strong>Node.js</strong>. Built high-performance <strong>Taffy REST
                      APIs</strong> and maintained secure data synchronization.</p>
                </div>
              </div>
            </div>
          </section>

          <section class="resume-section">
            <h2 class="section-title">Education</h2>
            <div class="milestone-list">
              <div v-for="edu in experiences.filter(e => e.period === 'Education')" :key="edu.company"
                class="milestone-item">
                <div class="milestone-marker"></div>
                <div class="milestone-content">
                  <div class="milestone-header">
                    <h3 class="milestone-role">{{ edu.role }}</h3>
                    <span class="milestone-period">{{ edu.period }}</span>
                  </div>
                  <p class="milestone-company">{{ edu.company }}</p>
                  <p class="milestone-desc">{{ edu.desc }}</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.resume-page {
  padding: 8rem 2rem 4rem;
  max-width: 1000px;
  margin: 0 auto;
}

section {
  padding: 1rem 0;
}

.resume-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid var(--border-color);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.btn-back {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-secondary);
  font-weight: 600;
  font-size: 0.9rem;
  transition: var(--transition);
  padding: 0.5rem 1rem;
  border-radius: 8px;
}

.btn-back:hover {
  color: var(--text-primary);
  background: var(--surface-color);
  transform: translateX(-5px);
}

.action-btns {
  display: flex;
  gap: 1rem;
}

.btn-print {
  background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
  color: white;
  border: none;
  padding: 0.7rem 1.5rem;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-weight: 700;
  font-size: 0.9rem;
  transition: var(--transition);
  box-shadow: 0 10px 20px var(--primary-glow);
}

.btn-print:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 15px 30px var(--primary-glow);
  filter: brightness(1.1);
}

.btn-print:active {
  transform: translateY(0);
}

.resume-container {
  padding: 4rem;
  min-height: 1100px;
}

.resume-header {
  border-bottom: 2px solid var(--border-color);
  padding-bottom: 3rem;
  margin-bottom: 4rem;
}

.name-badge {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  padding: 0.4rem 1rem;
  background: var(--primary-glow);
  color: var(--primary-color);
  border-radius: 4px;
  margin-bottom: 1.5rem;
}

.name {
  font-size: 3.5rem;
  font-weight: 900;
  line-height: 1;
  margin-bottom: 0.5rem;
  letter-spacing: -0.04em;
}

.title-main {
  color: var(--text-secondary);
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 2.5rem;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.5rem;
}

.contact-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.icon-accent {
  color: var(--primary-color);
}

.resume-grid {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 5rem;
}

.section-title {
  font-size: 0.9rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--text-primary);
  margin-bottom: 2rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--primary-color);
  display: inline-block;
}

.skill-groups {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.group-name {
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--secondary-color);
  margin-bottom: 1rem;
}

.tag-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag-alt {
  font-size: 0.75rem;
  padding: 0.3rem 0.8rem;
  background: var(--surface-color);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  color: var(--text-secondary);
}

.lang-pill {
  font-size: 0.9rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
}

.summary-wrapper {
  background: var(--surface-color);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid var(--border-color);
}

.summary-text-alt {
  font-size: 1.05rem;
  line-height: 1.8;
  color: var(--text-secondary);
}

.summary-text-alt strong {
  color: var(--text-primary);
  font-weight: 700;
  border-bottom: 2px solid var(--primary-color);
  padding: 0 2px;
}

.milestone-list {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  position: relative;
  padding-left: 1.5rem;
}

.milestone-list::before {
  content: '';
  position: absolute;
  left: 0;
  top: 5px;
  bottom: 5px;
  width: 1px;
  background: var(--border-color);
}

.milestone-item {
  position: relative;
}

.milestone-marker {
  position: absolute;
  left: -1.75rem;
  top: 6px;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--primary-color);
  border: 2px solid var(--bg-color);
}

.milestone-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.milestone-role {
  font-size: 1.3rem;
  font-weight: 800;
}

.milestone-period {
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--text-secondary);
}

.milestone-company {
  font-size: 1rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.milestone-desc {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-secondary);
}

@media print {
  @page {
    margin: 0.5cm;
  }

  .no-print,
  :global(.nav-container),
  :global(.progress-bar) {
    display: none !important;
  }

  .resume-page {
    padding: 0 !important;
    margin: 0 !important;
    background: white !important;
  }

  .resume-container {
    box-shadow: none !important;
    border: none !important;
    background: white !important;
    color: black !important;
    padding: 0 !important;
    margin: 0 !important;
    min-height: auto !important;
  }

  .resume-container :deep(*) {
    color: black !important;
    border-color: #eee !important;
  }

  .name {
    font-size: 2.5rem !important;
    color: black !important;
  }

  .gradient-text {
    background: none !important;
    -webkit-text-fill-color: black !important;
    color: black !important;
  }

  .resume-grid {
    display: grid;
    grid-template-columns: 200px 1fr !important;
    gap: 2rem !important;
  }

  /* Professional 2-page split logic */
  .resume-section.print-break-before {
    break-before: page;
    padding-top: 2rem;
  }

  .resume-section {
    break-inside: avoid;
    margin-bottom: 2rem !important;
  }

  .section-title {
    color: #000 !important;
    border-bottom: 2px solid #000 !important;
    margin-bottom: 1.5rem !important;
  }

  .milestone-marker {
    background: black !important;
  }

  .milestone-item {
    margin-bottom: 2rem !important;
  }

  .summary-wrapper {
    background: none !important;
    border: 1px solid #ccc !important;
    padding: 1rem !important;
  }
}

@media (max-width: 768px) {
  .resume-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .header-contact {
    margin-top: 2rem;
  }

  .resume-container {
    padding: 2rem;
  }
}
</style>
