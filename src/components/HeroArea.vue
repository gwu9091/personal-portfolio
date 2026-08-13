<script setup>
import { onMounted, ref } from 'vue'

const isVisible = ref(false)
const cardRef = ref(null)
const isHovered = ref(false)
const isLeaving = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})

const handleMouseMove = (e) => {
  if (!cardRef.value) return
  isHovered.value = true
  isLeaving.value = false
  
  const card = cardRef.value
  const rect = card.getBoundingClientRect()
  
  // 計算游標相對於卡片左上角的 X, Y
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  
  // 計算旋轉角度 (限制在正負 5 度以內，比較自然)
  const centerX = rect.width / 2
  const centerY = rect.height / 2
  const rotateX = ((y - centerY) / centerY) * -5
  const rotateY = ((x - centerX) / centerX) * 5
  
  // 套用變形與 CSS 變數供光暈使用
  card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  card.style.setProperty('--mouse-x', `${x}px`)
  card.style.setProperty('--mouse-y', `${y}px`)
}

const handleMouseLeave = () => {
  if (!cardRef.value) return
  isHovered.value = false
  isLeaving.value = true
  
  const card = cardRef.value
  // 重置回原狀
  card.style.transform = `perspective(1200px) rotateX(0deg) rotateY(0deg)`
  
  setTimeout(() => {
    isLeaving.value = false
  }, 600)
}
</script>

<template>
  <section class="hero-section" id="home">
    <div class="ambient-light light-1"></div>
    <div class="ambient-light light-2"></div>

    <div class="hero-card-wrapper container">
      <div 
        ref="cardRef"
        class="hero-card" 
        :class="{ 
          'reveal': isVisible, 
          'is-hovered': isHovered, 
          'is-leaving': isLeaving 
        }"
        @mousemove="handleMouseMove"
        @mouseleave="handleMouseLeave"
      >
        
        <!-- 左側：個人資訊區 (對應 Wix 範本的磚紅區塊) -->
        <div class="card-left">
          <div class="avatar-container">
            <!-- 稍後換成你的照片 -->
            <img src="https://ui-avatars.com/api/?name=冠忠&background=8b5cf6&color=fff&size=250" alt="吳冠忠" class="avatar-img" />
          </div>
          <h2 class="name-text">吳冠忠</h2>
          <div class="role-badge">全端開發者</div>
          
          <div class="social-links">
            <a href="https://github.com/gwu9091" target="_blank" class="social-icon">GitHub</a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=gwu9091@gmail.com" target="_blank" class="social-icon">Email</a>
          </div>
        </div>

        <!-- 右側：簡介與行動呼籲 (對應 Wix 範本的白色區塊) -->
        <div class="card-right">
          <h1 class="greeting-text">Hello</h1>
          <h3 class="sub-greeting">尋找正職機會中，隨時準備上工！</h3>
          
          <div class="action-buttons">
            <a href="#resume" class="btn primary-btn">查看履歷</a>
            <a href="#projects" class="btn outline-btn">專案作品</a>
          </div>
          
          <p class="bio-text">
            我是AI系應屆畢業生，熱愛全端系統開發與人工智慧應用。從前端介面到後端資料庫設計，我渴望將創新的想法與扎實的程式技能，帶入充滿活力的團隊，共同創造卓越的數位體驗。
          </p>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 2rem 2rem;
  overflow: hidden;
  background-image: url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(15, 23, 42, 0.75); /* 深色遮罩讓卡片更突出 */
  z-index: 1;
}

/* 氛圍光 */
.ambient-light {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  z-index: 2;
  opacity: 0.4;
  animation: float 15s ease-in-out infinite;
}

.light-1 {
  width: 500px;
  height: 500px;
  background: rgba(139, 92, 246, 0.5);
  top: 10%;
  left: -5%;
}

.light-2 {
  width: 600px;
  height: 600px;
  background: rgba(56, 189, 248, 0.3);
  bottom: 0%;
  right: -10%;
  animation-delay: -7s;
}

@keyframes float {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(30px, -40px); }
}

/* 卡片排版 */
.hero-card-wrapper {
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 950px;
}

