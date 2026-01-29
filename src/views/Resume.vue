<script setup lang="ts">
import { Mail, MapPin, Globe, Linkedin, Printer } from 'lucide-vue-next';

const skills = [
  { category: 'Frontend', items: ['Vue.js 3', 'TypeScript', 'Ionic Framework', 'Adobe ColdFusion (FW/1)', 'Tailwind CSS', 'WordPress', 'Responsive UI'] },
  { category: 'Backend', items: ['Node.js', 'PHP (Laravel)', 'ColdFusion (Taffy)', 'RESTful APIs', 'SQL (PostgreSQL/MariaDB)', 'Jasper Reports'] },
  { category: 'Tools & DevOps', items: ['Docker', 'GKE', 'Git / GitHub', 'CI/CD Pipelines', 'System Analysis', 'Software PM'] },
  { category: 'Soft Skills', items: ['Problem Solving', 'Team Collaboration', 'Strategic Thinking', 'Agile/Scrum'] }
];

const experiences = [
  {
    role: 'Software Engineer',
    company: 'Sourceamax',
    period: '2023 - Present',
    highlights: [
      'Architected and optimized enterprise ERP modules using Adobe ColdFusion and Node.js, improving system performance by 30%.',
      'Developed cross-platform mobile solutions with Ionic Framework, delivering seamless user experiences across iOS and Android.',
      'Designed and automated complex financial reporting systems using Jasper Reports, reducing manual data processing time.',
      'Collaborated with cross-functional teams to implement scalable backend architectures and RESTful APIs.'
    ]
  },
  {
    role: "Associate's Degree in Web Development",
    company: 'Passerelles numériques Cambodia',
    period: '2021 - 2023',
    highlights: [
      'Successfully completed intensive Full-Stack training with honors.',
      'Gained deep proficiency in PHP, Laravel, and modern web standards through industry-led projects.',
      'Developed a strong foundation in algorithmic thinking and software engineering principles.'
    ]
  },
  {
    role: 'Bachelor of Computer Science',
    company: 'Asia Euro University',
    period: '2023 - 2025',
    highlights: [
      'Focusing on Advanced Software Engineering, System Analysis & Design.',
      'Applying theoretical knowledge in Software Project Management to real-world engineering challenges.',
      'Consistently maintaining high academic standing while working full-time.'
    ]
  }
];

const printResume = () => {
  window.print();
};
</script>

<template>
  <div class="resume-page">
    <div class="resume-container glass" v-motion :initial="{ opacity: 0, scale: 0.98, y: 20 }"
      :enter="{ opacity: 1, scale: 1, y: 0, transition: { duration: 600 } }">
      <!-- Floating Print Action -->
      <button @click="printResume" class="btn-print-floating no-print" title="Export to PDF">
        <Printer :size="20" />
      </button>

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
                the gap between complex backend architectures and high-performance, responsive frontends.
                Expert in <strong>Vue.js 3</strong>, <strong>Adobe ColdFusion</strong>, and <strong>Ionic
                  Framework</strong>, with a proven track record of
                optimizing digital infrastructure and automating intelligent reporting for scalable business solutions.
              </p>
            </div>
          </section>

          <section class="resume-section">
            <h2 class="section-title">Professional Experience</h2>
            <div class="milestone-list">
              <div v-for="exp in experiences.filter(e => e.company === 'Sourceamax')" :key="exp.company"
                class="milestone-item">
                <div class="milestone-marker"></div>
                <div class="milestone-content">
                  <div class="milestone-header">
                    <h3 class="milestone-role">{{ exp.role }}</h3>
                    <span class="milestone-period">{{ exp.period }}</span>
                  </div>
                  <p class="milestone-company">{{ exp.company }}</p>
                  <ul class="milestone-highlights">
                    <li v-for="highlight in exp.highlights" :key="highlight">{{ highlight }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>



          <section class="resume-section">
            <h2 class="section-title">Education</h2>
            <div class="milestone-list">
              <div v-for="edu in experiences.filter(e => e.company !== 'Sourceamax')" :key="edu.company"
                class="milestone-item">
                <div class="milestone-marker"></div>
                <div class="milestone-content">
                  <div class="milestone-header">
                    <h3 class="milestone-role">{{ edu.role }}</h3>
                    <span class="milestone-period">{{ edu.period }}</span>
                  </div>
                  <p class="milestone-company">{{ edu.company }}</p>
                  <ul class="milestone-highlights">
                    <li v-for="highlight in edu.highlights" :key="highlight">{{ highlight }}</li>
                  </ul>
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

.resume-container {
  padding: 4rem;
  min-height: 1100px;
  position: relative;
}

.btn-print-floating {
  position: absolute;
  top: 2rem;
  right: 2rem;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--surface-color);
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  border-radius: 50%;
  cursor: pointer;
  transition: var(--transition);
  z-index: 10;
}

