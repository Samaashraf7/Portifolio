
function animateOnScroll() {
  const windowHeight = window.innerHeight;
  const offset = 100;

  const animate = document.querySelectorAll(".animate");
  const animateLeft = document.querySelectorAll(".animateLeft");

  function toggleShowClass(elements) {
    elements.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight - offset) {
        el.classList.add("show");
      } else {
        el.classList.remove("show");
      }
    });
  }

  toggleShowClass(animate);
  toggleShowClass(animateLeft);
}

window.addEventListener("scroll", animateOnScroll);
window.addEventListener("load", animateOnScroll);

//faq script
const q = document.querySelectorAll('.q');
const a = document.querySelectorAll('.a');
const arr = document.querySelectorAll('.arrow');

for(let i = 0; i < q.length; i++) {
  q[i].addEventListener('click', () => {

    a[i].classList.toggle('a-opened');
    arr[i].classList.toggle('arrow-rotated');

  });
}
