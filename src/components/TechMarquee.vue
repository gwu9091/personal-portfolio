<script setup>
import { ref } from 'vue'

const techList = ref([
  'Vue.js', 'Laravel', 'Tailwind CSS', 'JavaScript', 'MySQL', 'Git', 'Antigravity', 'Claude Code', 'RESTful API', 'Bootstrap', 'HTML5', 'CSS3', 'Figma'
])
</script>

<template>
  <div class="marquee-container">
    <div class="marquee-track">
      <!-- 渲染兩組以產生無縫迴圈效果 -->
      <div class="marquee-content" v-for="n in 2" :key="n">
        <span class="tech-tag" v-for="(tech, index) in techList" :key="`${n}-${index}`">
          {{ tech }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.marquee-container {
  width: 100%;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.02);
  border-top: 1px solid var(--surface-border);
  border-bottom: 1px solid var(--surface-border);
  padding: 1.5rem 0;
  position: relative;
  display: flex;
}

/* 左右漸層遮罩效果 */
.marquee-container::before,
.marquee-container::after {
  content: '';
  position: absolute;
  top: 0;
  width: 150px;
  height: 100%;
  z-index: 2;
  pointer-events: none;
}

.marquee-container::before {
  left: 0;
  background: linear-gradient(to right, var(--bg-color), transparent);
}

.marquee-container::after {
  right: 0;
  background: linear-gradient(to left, var(--bg-color), transparent);
}

.marquee-track {
  display: flex;
  width: fit-content;
  animation: scroll 30s linear infinite;
}

.marquee-content {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: 3rem;
  padding-right: 3rem;
}

.tech-tag {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 2px;
  white-space: nowrap;
  transition: color var(--transition-fast);
}

.tech-tag:hover {
  color: var(--accent-color);
  text-shadow: 0 0 10px rgba(139, 92, 246, 0.5);
}

@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@media (max-width: 768px) {
  .tech-tag {
    font-size: 1rem;
  }
  .marquee-content {
    gap: 2rem;
    padding-right: 2rem;
  }
}
</style>
