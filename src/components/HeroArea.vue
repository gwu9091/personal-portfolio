<script setup>
import { onMounted, ref } from 'vue'

const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})
</script>

<template>
  <section class="hero-section container" id="home">
    <div class="glow-orb orb-1"></div>
    <div class="glow-orb orb-2"></div>
    
    <div class="hero-content" :class="{ 'fade-in': isVisible }">
      <div class="badge glass-panel">
        <span class="pulse-dot"></span> 尋找正職機會中
      </div>
      <h1 class="title">
        哈囉！我是一名 <span class="text-gradient animated-gradient">熱血開發者</span><br/>
        準備好學習與貢獻
      </h1>
      <p class="subtitle">
        我是AI系應屆畢業生，對於全端開發與人工智慧應用有濃厚的熱情與興趣，渴望將創新的想法與扎實的程式技能帶入充滿活力的團隊。
      </p>
      
      <div class="cta-actions">
        <a href="#projects" class="btn btn-primary">查看作品</a>
        <a href="#about" class="btn btn-outline">關於我</a>
      </div>
    </div>
    
    <!-- Decorative 3D element placeholder or code snippet illustration -->
    <div class="hero-visual-wrapper floating-element">
      <div class="hero-visual glass-panel" :class="{ 'slide-up': isVisible }">
        <div class="code-header">
          <span class="dot red"></span>
          <span class="dot yellow"></span>
          <span class="dot green"></span>
        </div>
        <pre><code><span class="keyword">const</span> developer <span class="operator">=</span> {
  name: <span class="string">'冠忠'</span>,
  skills: [<span class="string">'Vue 3'</span>, <span class="string">'Laravel'</span>, <span class="string">'AI Tools'</span>],
  status: <span class="string">'隨時準備上工！'</span>
};

developer.startJourney(); <span class="comment">// 讓我們一起創造驚豔的作品！</span></code></pre>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
  padding-top: 6rem; /* Account for fixed header */
  position: relative;
}

.glow-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  z-index: -1;
  opacity: 0.5;
}

.orb-1 {
  width: 400px;
  height: 400px;
  background: rgba(139, 92, 246, 0.4);
  top: 10%;
  left: -100px;
  animation: floatOrb1 15s ease-in-out infinite;
}

.orb-2 {
  width: 300px;
  height: 300px;
  background: rgba(59, 130, 246, 0.4);
  bottom: 20%;
  right: -50px;
  animation: floatOrb2 12s ease-in-out infinite;
}

@keyframes floatOrb1 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(50px, 30px) scale(1.1); }
}

@keyframes floatOrb2 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(-30px, -50px) scale(0.9); }
}

.floating-element {
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

.hero-content {
  flex: 1;
  max-width: 600px;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 1s ease, transform 1s ease;
}

.hero-content.fade-in {
  opacity: 1;
  transform: translateY(0);
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--text-secondary);
  margin-bottom: 2rem;
}

.pulse-dot {
  width: 8px;
  height: 8px;
  background-color: #10b981;
  border-radius: 50%;
  box-shadow: 0 0 10px #10b981;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
  70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(16, 185, 129, 0); }
  100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
}

.title {
  font-size: 4rem;
  letter-spacing: -1.5px;
  margin-bottom: 1.5rem;
}

.animated-gradient {
  background-size: 200% auto;
  animation: gradient-shift 4s linear infinite;
}

@keyframes gradient-shift {
  to { background-position: 200% center; }
}

.subtitle {
  font-size: 1.15rem;
  color: var(--text-secondary);
  margin-bottom: 2.5rem;
  max-width: 500px;
}

.cta-actions {
  display: flex;
  gap: 1rem;
}

.hero-visual {
  flex: 1;
  max-width: 500px;
  padding: 1.5rem;
  background: rgba(15, 23, 42, 0.6);
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 1s ease 0.3s, transform 1s ease 0.3s;
}

.hero-visual.slide-up {
  opacity: 1;
  transform: translateY(0);
}

.code-header {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--surface-border);
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}
.dot.red { background: #ff5f56; }
.dot.yellow { background: #ffbd2e; }
.dot.green { background: #27c93f; }

pre {
  font-family: 'Fira Code', monospace;
  font-size: 0.95rem;
  overflow-x: auto;
}

code {
  color: var(--text-primary);
}
.keyword { color: #c678dd; }
.string { color: #98c379; }
.operator { color: #56b6c2; }
.comment { color: #5c6370; font-style: italic; }

@media (max-width: 992px) {
  .hero-section {
    flex-direction: column;
    text-align: center;
    padding-top: 8rem;
  }
  
  .hero-content {
    margin: 0 auto;
    align-items: center;
    display: flex;
    flex-direction: column;
  }
  
  .title {
    font-size: 3rem;
  }
}
</style>
