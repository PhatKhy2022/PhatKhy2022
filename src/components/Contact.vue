<script setup lang="ts">
import { Send, Mail, MapPin } from 'lucide-vue-next';
</script>

<template>
  <section id="contact">
    <div class="container">
      <div class="contact-grid">
        <div class="contact-info" v-motion :initial="{ opacity: 0, x: -50 }"
          :visible-once="{ opacity: 1, x: 0, transition: { duration: 600 } }">
          <h2 class="section-title">Let's <span class="gradient-text">Connect</span></h2>
          <p class="section-subtitle">
            Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new
            opportunities and creative ideas.
          </p>

          <div class="info-list">
            <div class="info-item">
              <div class="info-icon icon-primary">
                <Mail :size="24" />
              </div>
              <div>
                <p class="label">Email</p>
                <p class="value">khy.learning@gmail.com</p>
              </div>
            </div>
            <div class="info-item">
              <div class="info-icon icon-secondary">
                <MapPin :size="24" />
              </div>
              <div>
                <p class="label">Location</p>
                <p class="value">Phnom Penh, Cambodia</p>
              </div>
            </div>
          </div>
        </div>

        <div class="glass contact-form-card" v-motion :initial="{ opacity: 0, x: 50 }"
          :visible-once="{ opacity: 1, x: 0, transition: { duration: 600 } }">
          <form class="contact-form">
            <div class="form-group">
              <label class="form-label">Name</label>
              <input type="text" placeholder="Your Name" class="form-input" />
            </div>
            <div class="form-group">
              <label class="form-label">Email</label>
              <input type="email" placeholder="name@example.com" class="form-input" />
            </div>
            <div class="form-group">
              <label class="form-label">Message</label>
              <textarea rows="4" placeholder="Your message here..." class="form-input textarea"></textarea>
            </div>
            <button class="btn btn-primary btn-submit">
              Send Message
              <Send :size="18" />
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 4rem;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}

.section-subtitle {
  color: var(--text-secondary);
  margin-bottom: 3rem;
  font-size: 1.1rem;
}

.info-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.info-item {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.info-icon {
  padding: 1rem;
  border-radius: 12px;
}

.icon-primary {
  background: rgba(112, 0, 255, 0.1);
  color: var(--primary-color);
}

.icon-secondary {
  background: rgba(0, 209, 255, 0.1);
  color: var(--secondary-color);
}

.label {
  font-size: 0.85rem;
  color: var(--text-secondary);
}

.value {
  font-weight: 600;
}

.contact-form-card {
  padding: 3rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-label {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.form-input {
  width: 100%;
  padding: 1rem;
  background: var(--input-bg);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  color: var(--text-primary);
  outline: none;
  transition: var(--transition);
}

.form-input:focus {
  border-color: var(--primary-color);
}

.textarea {
  resize: none;
}

.btn-primary {
  background: var(--primary-color);
  color: white;
  padding: 1rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  transition: var(--transition);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px var(--primary-glow);
}
</style>
