const aboutMeDiv = document.querySelector('.About-Me');
let scrolledPastInitial = false;

window.addEventListener('scroll', () => {
  console.log('Scroll event fired. window.scrollY:', window.scrollY);
  if (!scrolledPastInitial && window.scrollY > 0) {
    console.log('yre - Condition met!');
    scrolledPastInitial = true;
    document.body.style.overflowY = 'auto'; // Enable vertical scrolling
    aboutMeDiv.classList.toggle('visible'); // Use toggleClass for About Me
  }
});