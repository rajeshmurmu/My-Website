window.onscroll = function () {
  scrollFunction();
};
// document.documentElement.addEventListener("wheel", scrollFunction);
function scrollFunction() {
  if (document.documentElement.scrollTop > 800) {
    document.getElementById("nav").classList.remove("md:bg-transparent");
  } else {
    document.getElementById("nav").classList.add("md:bg-transparent");
  }
}

const menu = document.getElementById("menu");
const hamburger = document.getElementById("hamburger");

const toggleMenu = (event) => {
  menu.classList.toggle("translate-x-full");
};
// hamburger.addEventListener('click', toggleMenu);

window.addEventListener("click", (e) => {
  // console.log(e.target.id)
  if (e.target.id === "hamburger") {
    toggleMenu();
  } else {
    menu.classList.add("translate-x-full");
  }
});
