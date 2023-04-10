// function open momile navigation - div.nav__list
function onenCloseNav() {
  document.querySelector(".mobile-nav").classList.toggle("nav-close");
}

// object with description for menu items in div.menu
let menuDescription = [
  {
    title: "ADVANCE BOOKING",
    description: "There should be a text describing this menu item.",
  },
  {
    title: "VARIETY OF STYLES",
    description: "There should be a text describing this menu item.",
  },
  {
    title: "HUGE PORTFOLIO",
    description: "There should be a text describing this menu item.",
  },
  {
    title: "TEAM WORK ",
    description: `Our photographers and Videographers are trained to work as one,
      moving simultaneously to get the best coverage possible without 
      getting in each others way.`,
  },
  {
    title: "BALLANCED PACKAGE",
    description: "There should be a text describing this menu item.",
  },
  {
    title: "SILENT COVERAGEG",
    description: "There should be a text describing this menu item.",
  },
  {
    title: "FAST DELIVERY",
    description: "There should be a text describing this menu item.",
  },
];
//function create and render block with description for selectes menu item
function menuHandler(target, arr) {
  const descr = document.querySelector(".menu__item_descr");
  const box = document.querySelector("#menu");
  if (target.classList.contains("menu__item-open")) {
    target.classList.remove("menu__item-open");
    descr.remove();
  } else {
    if (document.querySelector(".menu__item-open")) {
      document
        .querySelector(".menu__item-open")
        .classList.remove("menu__item-open");
      descr.remove();
    }

    let elem = document.createElement("div");
    elem.classList.add("menu__item_descr");

    const menuItemTitle = target.textContent;

    let newTextContent = arr.filter((item) => item.title === menuItemTitle)[0]
      .description;
    elem.textContent = newTextContent;

    box.appendChild(elem);
    target.classList.add("menu__item-open");
  }
}

document.addEventListener("click", function ({ target }) {
  if (target.closest(".mobile-nav")) {
    onenCloseNav();
  } else if (target.classList.contains("menu__item")) {
    menuHandler(target, menuDescription);
  }
});
