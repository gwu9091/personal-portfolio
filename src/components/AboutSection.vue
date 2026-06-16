<script setup>
import { ref } from 'vue'

const skills = ref([
  { name: 'Vue 3 / JavaScript', desc: '前端框架與動態互動', color: '#42b883' },
  { name: 'Laravel / 後端開發', desc: 'API 開發與資料庫架構', color: '#ff2d20' },
  { name: 'Bootstrap / RWD', desc: '響應式切版與 UI 設計', color: '#7952b3' },
  { name: 'AI 代理開發工具', desc: 'Antigravity, OpenClaw, Claude Code', color: '#4285f4' },
])
</script>

<template>
  <section class="about-section container" id="about">
    <div class="section-header" v-slide-in>
      <h2 class="title">關於 <span class="text-gradient">我</span></h2>
      <div class="divider"></div>
      <p class="subtitle">簡單介紹我是誰以及我的專長。</p>
    </div>

    <div class="about-content">
      <div class="bio glass-panel" v-slide-in="'left'">
        <h3>持續成長的全端開發者</h3>
        <p>
          從扎實的 JavaScript 與 Bootstrap 基礎，一路進階到運用 Laravel 與 Vue 3 進行系統開發，我致力於將技術深耕並落實於實際專案中。
          我不僅具備將想法轉化為產品的能力，也樂於在實務開發中不斷精進與挑戰自我。
        </p>
        <p>
          在團隊協作上，我熟悉 GitHub 流程並熱衷於技術討論；同時我也積極擁抱前沿科技，擅長協同進階 AI 代理工具（如 Antigravity、OpenClaw、Claude Code 等）進行 AI 輔助開發，藉由人機協作大幅提升開發效率與程式碼品質。
          具備實戰經驗與高度學習熱忱的我，隨時準備好迎接下一個挑戰！
        </p>
      </div>

      <div class="skills glass-panel" v-slide-in="'right'">
        <h3>我的技術棧</h3>
        <div class="skill-grid">
          <div 
            class="skill-card" 
            v-for="skill in skills" 
            :key="skill.name"
            :style="{ '--theme-color': skill.color }"
          >
            <div class="skill-icon">
              <div class="dot"></div>
            </div>
            <div class="skill-details">
              <h4>{{ skill.name }}</h4>
              <p>{{ skill.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  padding: 8rem 2rem;
  position: relative;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
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

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: stretch;
}

.bio, .skills {
  padding: 2.5rem;
  transition: transform var(--transition-normal);
}

.bio:hover, .skills:hover {
  transform: translateY(-5px);
  border-color: var(--accent-color);
}

.bio h3, .skills h3 {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
}

.bio p {
  color: var(--text-secondary);
  margin-bottom: 1.2rem;
  font-size: 1.05rem;
  line-height: 1.7;
}

.skill-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
}

.skill-card {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding: 1.2rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--surface-border);
  border-radius: 12px;
  transition: all var(--transition-normal);
  position: relative;
  overflow: hidden;
}

.skill-card::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background-color: var(--theme-color);
  opacity: 0;
  transition: opacity var(--transition-normal);
}

.skill-card:hover {
  background: rgba(255, 255, 255, 0.06);
  transform: translateX(5px);
  border-color: var(--theme-color);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.skill-card:hover::before {
  opacity: 1;
}

.skill-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: var(--surface-color-hover);
  border: 1px solid var(--surface-border);
}

.skill-icon .dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: var(--theme-color);
  box-shadow: 0 0 15px var(--theme-color);
}

.skill-details h4 {
  font-size: 1.1rem;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
  font-weight: 600;
}

.skill-details p {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin: 0;
}

@media (max-width: 900px) {
  .about-content {
    grid-template-columns: 1fr;
  }
}
</style>
