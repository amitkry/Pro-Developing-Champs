// Select the sections to observe
const sections = document.querySelectorAll('.home-section, .about-section, .services-section');

// Create the IntersectionObserver with a callback function
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('rise-up');  // Trigger the animation by adding class
      observer.unobserve(entry.target);       // Stop observing after animation starts
    }
  });
}, { threshold: 0.5 }); // Trigger when 50% of the element is visible in the viewport

// Observe each section
sections.forEach(section => observer.observe(section));
