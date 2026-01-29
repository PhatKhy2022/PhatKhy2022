<script setup lang="ts">
import { Award, ExternalLink, Trophy } from 'lucide-vue-next';

interface Certification {
    title: string;
    issuer: string;
    date: string;
    link?: string;
}

interface Goal {
    title: string;
    description: string;
    progress: number;
}

const certifications: Certification[] = [
    {
        title: 'Adobe Certified Professional – Adobe ColdFusion',
        issuer: 'Adobe',
        date: '2023'
    }
];

const futureGoals: Goal[] = [
    {
        title: 'AI & Machine Learning Integration',
        description: 'Mastering LLM integration and building intelligent agentic systems.',
        progress: 65
    },
    {
        title: 'Cloud Native Architecture',
        description: 'Deep diving into Kubernetes, Docker orchestration, and serverless computing.',
        progress: 80
    },
    {
        title: 'Mobile System Excellence',
        description: 'Refining Ionic and Native performance for enterprise-grade mobile apps.',
        progress: 90
    }
];
</script>

<template>
    <section id="growth" class="growth-section">
        <div class="container">
            <div class="section-header" v-motion :initial="{ opacity: 0, y: 20 }" :visible-once="{ opacity: 1, y: 0 }">
                <h2 class="section-title">Career <span class="gradient-text">Growth</span></h2>
                <p class="section-subtitle">
                    Tracking my professional credentials and the technical roadmap for my future career development.
                </p>
            </div>

            <div class="growth-grid">
                <!-- Certifications -->
                <div class="growth-column" v-motion :initial="{ opacity: 0, x: -30 }"
                    :visible-once="{ opacity: 1, x: 0, transition: { delay: 200 } }">
                    <div class="column-title">
                        <Award :size="24" class="icon-accent" />
                        <h3>Licenses & Certifications</h3>
                    </div>

                    <div class="cert-list">
                        <div v-for="cert in certifications" :key="cert.title" class="glass cert-card">
                            <div class="cert-info">
                                <h4 class="cert-title">{{ cert.title }}</h4>
                                <p class="cert-issuer">{{ cert.issuer }} • {{ cert.date }}</p>
                            </div>
                            <a v-if="cert.link" :href="cert.link" target="_blank" class="cert-link">
                                <ExternalLink :size="16" />
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Future Goals -->
                <div class="growth-column" v-motion :initial="{ opacity: 0, x: 30 }"
                    :visible-once="{ opacity: 1, x: 0, transition: { delay: 400 } }">
                    <div class="column-title">
                        <Trophy :size="24" class="icon-accent" />
                        <h3>Future Roadmap</h3>
                    </div>

                    <div class="goal-list">
                        <div v-for="goal in futureGoals" :key="goal.title" class="glass goal-card">
                            <div class="goal-header">
                                <h4 class="goal-title">{{ goal.title }}</h4>
                                <span class="goal-percent">{{ goal.progress }}%</span>
                            </div>
                            <p class="goal-desc">{{ goal.description }}</p>
                            <div class="progress-track">
                                <div class="progress-fill" :style="{ width: goal.progress + '%' }"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.growth-section {
    position: relative;
    background: rgba(112, 0, 255, 0.02);
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

.growth-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 3rem;
}

.column-title {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
}

.column-title h3 {
    font-size: 1.5rem;
    font-weight: 700;
}

.icon-accent {
    color: var(--secondary-color);
}

.cert-list,
.goal-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.cert-card,
.goal-card {
    padding: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: var(--transition);
}

.cert-card:hover,
.goal-card:hover {
    border-color: var(--secondary-color);
    transform: translateX(10px);
}

.cert-title,
.goal-title {
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 0.3rem;
}

.cert-issuer {
    font-size: 0.85rem;
    color: var(--text-secondary);
}

.cert-link {
    color: var(--text-secondary);
    transition: var(--transition);
}

.cert-link:hover {
    color: var(--secondary-color);
}

.goal-card {
    flex-direction: column;
    align-items: flex-start;
}

.goal-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.8rem;
}

.goal-percent {
    font-size: 0.8rem;
    font-weight: 800;
    color: var(--secondary-color);
}

.goal-desc {
    font-size: 0.9rem;
    color: var(--text-secondary);
    margin-bottom: 1.2rem;
    line-height: 1.5;
}

.progress-track {
    width: 100%;
    height: 6px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
    overflow: hidden;
}

.progress-fill {
    height: 100%;
    background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
    border-radius: 10px;
}

@media (max-width: 768px) {
    .growth-grid {
        grid-template-columns: 1fr;
    }
}
</style>
