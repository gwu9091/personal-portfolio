<script setup>
import { ref } from 'vue'

const projects = ref([
  {
    id: 1,
    title: '毛孩到府服務平台 (畢業專題)',
    description: '專為寵物飼主打造的到府服務媒合平台。本專案由我「完全獨立」包辦全端架構、介面設計與資料庫建置，具備評價系統、線上商城與會員中心等完整功能，展現扎實的獨立開發實力。',
    tags: ['獨立開發', '全端架構', '商城系統'],
    image: './img/pet.png',
    link: 'https://gwu9091.github.io/'
  },
  {
    id: 2,
    title: '個人 GitHub 開源庫',
    description: '我的個人 GitHub 倉庫，收錄了所有專案原始碼、Side Projects 與技術練習，展現我對於程式開發架構與持續學習的熱忱。',
    tags: ['GitHub', 'Git', 'Open Source'],
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=600&auto=format&fit=crop',
    link: 'https://github.com/gwu9091'
  },
  {
    id: 3,
    title: '個人專屬作品集網站',
    description: '也就是您現在正在瀏覽的網站！完全使用 Vue 3 打造，不依賴龐大的 UI 框架。實作了 3D 視差傾斜、游標光暈追蹤、電影級平滑滾動等進階 CSS/JS 互動特效，展現我對前端細節的極致追求。',
    tags: ['Vue 3', 'Vanilla CSS', 'UI/UX 動畫'],
    image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=600&auto=format&fit=crop',
    link: 'https://github.com/gwu9091/personal-portfolio'
  }
])
</script>

<template>
  <section class="gallery-section container" id="projects">
    <div class="section-header" v-slide-in>
      <h2 class="title">精選 <span class="text-gradient">專案作品</span></h2>
      <div class="divider"></div>
      <p class="subtitle">展示我近期的專案與技術實驗。</p>
    </div>

    <div class="project-grid">
      <div 
        v-for="(project, index) in projects" 
        :key="project.id" 
        class="project-card glass-panel"
        v-slide-in="index % 2 === 0 ? 'left' : 'right'"
      >
        <div class="card-image-wrapper">
          <img :src="project.image" :alt="project.title" class="project-image" />
          <div class="overlay">
            <a :href="project.link" class="btn btn-primary">查看專案</a>
          </div>
        </div>
        
        <div class="card-content">
          <h3 class="card-title">{{ project.title }}</h3>
          <p class="card-description">{{ project.description }}</p>
          
          <div class="tags">
            <span v-for="tag in project.tags" :key="tag" class="tag">
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.gallery-section {
  padding: 8rem 2rem;
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

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
}

.project-card {
  overflow: hidden;
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);
  border-color: rgba(139, 92, 246, 0.4);
}

.card-image-wrapper {
  position: relative;
  width: 100%;
  height: 220px;
  overflow: hidden;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.project-card:hover .project-image {
  transform: scale(1.05);
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(13, 15, 23, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity var(--transition-normal);
  backdrop-filter: blur(4px);
}

.project-card:hover .overlay {
  opacity: 1;
}

.card-content {
  padding: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.card-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.card-description {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex: 1;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background: var(--surface-color-hover);
  color: var(--accent-color-hover);
  padding: 0.25rem 0.75rem;
  border-radius: 99px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid var(--surface-border);
}
</style>