.hero-card {
  display: flex;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  z-index: 10;
  
  transform: translateY(50px);
  opacity: 0;
  transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1);
  transform-style: preserve-3d;
}

/* 隨著游標移動時的發光效果 (內部光暈) */
.hero-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background: radial-gradient(
    800px circle at var(--mouse-x) var(--mouse-y),
    rgba(255, 255, 255, 0.15),
    transparent 40%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 100;
  mix-blend-mode: overlay;
}

/* 隨著游標移動時的邊框追蹤發光效果 (動態邊框) */
.hero-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 2px; /* 邊框寬度 */
  background: radial-gradient(
    400px circle at var(--mouse-x) var(--mouse-y),
    rgba(255, 255, 255, 0.8),
    transparent 40%
  );
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
          mask-composite: exclude;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 101;
}

@media (hover: hover) and (pointer: fine) {
  .hero-card.is-hovered::after,
  .hero-card.is-hovered::before {
    opacity: 1;
  }
}

.hero-card.reveal {
  transform: perspective(1200px) rotateX(0deg) rotateY(0deg) translateY(0);
  opacity: 1;
}

/* 滑鼠進入後，將 transition 縮短以即時跟隨游標 */
@media (hover: hover) and (pointer: fine) {
  .hero-card.is-hovered {
    transition: transform 0.1s ease-out;
  }
}

/* 滑鼠離開時，緩慢彈回原位 */
.hero-card.is-leaving {
  transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
}

/* 左側區塊 */
.card-left {
  flex: 0 0 40%;
  background: var(--accent-gradient, linear-gradient(135deg, #8b5cf6, #3b82f6));
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
}

.avatar-container {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  margin-bottom: 2rem;
  padding: 4px;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
}

.avatar-img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #fff;
}

.name-text {
  font-size: 2.2rem;
  font-weight: 800;
  letter-spacing: 2px;
  margin-bottom: 0.5rem;
}

.role-badge {
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 1px;
  background: rgba(255, 255, 255, 0.15);
  padding: 0.4rem 1.5rem;
  border-radius: 999px;
  margin-bottom: auto;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.social-links {
  margin-top: 3rem;
  display: flex;
  gap: 1.5rem;
}

.social-icon {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
  transition: color 0.3s;
}

.social-icon:hover {
  color: white;
}

/* 右側區塊 */
.card-right {
  flex: 0 0 60%;
  padding: 4rem 3.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
}

.greeting-text {
  font-size: 5rem;
  font-weight: 800;
  line-height: 1;
  letter-spacing: -2px;
  color: #0f172a;
  margin-bottom: 1rem;
}

.sub-greeting {
  font-size: 1.25rem;
  font-weight: 600;
  color: #334155;
  margin-bottom: 2.5rem;
}

.action-buttons {
  display: flex;
  gap: 1rem;
  margin-bottom: 2.5rem;
}

.btn {
  padding: 0.8rem 2.5rem;
  font-size: 1.1rem;
  border-radius: 999px;
  font-weight: 600;
  transition: all 0.3s ease;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
}

.primary-btn {
  background: var(--accent-color, #8b5cf6);
  color: white;
  border: none;
  box-shadow: 0 10px 20px rgba(139, 92, 246, 0.3);
}

.primary-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 15px 25px rgba(139, 92, 246, 0.5);
}

.outline-btn {
  background: transparent;
  border: 2px solid #0f172a;
  color: #0f172a;
}

.outline-btn:hover {
  background: #0f172a;
  color: #ffffff;
  transform: translateY(-2px);
}

.bio-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #000000;
  font-weight: 500;
}

/* 響應式設計 */
@media (max-width: 992px) {
  .hero-card {
    flex-direction: column;
  }
  
  .card-left {
    padding: 3rem 2rem;
  }
  
  .role-badge {
    margin-bottom: 2rem;
  }
  
  .social-links {
    margin-top: 0;
  }
  
  .card-right {
    padding: 3rem 2rem;
    text-align: center;
  }
  
  .action-buttons {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .greeting-text {
    font-size: 3.5rem;
  }
  
  .action-buttons {
    flex-direction: column;
    gap: 1rem;
  }
  
  .btn {
    width: 100%;
  }
}
</style>
