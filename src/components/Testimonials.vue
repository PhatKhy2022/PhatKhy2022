<script setup lang="ts">
import { Quote } from 'lucide-vue-next';

const testimonials = [
    {
        name: 'Sarah Jamison',
        role: 'Senior Product Manager @ TechFlow',
        content: 'Khy is a rare talent who can bridge the gap between complex backend logic and sleek frontend UI. His work on our mobile CRM was transformative.',
        avatar: 'https://i.pravatar.cc/100?u=sarah'
    },
    {
        name: 'David Chen',
        role: 'CTO @ InnovateAsia',
        content: 'Strategic, technical, and highly reliable. Khy doesn’t just write code; he architected solutions that scaled our user base by 400% in six months.',
        avatar: 'https://i.pravatar.cc/100?u=david'
    },
    {
        name: 'Kimberly Seng',
        role: 'Lead Developer @ PNC',
        content: 'Among the brightest engineers I’ve mentored. His grasp of system design as an Associate Developer was already at a Senior level.',
        avatar: 'https://i.pravatar.cc/100?u=kim'
    }
];
</script>

<template>
    <section id="testimonials" class="testimonials-section">
        <div class="container">
            <div class="section-header" v-motion :initial="{ opacity: 0, scale: 0.9 }"
                :visible-once="{ opacity: 1, scale: 1 }">
                <h2 class="section-title">Professional <span class="gradient-text">Trust</span></h2>
                <p class="section-subtitle">
                    Don't just take my word for it. Here is what industry leaders say about my engineering impact.
                </p>
            </div>

            <div class="testimonials-grid">
                <div v-for="(item, index) in testimonials" :key="item.name" class="glass testimonial-card" v-motion
                    :initial="{ opacity: 0, y: 30 }"
                    :visible-once="{ opacity: 1, y: 0, transition: { delay: index * 200 } }">

                    <div class="quote-icon">
                        <Quote :size="30" />
                    </div>

                    <p class="t-content">"{{ item.content }}"</p>

                    <div class="t-footer">
                        <img :src="item.avatar" :alt="item.name" class="t-avatar" />
                        <div class="t-info">
                            <h4 class="t-name">{{ item.name }}</h4>
                            <p class="t-role">{{ item.role }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.testimonials-section {
    background: rgba(3, 0, 20, 0.5);
    position: relative;
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

.testimonials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2.5rem;
}

.testimonial-card {
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    position: relative;
    transition: var(--transition);
}

.testimonial-card:hover {
    border-color: var(--primary-color);
    transform: translateY(-10px);
    background: rgba(255, 255, 255, 0.05);
}

.quote-icon {
    color: var(--primary-color);
    opacity: 0.3;
    margin-bottom: 1.5rem;
}

.t-content {
    font-size: 1.1rem;
    line-height: 1.7;
    color: var(--text-primary);
    margin-bottom: 2.5rem;
    font-style: italic;
    font-weight: 300;
}

.t-footer {
    margin-top: auto;
    display: flex;
    align-items: center;
    gap: 1rem;
}

.t-avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid var(--border-color);
}

.t-name {
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 0.2rem;
}

.t-role {
    font-size: 0.8rem;
    color: var(--text-secondary);
}
</style>
