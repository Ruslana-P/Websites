// console.log("script general.js works");

// determine the screen size for further use in functions
let screenSize =
  screen.width < 768
    ? "phone"
    : screen.width >= 768 && screen.width < 1440
    ? "tablet"
    : "dekstop";

// overwrite variable 'screenSize' in case of window resizing
onresize = (event) => {
  screenSize =
    screen.width < 768
      ? "phone"
      : screen.width >= 768 && screen.width < 1440
      ? "tablet"
      : "dekstop";
};

// function open mobile navigation - div.nav__list
function onenCloseNav() {
  document.querySelector(".mobile-nav").classList.toggle("nav-close");
}

// function notify for all pages
// show notification when link inactive
function notify(e) {
  console.log("it is");
  e.preventDefault();
  const div = document.createElement("div");
  const span = document.createElement("span");
  span.classList.add("mesgcircle");
  span.textContent =
    "Due to the fact that this a student's portfolio project, this link does not work. Please try another";
  div.classList.add("notify");
  div.appendChild(span);
  document.body.appendChild(div);

  const notifyNode = document.querySelector(".notify");
  setTimeout(() => {
    notifyNode.style.transform = "translateX(0)";
  }, 50);
  setTimeout(() => {
    notifyNode.style.transform = "translateX(-300px)";
  }, 3500);
  setTimeout(() => {
    notifyNode.remove();
  }, 4500);
}

document.addEventListener("click", function (e) {
  const target = e.target;

  if (target.closest(".mobile-nav")) {
    //mobile-nav for all pages
    onenCloseNav();
  }
  if (target.getAttribute("href") === "#") {
    //notification about not working links for all pages
    notify(e);
  }
});
