// object with description for menu items in div.menu
let menuDescription = [
  {
    title: "ADVANCE BOOKING",
    description:
      "There should be a text describing menu item - ADVANCE BOOKING.",
  },
  {
    title: "VARIETY OF STYLES",
    description:
      "There should be a text describing menu item - VARIETY OF STYLES.",
  },
  {
    title: "HUGE PORTFOLIO",
    description:
      "There should be a text describing menu item - HUGE PORTFOLIO.",
  },
  {
    title: "TEAM WORK",
    description: `Our photographers and Videographers are trained to work as one,
        moving simultaneously to get the best coverage possible without
        getting in each others way.`,
  },
  {
    title: "BALLANCED PACKAGE",
    description:
      "There should be a text describing menu item - BALLANCED PACKAGE.",
  },
  {
    title: "SILENT COVERAGE",
    description:
      "There should be a text describing menu item - SILENT COVERAGE.",
  },
  {
    title: "FAST DELIVERY",
    description: "There should be a text describing menu item - FAST DELIVERY.",
  },
];

//function for div #menu from page index.html
//create and render block with description for selectes menu item
function menuHandler(target, arr) {
  const descr = document.querySelector(".menu__item_descr");
  const box = document.querySelector("#menu");
  if (target.classList.contains("menu__item-open")) {
    target.classList.remove("menu__item-open");
    descr.style.display = "none";
  } else {
    let openItem = document.querySelector(".menu__item-open");
    openItem && openItem.classList.remove("menu__item-open");
    target.classList.add("menu__item-open");

    let elemTitle = target.textContent.trim();
    let newTextContent = arr.filter((item) => item.title === elemTitle)[0]
      .description;
    descr.firstElementChild.textContent = newTextContent;
    descr.style.display == "none" && (descr.style.display = "block");

    screenSize === "phone" && (descr.style.top = target.offsetTop + 11 + "px");
  }
}

document.addEventListener("click", function (e) {
  const target = e.target;

  if (target.classList.contains("menu__item")) {
    // page index.html div#menu
    menuHandler(target, menuDescription);
  } else if (target.classList.contains("testemonials__btn")) {
    document.querySelector(".testemonials__options").style.display = "block";
    target.style.display = "none";
    document.querySelector(".testemonials__btn-open").style.display = "block";
  } else if (target.classList.contains("testemonials__btn-open")) {
    document.querySelector(".testemonials__options").style.display = "none";
    target.style.display = "none";
    document.querySelector(".testemonials__btn").style.display = "block";
  }
});

// class for slider
class Slider {
  constructor(
    sliderSelector,
    sliderContainerSelector,
    prevBtnSelector,
    nextBtnSelector,
    shownSlidesNum
  ) {
    this.slider = document.querySelector(sliderSelector);
    this.sliderContainer = document.querySelector(sliderContainerSelector);
    this.nextBtn = document.querySelector(nextBtnSelector);
    this.prevBtn = document.querySelector(prevBtnSelector);
    this.currentSlide = 0;
    this.slides = document.querySelectorAll(
      `${sliderContainerSelector} div`
    ).length;
    this.moveSize = document.querySelector(
      `${sliderContainerSelector} div`
    ).offsetWidth;
    this.addEventListener();
    this.shownSlidesNum = shownSlidesNum;
    this.sliderChildren = document.querySelector(
      sliderContainerSelector
    ).children;
  }
  moveSlides() {
    this.sliderContainer.style.transform = `translateX(-${
      this.currentSlide * this.moveSize
    }px)`;
  }
  showEnd(direction) {
    const that = this;
    switch (direction) {
      case "start":
        for (let i = 0; i < this.shownSlidesNum; i++) {
          this.sliderChildren.item(`${i}`).classList.add("shake");
        }
        setTimeout(function () {
          for (let i = 0; i < that.shownSlidesNum; i++) {
            that.sliderChildren.item(`${i}`).classList.remove("shake");
          }
        }, 1000);
        break;
      case "end":
        for (
          let i = this.slides - 1;
          i > this.slides - this.shownSlidesNum - 1;
          i--
        ) {
          this.sliderChildren.item(`${i}`).classList.add("shake");
        }
        setTimeout(function () {
          for (
            let i = that.slides - 1;
            i > that.slides - that.shownSlidesNum - 1;
            i--
          ) {
            that.sliderChildren.item(`${i}`).classList.remove("shake");
          }
        }, 1000);
        break;
    }
  }
  addEventListener() {
    this.prevBtn.addEventListener("click", (event) => {
      this.currentSlide =
        this.currentSlide <= 0
          ? (this.currentSlide = 0)
          : this.currentSlide - 1;

      this.moveSlides();

      if (this.currentSlide === 0) {
        this.showEnd("start");
      }
    });

    this.nextBtn.addEventListener("click", (event) => {
      this.currentSlide =
        this.currentSlide >= this.slides - this.shownSlidesNum
          ? this.currentSlide
          : this.currentSlide + 1;

      this.moveSlides();

      this.currentSlide >= this.slides - this.shownSlidesNum &&
        this.showEnd("end");
    });
  }
}

//slider for page index.html  div.testemonials__slider
const sl1 = new Slider(
  ".testemonials__slider",
  ".testemonials__slider-container",
  ".opinion__arrow-prev",
  ".opinion__arrow-next",
  `${screenSize === "tablet" ? 1 : 2}`
);
