<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const ripples = ref([])
let idCounter = 0

const createRipple = (e) => {
  // 建立新的漣漪物件
  const newRipple = {
    id: idCounter++,
    x: e.clientX,
    y: e.clientY
  }
  
  ripples.value.push(newRipple)
  
  // 500ms 後移除該漣漪 (配合 CSS 動畫時間)
  setTimeout(() => {
    ripples.value = ripples.value.filter(r => r.id !== newRipple.id)
  }, 500)
}

onMounted(() => {
  // 使用 mousedown 反應會比 click 更即時
  window.addEventListener('mousedown', createRipple)
})

onUnmounted(() => {
  window.removeEventListener('mousedown', createRipple)
})
</script>

<template>
  <div class="click-effects-container">
    <div 
      v-for="ripple in ripples" 
      :key="ripple.id" 
      class="click-ripple" 
      :style="{ left: ripple.x + 'px', top: ripple.y + 'px' }"
    ></div>
  </div>
</template>

<style scoped>
.click-effects-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none; /* 確保不會阻擋真正的點擊 */
  z-index: 999999;
}

.click-ripple {
  position: absolute;
  width: 20px;
  height: 20px;
  /* 使用科技藍，帶有一點透明度 */
  border: 2px solid rgba(59, 130, 246, 0.8);
  background-color: rgba(59, 130, 246, 0.1);
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(0.5);
  opacity: 1;
  animation: ripple-burst 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  will-change: transform, opacity;
}

@keyframes ripple-burst {
  0% {
    transform: translate(-50%, -50%) scale(0.5);
    opacity: 0.8;
    border-width: 3px;
  }
  100% {
    transform: translate(-50%, -50%) scale(3.5);
    opacity: 0;
    border-width: 0px;
  }
}
</style>
