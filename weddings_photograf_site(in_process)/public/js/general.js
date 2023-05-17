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
// function notify(e, target) {
//   e.preventDefault();
//   const div = document.createElement("div");
//   const span = document.createElement("span");
//   span.classList.add("mesgcircle");
//   span.textContent =
//     "Due to the fact that this is not a real commercial project, but a student project, this link does not work. Please try another";
//   div.classList.add("notify");
//   div.appendChild(span);
//   document.body.appendChild(div);

//   setTimeout(() => {
//     document.querySelector(".notify").top = "0";
//   }, 50);
// }

document.addEventListener("click", function (e) {
  const target = e.target;

  if (target.closest(".mobile-nav")) {
    //mobile-nav for all pages
    onenCloseNav();
  }

  // else if (target.classList.contains("menu__item")) {
  //   // page index.html div#menu
  //   menuHandler(target, menuDescription);
  //   // } else if (target.getAttribute("href") === "#") {
  //   //   console.log("works");
  //   //   notify(e, target);
  // } else if (target.classList.contains("testemonials__btn")) {
  //   document.querySelector(".testemonials__options").style.display = "block";
  //   target.style.display = "none";
  //   document.querySelector(".testemonials__btn-open").style.display = "block";
  // } else if (target.classList.contains("testemonials__btn-open")) {
  //   document.querySelector(".testemonials__options").style.display = "none";
  //   target.style.display = "none";
  //   document.querySelector(".testemonials__btn").style.display = "block";
  // }
});