.btn-print-floating:hover {
  background: var(--primary-color);
  color: white;
  transform: scale(1.1) rotate(-10deg);
  box-shadow: 0 0 20px var(--primary-glow);
}

.resume-header {
  border-bottom: 2px solid var(--border-color);
  padding-bottom: 3rem;
  margin-bottom: 4rem;
}

.name-badge {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  padding: 0.5rem 1.2rem;
  background: rgba(0, 209, 255, 0.1);
  color: var(--secondary-color);
  border: 1px solid rgba(0, 209, 255, 0.2);
  border-radius: 6px;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
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

.milestone-highlights {
  margin-top: 1rem;
  padding-left: 1.2rem;
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.6;
}

.milestone-highlights li {
  margin-bottom: 0.5rem;
}

@media print {
  @page {
    size: A4;
    margin: 1cm;
  }

  .no-print,
  :global(.nav-container),
  :global(.progress-bar) {
    display: none !important;
  }

  .resume-page {
    padding: 0 !important;
    background: white !important;
    min-height: auto !important;
  }

  .resume-container {
    padding: 1.5rem 0 0 0 !important;
    box-shadow: none !important;
    border: none !important;
    background: white !important;
    color: #1a1a1a !important;
    min-height: auto !important;
  }

  .resume-container * {
    color: #1a1a1a !important;
    border-color: #e0e0e0 !important;
    background: none !important;
  }

  .resume-header {
    margin-bottom: 2.5rem !important;
    padding-bottom: 2rem !important;
    border-bottom: 1px solid #eee !important;
  }

  .skill-groups {
    gap: 1rem !important;
  }

  .name {
    font-size: 2.2rem !important;
    color: #000 !important;
    margin-bottom: 0 !important;
  }

  .gradient-text {
    background: none !important;
    -webkit-text-fill-color: #000 !important;
    color: #000 !important;
  }

  .name-badge {
    display: none !important;
    /* Cleaner for formal prints */
  }

  .title-main {
    color: #444 !important;
    font-size: 0.95rem !important;
    margin-bottom: 1.5rem !important;
  }

  .resume-grid {
    display: grid;
    grid-template-columns: 170px 1fr !important;
    gap: 2rem !important;
  }

  .section-title {
    color: #000 !important;
    border-bottom: 1px solid #000 !important;
    padding-bottom: 1px !important;
    margin-bottom: 0.8rem !important;
    font-size: 0.75rem !important;
  }

  .milestone-marker,
  .milestone-list::before {
    display: none !important;
  }

  .milestone-list {
    padding-left: 0 !important;
  }

  .group-name {
    color: #222 !important;
    font-size: 0.75rem !important;
    margin-bottom: 0.5rem !important;
  }

  .skill-tag-alt {
    padding: 0 !important;
    border: none !important;
    font-size: 0.75rem !important;
    color: #333 !important;
  }

  .skill-tag-alt::after {
    content: ', ';
  }

  .skill-tag-alt:last-child::after {
    content: '';
  }

  .tag-cloud {
    display: block !important;
  }

  /* PDF structure and page breaks */
  .resume-section {
    page-break-inside: auto !important;
    margin-bottom: 2rem !important;
  }

  .milestone-item,
  .skill-group {
    page-break-inside: avoid !important;
    break-inside: avoid !important;
  }

  .summary-wrapper {
    border: none !important;
    padding: 0 !important;
  }

  .summary-text-alt {
    font-size: 0.95rem !important;
    line-height: 1.6 !important;
  }

  .milestone-role {
    font-size: 1.1rem !important;
    color: #000 !important;
  }

  .milestone-company {
    color: #2563eb !important;
    /* Professional BLUE accent for print */
    font-size: 0.95rem !important;
    font-weight: 700 !important;
  }

  .milestone-highlights {
    font-size: 0.85rem !important;
    margin-top: 0.4rem !important;
  }

  .milestone-highlights li {
    margin-bottom: 0.3rem !important;
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
