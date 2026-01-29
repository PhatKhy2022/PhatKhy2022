<script setup lang="ts">
import { ArrowRight, Sparkles } from 'lucide-vue-next';
</script>

<template>
  <section id="hero" class="hero-section">
    <!-- Animated background Blobs -->
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>

    <div class="container hero-content">
      <div class="hero-badge">
        <Sparkles :size="16" color="#FFD700" />
        <span>AVAILABLE FOR WORK</span>
      </div>

      <h1 class="hero-title">
        Building <span class="gradient-text">Future-Ready</span> <br /> Digital Experiences.
      </h1>

      <p class="hero-subtitle">
        Full-Stack Software Engineer specializing in Enterprise Solutions, Mobile Development, and Scalable Web Architecture.
      </p>

      <div class="hero-actions">
        <button class="btn btn-primary">
          View Projects <ArrowRight :size="20" />
        </button>
        <router-link to="/resume" class="btn btn-outline">
          Resume
        </router-link>
      </div>

      <!-- Floating Code Snippet -->
      <div class="glass float code-card">
        <div class="code-header">
          <div class="dot dot-red"></div>
          <div class="dot dot-yellow"></div>
          <div class="dot dot-green"></div>
        </div>
        <pre class="code-body"><code><span class="keyword">const</span> dev = {
  name: <span class="string">'Software Engineer'</span>,
  skills: [<span class="string">'Vue'</span>, <span class="string">'Node'</span>, <span class="string">'ColdFusion'</span>, <span class="string">'WordPress'</span>],
  passion: <span class="string">'Innovation'</span>
};</code></pre>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.blob {
  position: absolute;
  border-radius: 50%;
  z-index: -1;
  opacity: 0.2;
  filter: blur(100px);
}

.blob-1 {
  top: 10%;
  left: 10%;
  width: 300px;
  height: 300px;
  background: var(--primary-glow);
  animation: float-blob-1 20s infinite linear;
}

.blob-2 {
  bottom: 10%;
  right: 10%;
  width: 400px;
  height: 400px;
  background: var(--secondary-glow);
  animation: float-blob-2 15s infinite linear;
}

@keyframes float-blob-1 {
  0% { transform: scale(1) translate(0, 0); }
  33% { transform: scale(1.2) translate(100px, -50px); }
  66% { transform: scale(0.8) translate(-50px, 50px); }
  100% { transform: scale(1) translate(0, 0); }
}

@keyframes float-blob-2 {
  0% { transform: scale(1) translate(0, 0); }
  50% { transform: scale(1.2) translate(-100px, 50px); }
  100% { transform: scale(1) translate(0, 0); }
}

.hero-content {
  text-align: center;
  z-index: 1;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--surface-color);
  padding: 0.5rem 1.5rem;
  border-radius: 100px;
  border: 1px solid var(--border-color);
  margin-bottom: 2rem;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.05em;
}

.hero-title {
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
}

.hero-subtitle {
  font-size: 1.2rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto 3rem;
  font-weight: 400;
}

.hero-actions {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 1rem 2.5rem;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  transition: var(--transition);
}

.btn-primary {
  background: var(--primary-color);
  color: white;
  border: none;
  box-shadow: 0 10px 30px var(--primary-glow);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 15px 40px var(--primary-glow);
}

.btn-outline {
  background: transparent;
  color: var(--text-primary);
  border: 1px solid var(--border-color);
}

.btn-outline:hover {
  background: var(--surface-color);
  transform: translateY(-2px);
}

.code-card {
  margin: 5rem auto 0;
  padding: 1.5rem;
  max-width: 400px;
  text-align: left;
}

.code-header {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.dot-red { background: #FF5F56; }
.dot-yellow { background: #FFBD2E; }
.dot-green { background: #27C93F; }

.code-body {
  font-size: 0.9rem;
  color: var(--secondary-color);
  font-family: 'Fira Code', monospace;
}

.keyword { color: #FF79C6; }
.string { color: #F1FA8C; }
</style>
