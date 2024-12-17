// Select the sections to observe




// /to be deleted
// Select all sections that should be animated
const sections = document.querySelectorAll('.home-section, .about-section, .services-section');

// Function to check if a section is in the viewport
const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return (rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth));
};

// Create the IntersectionObserver to watch these sections
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('rise-up');  // Add the rise-up class to trigger animation
      observer.unobserve(entry.target);       // Stop observing after animation starts
    }
  });
}, { threshold: 0.5 }); // Trigger when 50% of the element is visible in the viewport

// Observe each section
sections.forEach(section => observer.observe(section));

// Manually trigger the animation for sections that are already visible on page load
sections.forEach(section => {
  if (isInViewport(section)) {
    section.classList.add('rise-up');
  }
});
