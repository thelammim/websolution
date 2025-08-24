// Example: Alert on Get Started click
document.addEventListener('DOMContentLoaded', function () {
  const getStartedBtn = document.querySelector('a[href="#about"]');
  if (getStartedBtn) {
    getStartedBtn.addEventListener('click', function (e) {
      e.preventDefault(); // prevent jump
      alert('You clicked Get Started!');
    });
  }

  // Optional: Add click to "Types of Courses"
  const coursesTitle = document.querySelector('h2 span');
  const services = document.querySelector('.services-container');
  if (coursesTitle && services) {
    coursesTitle.style.cursor = 'pointer';
    coursesTitle.addEventListener('click', function () {
      services.style.display = services.style.display === 'none' ? 'flex' : 'none';
    });
  }
});
