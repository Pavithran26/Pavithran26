document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.querySelector('.gallery');
    const images = document.querySelectorAll('.gallery img');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const dots = document.querySelectorAll('.dot');
    
    let currentIndex = 0;
    const imageWidth = images[0].clientWidth;
    
    // Set up event listeners
    nextBtn.addEventListener('click', nextImage);
    prevBtn.addEventListener('click', prevImage);
    
    // Add click events to dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToImage(index);
        });
    });
    
    // Auto-rotate (optional)
    let interval = setInterval(nextImage, 5000);
    
    // Pause on hover
    gallery.parentElement.addEventListener('mouseenter', () => {
        clearInterval(interval);
    });
    
    gallery.parentElement.addEventListener('mouseleave', () => {
        interval = setInterval(nextImage, 5000);
    });
    
    // Touch events for mobile swipe
    let touchStartX = 0;
    let touchEndX = 0;
    
    gallery.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, false);
    
    gallery.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, false);
    
    function handleSwipe() {
        if (touchEndX < touchStartX - 50) {
            nextImage(); // Swipe left
        }
        if (touchEndX > touchStartX + 50) {
            prevImage(); // Swipe right
        }
    }
    
    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        updateGallery();
    }
    
    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateGallery();
    }
    
    function goToImage(index) {
        currentIndex = index;
        updateGallery();
    }
    
    function updateGallery() {
        gallery.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
        
        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
});
