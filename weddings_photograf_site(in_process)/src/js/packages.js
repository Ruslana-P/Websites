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
const packagesSlider = new Slider(
  ".offers__slider",
  ".offers__sl-container",
  ".offers__arrow-prev",
  ".offer__arrow-next",
  `${screenSize === "phone" ? 1 : screenSize === "tablet" ? 2 : 4}`
);
