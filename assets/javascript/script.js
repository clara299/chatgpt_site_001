// Select all timber links
// const timberLinks = document.querySelectorAll('.material-link');

console.log('test');

window.addEventListener('load', function() {
    const materialLinks = document.querySelectorAll('.material-link');
    const timberPopup = document.querySelector('.timber-popup');
    const closeBtn = document.querySelector('.close-btn');
  
    materialLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        timberPopup.style.display = 'block';
      });
    });
  
    closeBtn.addEventListener('click', function() {
      timberPopup.style.display = 'none';
    });
  });
  