<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

// 狀態：idle (閒置), entering (布幕拉起), leaving (布幕退場)
const transitionState = ref('idle')
const targetUrl = ref('')

const handleExternalClick = (e) => {
  // 只攔截專案卡片裡面的連結
  const link = e.target.closest('.project-card a')
  if (!link) return
  
  const href = link.getAttribute('href')
  if (!href || href === '#') return

  e.preventDefault()

  targetUrl.value = href
  
  // 1. 布幕拉起 (Entering)
  transitionState.value = 'entering'

  // 2. 等待布幕完全覆蓋畫面後 (600ms)，執行跳轉
  setTimeout(() => {
    // 這裡使用 window.location.href 跳轉到外部網站
    // 瀏覽器在載入新網站的期間，原本的網頁不會消失，所以布幕會「一直卡著」直到新網站載入完成並替換畫面。
    window.location.href = targetUrl.value
    
    // 如果因為某些原因（例如被擋下或開在新分頁），設定一個超時把布幕收起來，以免卡死
    setTimeout(() => {
      transitionState.value = 'leaving'
      setTimeout(() => { transitionState.value = 'idle' }, 600)
    }, 3000)
  }, 600)
}

onMounted(() => {
  document.addEventListener('click', handleExternalClick)
})

onUnmounted(() => {
  document.removeEventListener('click', handleExternalClick)
})
</script>

<template>
  <div class="page-transition" :class="transitionState" v-show="transitionState !== 'idle'">
    <div class="transition-curtain">
      <div class="loading-content">
        <div class="loading-spinner"></div>
        <div class="loading-text">CONNECTING...</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-transition {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  pointer-events: none;
  z-index: 99999999; /* 確保在最上層 */
}

.transition-curtain {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--bg-color, #0f172a);
  display: flex;
  align-items: center;
  justify-content: center;
  
  /* 預設在畫面下方之外 */
  transform: translateY(100%);
  transition: transform 0.6s cubic-bezier(0.77, 0, 0.175, 1);
}

.loading-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid rgba(59, 130, 246, 0.2);
  border-top-color: var(--accent-color, #3b82f6);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.loading-text {
  color: var(--accent-color, #3b82f6);
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 4px;
}

/* Entering 狀態：布幕從下往上滑入覆蓋 */
.page-transition.entering .transition-curtain {
  transform: translateY(0%);
}
.page-transition.entering .loading-content {
  opacity: 1;
  transition-delay: 0.3s;
}

/* Leaving 狀態：布幕繼續往上滑出畫面 */
.page-transition.leaving .transition-curtain {
  transform: translateY(-100%);
}
.page-transition.leaving .loading-content {
  opacity: 0;
}
</style>
