<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import ClickEffect from './components/ClickEffect.vue'
import ExternalTransition from './components/ExternalTransition.vue'
import HeroArea from './components/HeroArea.vue'
import TechMarquee from './components/TechMarquee.vue'
import AboutSection from './components/AboutSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import StatsSection from './components/StatsSection.vue'
import ProjectGallery from './components/ProjectGallery.vue'
import ExperienceTimeline from './components/ExperienceTimeline.vue'
import ResumeSection from './components/ResumeSection.vue'
import ContactSection from './components/ContactSection.vue'

const isScrolledPastHero = ref(false)

onMounted(() => {
  // 監聽滾動以切換 Nav 樣式
  const handleScroll = () => {
    // 假設 Hero 區塊約等於視窗高度
    isScrolledPastHero.value = window.scrollY > window.innerHeight * 0.8
  }
  window.addEventListener('scroll', handleScroll)
  
  // 客製化緩慢平滑滾動邏輯
  const handleSmoothScroll = (e) => {
    const link = e.target.closest('a[href^="#"]')
    if (!link) return
    
    const targetId = link.getAttribute('href')
    if (targetId === '#') return
    const targetElement = document.querySelector(targetId)
    if (!targetElement) return
    
    e.preventDefault()
    
    // 計算滾動距離
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset
    const startPosition = window.pageYOffset
    const distance = targetPosition - startPosition
    const duration = 1200 // 1.2秒的緩慢滾動，極具電影感
    let start = null

    // 緩動函數 easeInOutCubic
    const easeInOutCubic = (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

    const step = (timestamp) => {
      if (!start) start = timestamp
      const progress = timestamp - start
      const percentage = Math.min(progress / duration, 1)
      
      window.scrollTo(0, startPosition + distance * easeInOutCubic(percentage))
      
      if (progress < duration) {
        requestAnimationFrame(step)
      }
    }

    // 確保沒有原生的 scroll-behavior 干擾
    document.documentElement.style.scrollBehavior = 'auto'
    requestAnimationFrame(step)
  }

  document.addEventListener('click', handleSmoothScroll)
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
    document.removeEventListener('click', handleSmoothScroll)
  })
})
</script>

<template>
  <main class="portfolio-app">
    <ExternalTransition />
    <ClickEffect />
    <!-- Navbar / Header -->
    <header class="glass-header" :class="{ 'is-scrolled': isScrolledPastHero }">
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
/* 全域自訂 SVG 游標 (如果不放在 scoped 裡會更好，這裡示範用法) */
:global(body) {
  cursor: url('/img/cursor.svg') 5 3, auto !important;
}

:global(a), :global(button), :global(.interactive) {
  cursor: url('/img/cursor-hover.svg') 5 3, pointer !important;
}

.portfolio-app {
  position: relative;
  min-height: 100vh;
  /* / / / 條紋背景設計 (非常柔和的中性灰，不傷眼) */
  background-image: repeating-linear-gradient(
    -45deg,
    rgba(0, 0, 0, 0.015) 0px,
    rgba(0, 0, 0, 0.015) 80px,
    transparent 80px,
    transparent 200px
  );
  /* 確保原本的背景色在條紋底層 */
  background-color: var(--bg-color, #0f172a);
}

/* 預設：Hero 區塊的樣式 (新版凸顯膠囊) */
.glass-header {
  position: fixed;
  top: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 4rem);
  max-width: 1000px;
  z-index: 100;
  padding: 1rem 2.5rem;
  border-radius: 999px; /* Pill shape */
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0,0,0,0.05);
  border: 1px solid rgba(255, 255, 255, 1);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

/* 滾動後：其他區塊的樣式 (原本的透明毛玻璃) */
.glass-header.is-scrolled {
  top: 1rem;
  max-width: 1200px;
  padding: 1rem 2rem;
  background: var(--surface-color);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.02);
  border: 1px solid var(--surface-border);
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
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text-secondary);
  padding: 0.6rem 1.2rem;
  border-radius: 999px;
  transition: all 0.3s ease;
}

.nav-links a:hover {
  color: #fff;
  background-color: var(--accent-color);
  box-shadow: 0 4px 15px var(--accent-glow);
}

/* 滾動後：文字連結恢復原狀 */
.glass-header.is-scrolled .nav-links a {
  font-size: 0.95rem;
  font-weight: 500;
  padding: 0;
}

.glass-header.is-scrolled .nav-links a:hover {
  color: var(--text-primary);
  background-color: transparent;
  box-shadow: none;
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
