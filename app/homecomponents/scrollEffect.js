// Add this to your component's useEffect or to a separate JS file
document.addEventListener('DOMContentLoaded', () => {
  const words = document.querySelectorAll('.scroll-text-word');
  
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  };
  
  const wordObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // When word is in view
      if (entry.isIntersecting) {
        entry.target.classList.remove('text-blue-200');
        entry.target.classList.add('text-white');
      } else {
        entry.target.classList.remove('text-white');
        entry.target.classList.add('text-blue-200');
      }
    });
  }, observerOptions);
  
  words.forEach(word => {
    wordObserver.observe(word);
  });
});