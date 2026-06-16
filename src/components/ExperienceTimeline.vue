<script setup>
import { ref } from 'vue'

const experiences = ref([
  {
    id: 1,
    role: '全端專案開發 (Digi-Pack / Asana-Learning)',
    company: '專案實作與團隊協作',
    date: '近期經歷',
    description: '運用 Laravel 與 Vue 3 等現代化框架進行系統開發，熟悉 GitHub 協作流程並積極參與 Pull Request 的技術討論，展現團隊協作能力。'
  },
  {
    id: 2,
    role: 'AI系 應屆畢業生',
    company: '國立大學 (或原學校)',
    date: '2022 - 2026',
    description: '具備扎實的全端開發基礎，並積極導入進階 AI 代理工具（如 Antigravity、OpenClaw、Claude Code 等）作為開發輔助，熟悉如何與 AI 高效協作以加速開發迭代，展現擁抱新科技的熱忱。'
  }
])
</script>

<template>
  <section class="experience-section container" id="experience">
    <div class="section-header" v-slide-in>
      <h2 class="title">我的 <span class="text-gradient">經歷</span></h2>
      <div class="divider"></div>
      <p class="subtitle">我一路走來的學習與專案經歷。</p>
    </div>

    <div class="timeline">
      <div 
        v-for="(exp, index) in experiences" 
        :key="exp.id" 
        class="timeline-item"
        :class="{ 'align-right': index % 2 !== 0 }"
        v-slide-in="index % 2 === 0 ? 'left' : 'right'"
      >
        <div class="timeline-dot"></div>
        <div class="timeline-content glass-panel">
          <span class="date">{{ exp.date }}</span>
          <h3 class="role">{{ exp.role }}</h3>
          <h4 class="company">{{ exp.company }}</h4>
          <p class="description">{{ exp.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.experience-section {
  padding: 8rem 2rem;
}

.section-header {
  text-align: center;
  margin-bottom: 5rem;
}

.title {
  font-size: 3rem;
  margin-bottom: 0.5rem;
}

.divider {
  width: 60px;
  height: 4px;
  background: var(--accent-gradient);
  border-radius: 2px;
  margin: 0 auto 1.5rem;
}

.subtitle {
  color: var(--text-secondary);
  font-size: 1.1rem;
}

.timeline {
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
}

/* Central line */
.timeline::after {
  content: '';
  position: absolute;
  width: 4px;
  background: var(--surface-border);
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -2px;
  border-radius: 2px;
}

.timeline-item {
  padding: 10px 50px;
  position: relative;
  width: 50%;
  box-sizing: border-box;
}

.timeline-item:nth-child(even) {
  left: 50%;
}

.timeline-item:nth-child(odd) {
  left: 0;
  text-align: right;
}

.timeline-dot {
  position: absolute;
  width: 20px;
  height: 20px;
  background: var(--bg-color);
  border: 4px solid var(--accent-color);
  border-radius: 50%;
  top: 30px;
  z-index: 1;
}

.timeline-item:nth-child(odd) .timeline-dot {
  right: -10px;
}

.timeline-item:nth-child(even) .timeline-dot {
  left: -10px;
}

.timeline-content {
  padding: 2rem;
  position: relative;
  transition: transform var(--transition-normal);
}

.timeline-content:hover {
  transform: translateY(-5px);
  border-color: var(--accent-color-hover);
}

.date {
  display: inline-block;
  color: var(--accent-color);
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
}

.role {
  font-size: 1.4rem;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
}

.company {
  font-size: 1.1rem;
  color: var(--text-secondary);
  font-weight: 500;
  margin-bottom: 1rem;
}

.description {
  color: var(--text-secondary);
  line-height: 1.6;
}

/* Responsive adjustments */
@media screen and (max-width: 768px) {
  .timeline::after {
    left: 20px;
  }
  
  .timeline-item {
    width: 100%;
    padding-left: 60px;
    padding-right: 0;
    text-align: left;
  }
  
  .timeline-item:nth-child(even),
  .timeline-item:nth-child(odd) {
    left: 0;
  }
  
  .timeline-item:nth-child(odd) .timeline-dot,
  .timeline-item:nth-child(even) .timeline-dot {
    left: 10px;
    right: auto;
  }
  
  .timeline-item:nth-child(odd) {
    text-align: left;
  }
}
</style>
