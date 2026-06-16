import { createApp } from 'vue'
import './styles/index.css'
import App from './App.vue'

const app = createApp(App)

app.directive('slide-in', {
  mounted(el, binding) {
    el.classList.add('slide-hidden');
    
    const direction = binding.value || binding.arg || 'up';
    
    if (direction === 'left') {
      el.classList.add('slide-left');
    } else if (direction === 'right') {
      el.classList.add('slide-right');
    } else {
      el.classList.add('slide-up');
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          el.classList.add('slide-visible');
          observer.unobserve(el);
        }
      })
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    });
    
    observer.observe(el);
  }
})

app.mount('#app')
