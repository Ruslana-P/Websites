// class for slider width dots and buttons
class SliderWithDots {
  constructor(
    sliderSelector,
    sliderContainerSelector,
    prevBtnSelector,
    nextBtnSelector,
    bottomsSelector,
    shownSlidesNum
  ) {
    this.slider = document.querySelector(sliderSelector);
    this.sliderContainer = document.querySelector(sliderContainerSelector);
    this.nextBtn = document.querySelector(nextBtnSelector);
    this.prevBtn = document.querySelector(prevBtnSelector);
    this.currentSlide = 0;
    this.bottoms = document.querySelector(bottomsSelector);
    this.bottoms.items = document.querySelectorAll(`${bottomsSelector} div`);
    this.currentBottom = 0;
    this.slides = document.querySelector(
      sliderContainerSelector
    ).children.length;
    this.moveSize = document.querySelector(
      `${sliderContainerSelector} div`
    ).offsetWidth;
    this.addEventListener();
    this.shownSlidesNum = shownSlidesNum;
    this.sliderChildren = document.querySelector(
      sliderContainerSelector
    ).children;
  }
  moveSlides(num) {
    if (num) {
      this.sliderContainer.style.transform = `translateX(-${
        num * this.moveSize
      }px)`;
      this.bottoms.items[this.currentBottom].classList.remove(
        "i-w-slider__bottom-act"
      );
      this.currentSlide = num;
      this.currentBottom = num;
      this.bottoms.items[this.currentBottom].classList.add(
        "i-w-slider__bottom-act"
      );
    }

    this.sliderContainer.style.transform = `translateX(-${
      this.currentSlide * this.moveSize
    }px)`;

    this.bottoms.items[this.currentBottom].classList.remove(
      "i-w-slider__bottom-act"
    );
    this.currentBottom = this.currentSlide;
    this.bottoms.items[this.currentBottom].classList.add(
      "i-w-slider__bottom-act"
    );
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
      console.log(this.currentSlide);
      console.log(this.slides);
      this.currentSlide =
        this.currentSlide >= this.slides - this.shownSlidesNum
          ? this.currentSlide
          : this.currentSlide + 1;

      this.moveSlides();

      this.currentSlide >= this.slides - this.shownSlidesNum &&
        this.showEnd("end");
    });
    this.bottoms.addEventListener("click", (event) => {
      const num = event.target.dataset.id;
      this.moveSlides(num);
    });
  }
}
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

const sl3 = new SliderWithDots(
  ".i-w-slider",
  ".i-w-slider__container",
  ".i-w-slider__arrow-l",
  ".i-w-slider__arrow-r",
  ".i-w-slider__bottoms",
  1
);

document.querySelector(".i-w-box__btn").addEventListener("click", (e) => {
  document
    .querySelector(".i-w-box__text")
    .classList.toggle("i-w-box__text-open");
  console.log(document.querySelector(".i-w-box__text"));
  console.log(
    document
      .querySelector(".i-w-box__text")
      .classList.contains("i-w-box__text-open")
  );
  const newText = document
    .querySelector(".i-w-box__text")
    .classList.contains("i-w-box__text-open")
    ? "read less"
    : "read more";
  e.target.textContent = newText;
});

const sl4 = new Slider(
  ".i-w-review__boxes",
  ".i-w-review__container",
  ".i-w-review__arrow-l",
  ".i-w-review__arrow-r",
  `${screenSize === "phone" ? 1 : screenSize === "tablet" ? 2 : 4}`
);
