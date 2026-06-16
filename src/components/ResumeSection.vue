<script setup>
</script>

<template>
  <section class="resume-section container" id="resume">
    <div class="resume-card glass-panel" v-slide-in="'up'">
      <div class="resume-content">
        <h2 class="title">獲取完整 <span class="text-gradient">個人履歷</span></h2>
        <p class="subtitle">
          如果您想了解更多關於我的專案細節、技術能力與學經歷背景，歡迎下載完整版 PDF 簡歷。
        </p>
      </div>
      <div class="resume-action">
        <a href="/resume.pdf" download="冠忠_簡歷.pdf" class="btn btn-primary btn-large">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 8px;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
          下載 PDF 簡歷
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.resume-section {
  padding: 4rem 2rem;
  margin-bottom: 2rem;
}

.resume-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem;
  background: linear-gradient(145deg, rgba(59, 130, 246, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%);
  border: 1px solid var(--surface-border);
  border-radius: 24px;
}

.resume-content {
  flex: 1;
  max-width: 600px;
}

.title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.subtitle {
  color: var(--text-secondary);
  font-size: 1.1rem;
  line-height: 1.6;
}

.resume-action {
  flex-shrink: 0;
  margin-left: 2rem;
}

.btn-large {
  padding: 1rem 2rem;
  font-size: 1.1rem;
}

@media (max-width: 768px) {
  .resume-card {
    flex-direction: column;
    text-align: center;
    padding: 2.5rem;
    gap: 2rem;
  }
  
  .resume-action {
    margin-left: 0;
  }
}
</style>
