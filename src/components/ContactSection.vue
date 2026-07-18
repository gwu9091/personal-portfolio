<script setup>
</script>

<template>
  <section class="contact-section container" id="contact">
    <div class="contact-card glass-panel">
      <div class="contact-info" v-slide-in="'left'">
        <h2 class="title">聯絡 <span class="text-gradient">我</span></h2>
        <p class="subtitle">
          對我有興趣，或是單純想打個招呼嗎？歡迎透過表單或直接寄信到<br>
          <a href="mailto:gwu9091@gmail.com" class="text-gradient" style="font-weight: 600; display: inline-block; margin-top: 0.5rem;">gwu9091@gmail.com</a>
        </p>
        
        <div class="social-links">
          <a href="#" class="social-icon">GitHub</a>
          <a href="#" class="social-icon">LinkedIn</a>
          <a href="#" class="social-icon">Twitter</a>
        </div>
      </div>
      
      <form class="contact-form" action="https://api.web3forms.com/submit" method="POST" v-slide-in="'right'">
        <input type="hidden" name="access_key" value="d2081c27-c3d9-4cac-afb7-a780f4ad3451">
        
        <div class="form-group">
          <label for="name">姓名(公司名稱)</label>
          <input type="text" id="name" name="姓名" placeholder="王小明" class="glass-input" required />
        </div>
        
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" name="信箱" placeholder="wang@example.com" class="glass-input" required />
        </div>
        
        <div class="form-group">
          <label for="message">訊息</label>
          <textarea id="message" name="訊息" rows="4" placeholder="有什麼我可以幫忙的嗎？" class="glass-input" required></textarea>
        </div>
        
        <button type="submit" class="btn btn-primary submit-btn">傳送訊息</button>
      </form>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  padding: 8rem 2rem 4rem;
}

.contact-card {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 4rem;
  padding: 4rem;
  align-items: center;
}

.contact-info {
  display: flex;
  flex-direction: column;
}

.title {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  line-height: 1.1;
}

.subtitle {
  color: var(--text-secondary);
  font-size: 1.15rem;
  margin-bottom: 2.5rem;
  line-height: 1.6;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-icon {
  padding: 0.5rem 1rem;
  background: var(--surface-color);
  border: 1px solid var(--surface-border);
  border-radius: 99px;
  color: var(--text-primary);
  font-weight: 500;
  transition: all var(--transition-fast);
}

.social-icon:hover {
  border-color: var(--accent-color);
  background: var(--surface-color-hover);
  color: var(--accent-color-hover);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

label {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-secondary);
}

.glass-input {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--surface-border);
  border-radius: 8px;
  padding: 1rem;
  color: var(--text-primary);
  font-family: inherit;
  font-size: 1rem;
  transition: border-color var(--transition-fast), background var(--transition-fast);
  outline: none;
}

.glass-input:focus {
  border-color: var(--accent-color);
  background: rgba(255, 255, 255, 0.05);
}

.submit-btn {
  margin-top: 1rem;
  width: 100%;
}

@media (max-width: 900px) {
  .contact-card {
    grid-template-columns: 1fr;
    padding: 2.5rem;
    gap: 3rem;
  }
}
</style>
