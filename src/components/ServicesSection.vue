<script setup>
</script>

<template>
  <section class="services-section container" id="services">
    <div class="section-header" v-slide-in>
      <h2 class="title">我能為團隊帶來 <span class="text-gradient">什麼</span></h2>
      <div class="divider"></div>
      <p class="subtitle">將技術轉化為實際價值，我的核心服務與優勢。</p>
    </div>

    <div class="services-grid">
      <div class="service-card glass-panel" v-slide-in="'up'">
        <div class="icon-wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
        </div>
        <h3>全端系統開發</h3>
        <p>從資料庫設計、後端 API 邏輯 (Laravel) 到前端 Vue 介面，具備獨立完成完整系統模組的能力，確保前後端順暢串接。</p>
      </div>

      <div class="service-card glass-panel" v-slide-in="'up'" style="transition-delay: 100ms">
        <div class="icon-wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/></svg>
        </div>
        <h3>響應式與現代化 UI</h3>
        <p>熟練運用 Tailwind CSS 與 Bootstrap 打造流暢且高質感的現代化網頁，保證在手機、平板與桌機上都有完美的視覺體驗。</p>
      </div>

      <div class="service-card glass-panel" v-slide-in="'up'" style="transition-delay: 200ms">
        <div class="icon-wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
        </div>
        <h3>AI 輔助協作開發</h3>
        <p>積極擁抱新科技，擅長使用 Antigravity、Claude Code 等進階 AI 代理工具，以倍速解決 Bug、產出架構並優化程式碼品質。</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services-section {
  padding: 6rem 2rem;
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

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
}

.service-card {
  padding: 3rem 2rem;
  text-align: center;
  transition: transform var(--transition-normal), border-color var(--transition-normal);
}

.service-card:hover {
  transform: translateY(-10px);
  border-color: var(--accent-color);
}

.icon-wrapper {
  width: 70px;
  height: 70px;
  margin: 0 auto 2rem;
  background: rgba(139, 92, 246, 0.1);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-color);
  transform: rotate(-5deg);
  transition: transform var(--transition-normal);
}

.service-card:hover .icon-wrapper {
  transform: rotate(0) scale(1.1);
  background: var(--accent-gradient);
  color: white;
}

.service-card h3 {
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.service-card p {
  color: var(--text-secondary);
  line-height: 1.7;
  font-size: 1rem;
}
</style>
