<script setup>
import HeroArea from './components/HeroArea.vue'
import TechMarquee from './components/TechMarquee.vue'
import AboutSection from './components/AboutSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import StatsSection from './components/StatsSection.vue'
import ProjectGallery from './components/ProjectGallery.vue'
import ExperienceTimeline from './components/ExperienceTimeline.vue'
import ResumeSection from './components/ResumeSection.vue'
import ContactSection from './components/ContactSection.vue'
</script>

<template>
  <main class="portfolio-app">
    <!-- Navbar / Header could go here -->
    <header class="glass-header glass-panel">
      <nav class="nav-container">
        <div class="logo font-bold text-gradient">DevPortfolio</div>
        <ul class="nav-links">
          <li><a href="#about">關於我</a></li>
          <li><a href="#projects">作品集</a></li>
          <li><a href="#experience">經歷</a></li>
          <li><a href="#resume">履歷</a></li>
          <li><a href="#contact">聯絡我</a></li>
        </ul>
      </nav>
    </header>

    <HeroArea />
    <TechMarquee />
    <AboutSection />
    <ServicesSection />
    <StatsSection />
    <ProjectGallery />
    <ExperienceTimeline />
    <ResumeSection />
    <ContactSection />
    
    <footer class="footer">
      <p>&copy; 2026 DevPortfolio. 使用 Vue 3 製作。</p>
    </footer>
  </main>
</template>

<style scoped>
.portfolio-app {
  position: relative;
  min-height: 100vh;
}

.glass-header {
  position: fixed;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 4rem);
  max-width: 1200px;
  z-index: 100;
  padding: 1rem 2rem;
  border-radius: 999px; /* Pill shape */
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: -0.5px;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-links a {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-secondary);
}

.nav-links a:hover {
  color: var(--text-primary);
}

.footer {
  text-align: center;
  padding: 3rem 0;
  color: var(--text-secondary);
  font-size: 0.9rem;
  border-top: 1px solid var(--surface-border);
  margin-top: 4rem;
}

@media (max-width: 768px) {
  .nav-links {
    display: none; /* simple mobile hiding for now */
  }
}
</style>
