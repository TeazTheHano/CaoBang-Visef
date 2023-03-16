document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav ul li a");
  const tabPanes = document.querySelectorAll(".tab-pane");
  // make tab1 active by default
  document.querySelector("#tab1").classList.add("active");
  navLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = this.getAttribute("href");

      navLinks.forEach(function (link) {
        link.classList.remove("active");
        link.classList.add("inActive");
      });

      tabPanes.forEach(function (pane) {
        pane.classList.remove("active");
        link.classList.add("inActive");
      });

      this.classList.add("active");
      document.querySelector(target).classList.add("active");
      this.classList.remove("inActive")
      document.querySelector(target).classList.remove("inActive");
    });
  });
});

const post = document.querySelector('.post');
const postNav = document.querySelector('#postNav');
const postNavExit = document.querySelector('#postNavExit');
const postNavBackground = document.querySelector('#postNavBackground');

post.addEventListener('click', () => {
  post.setAttribute('title', 'nowActive');
  postNav.setAttribute('title', 'nowActive');
});

postNavExit.addEventListener('click', () => {
  post.removeAttribute('title');
  postNav.removeAttribute('title');
});

postNavBackground.addEventListener('click', () => {
  post.removeAttribute('title');
  postNav.removeAttribute('title');
});