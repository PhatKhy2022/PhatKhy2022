<script setup lang="ts">
import { Rocket, Users, Code2, Zap } from 'lucide-vue-next';

const stats = [
    {
        label: 'Performance Optimization',
        value: '30%',
        desc: 'Average improvement in system response times',
        icon: Zap
    },
    {
        label: 'Enterprise Solutions',
        value: '10+',
        desc: 'Scalable modules architected and deployed',
        icon: Rocket
    },
    {
        label: 'Code Quality',
        value: '95%',
        desc: 'Unit test coverage on core enterprise APIs',
        icon: Code2
    },
    {
        label: 'Cross-functional Impact',
        value: '3',
        desc: 'Industries transformed: ERP, CRM, and Mobile',
        icon: Users
    }
];
</script>

<template>
    <section id="impact" class="impact-section">
        <div class="container">
            <div class="section-header" v-motion :initial="{ opacity: 0, y: 20 }" :visible-once="{ opacity: 1, y: 0 }">
                <h2 class="section-title">Engineering <span class="gradient-text">Impact</span></h2>
                <p class="section-subtitle">
                    Driven by metrics and results. I prioritize solutions that bring measurable value to the business
                    and end-users.
                </p>
            </div>

            <div class="stats-grid">
                <div v-for="(stat, index) in stats" :key="stat.label" class="glass stat-card" v-motion
                    :initial="{ opacity: 0, scale: 0.9 }"
                    :visible-once="{ opacity: 1, scale: 1, transition: { delay: index * 100 } }">

                    <div class="stat-icon-wrapper">
                        <component :is="stat.icon" :size="28" />
                    </div>

                    <div class="stat-content">
                        <h3 class="stat-value">{{ stat.value }}</h3>
                        <p class="stat-label">{{ stat.label }}</p>
                        <p class="stat-desc">{{ stat.desc }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.impact-section {
    position: relative;
    background: rgba(112, 0, 255, 0.01);
}

.section-header {
    text-align: center;
    margin-bottom: 5rem;
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

.stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.stat-card {
    padding: 2.5rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: var(--transition);
}

.stat-card:hover {
    border-color: var(--secondary-color);
    transform: translateY(-10px);
}

.stat-icon-wrapper {
    color: var(--secondary-color);
    margin-bottom: 1.5rem;
    padding: 1rem;
    background: rgba(0, 209, 255, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.stat-value {
    font-size: 3rem;
    font-weight: 800;
    color: var(--text-primary);
    margin-bottom: 0.5rem;
    font-family: var(--font-heading);
}

.stat-label {
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--secondary-color);
    margin-bottom: 0.5rem;
}

.stat-desc {
    font-size: 0.9rem;
    color: var(--text-secondary);
    line-height: 1.5;
}
</style>
