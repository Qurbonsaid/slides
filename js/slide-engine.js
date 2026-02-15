/**
 * Slide Engine - Lightweight presentation navigation system
 * Features: click/keyboard/swipe navigation, progress tracking, fullscreen support
 */

class SlideEngine {
  constructor() {
    this.slides = document.querySelectorAll('.slide');
    this.currentSlide = 0;
    this.totalSlides = this.slides.length;
    this.touchStartX = 0;
    this.touchEndX = 0;
    this.hasInteracted = false;
    
    this.init();
  }
  
  init() {
    if (this.totalSlides === 0) return;
    
    // Show first slide
    this.slides[0].classList.add('active');
    
    // Setup event listeners
    this.setupClickNavigation();
    this.setupKeyboardNavigation();
    this.setupTouchNavigation();
    this.setupFullscreenButton();
    
    // Update UI
    this.updateProgress();
    this.updateCounter();
  }
  
  setupClickNavigation() {
    document.addEventListener('click', (e) => {
      // Ignore clicks on fullscreen button
      if (e.target.closest('.fullscreen-btn')) return;
      
      this.hideClickHint();
      this.nextSlide();
    });
  }
  
  setupKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        this.hideClickHint();
        this.nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        this.hideClickHint();
        this.prevSlide();
      }
    });
  }
  
  setupTouchNavigation() {
    document.addEventListener('touchstart', (e) => {
      this.touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    document.addEventListener('touchend', (e) => {
      this.touchEndX = e.changedTouches[0].screenX;
      this.handleSwipe();
    }, { passive: true });
  }
  
  handleSwipe() {
    const swipeThreshold = 50;
    const diff = this.touchStartX - this.touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
      this.hideClickHint();
      if (diff > 0) {
        this.nextSlide();
      } else {
        this.prevSlide();
      }
    }
  }
  
  setupFullscreenButton() {
    const fullscreenBtn = document.querySelector('.fullscreen-btn');
    if (!fullscreenBtn) return;
    
    fullscreenBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.toggleFullscreen();
    });
    
    // Update icon on fullscreen change
    document.addEventListener('fullscreenchange', () => {
      this.updateFullscreenIcon();
    });
  }
  
  toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.log('Fullscreen error:', err);
      });
    } else {
      document.exitFullscreen();
    }
  }
  
  updateFullscreenIcon() {
    const icon = document.querySelector('.fullscreen-btn svg use');
    if (!icon) return;
    
    if (document.fullscreenElement) {
      icon.setAttribute('xlink:href', '#icon-collapse');
    } else {
      icon.setAttribute('xlink:href', '#icon-expand');
    }
  }
  
  nextSlide() {
    const next = (this.currentSlide + 1) % this.totalSlides;
    this.goToSlide(next);
  }
  
  prevSlide() {
    const prev = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
    this.goToSlide(prev);
  }
  
  goToSlide(index) {
    if (index === this.currentSlide) return;
    
    // Exit current slide
    this.slides[this.currentSlide].classList.add('exit');
    this.slides[this.currentSlide].classList.remove('active');
    
    // Enter new slide
    setTimeout(() => {
      this.slides[this.currentSlide].classList.remove('exit');
      this.slides[index].classList.add('active');
      this.currentSlide = index;
      
      this.updateProgress();
      this.updateCounter();
    }, 50);
  }
  
  updateProgress() {
    const progressBar = document.querySelector('.progress-bar');
    if (progressBar) {
      const progress = ((this.currentSlide + 1) / this.totalSlides) * 100;
      progressBar.style.width = `${progress}%`;
    }
  }
  
  updateCounter() {
    const counter = document.querySelector('.slide-counter');
    if (counter) {
      counter.textContent = `${this.currentSlide + 1} / ${this.totalSlides}`;
    }
  }
  
  hideClickHint() {
    if (!this.hasInteracted) {
      const hint = document.querySelector('.click-hint');
      if (hint) {
        hint.style.opacity = '0';
        setTimeout(() => {
          hint.style.display = 'none';
        }, 300);
      }
      this.hasInteracted = true;
    }
  }
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => new SlideEngine());
} else {
  new SlideEngine();
}
