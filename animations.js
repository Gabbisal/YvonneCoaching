/**
 * Scroll Animations för YvonneCoaching
 * Detekterar när element kommer in i viewport och animerar dem
 */

// Vänta tills DOM är laddad
document.addEventListener('DOMContentLoaded', function() {

  // Intersection Observer för scroll-animationer
  const observerOptions = {
    threshold: 0.15, // Trigga när 15% av elementet är synligt
    rootMargin: '0px 0px -50px 0px' // Trigga lite tidigare
  };

  // Callback när element kommer in i vy
  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Lägg till animation-klass när elementet är synligt
        entry.target.classList.add('animate-in');

        // Sluta observera när animationen är triggad (prestanda)
        observer.unobserve(entry.target);
      }
    });
  };

  // Skapa observern
  const observer = new IntersectionObserver(observerCallback, observerOptions);

  // Hitta alla element som ska animeras
  const animateElements = document.querySelectorAll('.animate-on-scroll');

  // Börja observera varje element
  animateElements.forEach(element => {
    observer.observe(element);
  });

  // Animera hero-innehåll vid sidladdning
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    // Kort delay för att säkerställa att sidan är laddad
    setTimeout(() => {
      heroContent.classList.add('animate-hero');
    }, 100);
  }
});
