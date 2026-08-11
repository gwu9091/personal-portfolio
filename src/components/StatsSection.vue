<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const stats = ref([
  { label: '掌握技術與工具', value: 12, prefix: '', suffix: '+' },
  { label: '程式練習時數', value: 500, prefix: '', suffix: '+' },
  { label: '解決問題的熱忱', value: 100, prefix: '', suffix: '%' }
])

const displayStats = ref([
  { value: 0 },
  { value: 0 },
  { value: 0 }
])

const sectionRef = ref(null)
let observer = null

const startCounting = () => {
  stats.value.forEach((stat, index) => {
    const duration = 2000 // 2 seconds
    const steps = 60
    const stepTime = Math.abs(Math.floor(duration / steps))
    const increment = stat.value / steps
    
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= stat.value) {
        displayStats.value[index].value = stat.value
        clearInterval(timer)
      } else {
        displayStats.value[index].value = Math.floor(current)
      }
    }, stepTime)
  })
}

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      startCounting()
      observer.disconnect()
    }
  }, { threshold: 0.5 })
  
  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<template>
  <div class="stats-section" ref="sectionRef">
    <div class="container">
      <div class="stats-grid">
        <div class="stat-item" v-for="(stat, index) in stats" :key="index">
          <div class="stat-number text-gradient font-bold">
            {{ stat.prefix }}{{ displayStats[index].value }}{{ stat.suffix }}
          </div>
          <div class="stat-label">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.stats-section {
  padding: 4rem 2rem;
  background: rgba(139, 92, 246, 0.03);
  border-top: 1px solid rgba(139, 92, 246, 0.1);
  border-bottom: 1px solid rgba(139, 92, 246, 0.1);
  margin: 4rem 0;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  text-align: center;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.stat-number {
  font-size: 3.5rem;
  line-height: 1.1;
  letter-spacing: -1px;
}

.stat-label {
  color: var(--text-secondary);
  font-size: 1.1rem;
  font-weight: 500;
}

@media (max-width: 900px) {
  .stats-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

@media (max-width: 480px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }
  .stat-number {
    font-size: 3rem;
  }
}
</style>
