// array with offers
let offers = [
  {
    title: "Подорож яхтою поблизу Одеси",
    type: "yacht",
    price: 400,
    place: "odesa",
    duration: 4,
  },
  {
    title: "Автобусний тур до Києва",
    type: "bus",
    price: 900,
    place: "kiev",
    duration: 24,
  },
  {
    title: "Поїздки джипами поблизу Харкова",
    type: "jeep",
    price: 600,
    place: "kharkiv",
    duration: 3,
  },
  {
    title: "Автобусний тур до Мукачева",
    type: "bus",
    price: 750,
    place: "karpaty",
    duration: 18,
  },
  {
    title: "Каньйонінг поблизу Івано-Франківськ",
    type: "canyon",
    price: 700,
    place: "iv-fran",
    duration: 8,
  },
];

let renderedOffers = [...offers];

// function for rendering elements
function render(arr, el) {
  el.innerHTML = arr
    .map((item) => {
      return `<div class="tour">
            <h3 class="tour-title">${item.title}</h3>
            <span class="tour-dur">${item.duration} годин</span>
            <span class="tour-price">${item.price}</span>
        </div>`;
    })
    .join("");
}

//render elements on page load
const tours = document.getElementById("chosen-tours");
render(offers, tours);

// add event listener to first sorting block - block (.options)
const options = document.querySelector(".options");
options.addEventListener("change", function (event) {
  let value = event.target.value;
  if (value === "all") {
    render(offers, tours);
    renderedOffers = [...offers];
  } else {
    let sortedArray = offers.filter((item) => item.type === value);
    renderedOffers = [...sortedArray];
    console.log(renderedOffers);
    render(sortedArray, tours);
  }
});

//add event listener to block (.filters)
const filter = document.querySelector(".form-filters");
filter.addEventListener("click", function (e) {
  const target = e.target;
  const filters = document.querySelector(".filters");
  if (target.classList.contains("more-filters")) {
    filters.classList.toggle("filters-close");
    target.classList.toggle("up");
  } else if (
    target.classList.contains("filter-header") ||
    target.closest(".filter-header")
  ) {
    const element = target.closest(".filter");
    element.classList.contains("close")
      ? element.classList.replace("close", "open")
      : element.classList.replace("open", "close");
  } else if (target.classList.contains("btn-filter")) {
    const form = document.querySelector(".form-filters");
    formValidation(e, form) && sortOffers(e);
  }
});

function sortOffers(event) {
  event.preventDefault();
  // find values for price
  const minPrice = document.querySelector("#money1").value;
  const maxPrice = document.querySelector("#money2").value;

  //find value for place
  const radioValues = document.querySelectorAll('input[name="place"]');
  let place = "";
  for (let i = 0; i < radioValues.length; i++) {
    if (radioValues[i].checked) {
      place = radioValues[i].value;
    }
  }

  // find valur for duration
  const minDur = +document.querySelector("#hour1").value;
  const maxDur = +document.querySelector("#hour2").value;

  // sort and render offers
  const result = renderedOffers.filter((item) => {
    return (
      item.price >= minPrice &&
      item.price <= maxPrice &&
      (item.place === place || place === "all-regions") &&
      item.duration >= minDur &&
      item.duration <= maxDur
    );
  });
  render(result, tours);
}

// function check if all inputs are valid and returns true or false
function formValidation(event, form) {
  event.preventDefault();
  const elements = form.elements;
  let result = true;
  for (el of elements) {
    if (!el.checkValidity()) {
      result = false;
      el.parentElement.classList.add("non-valid");
      el.addEventListener("input", function remove(e) {
        e.target.parentElement.classList.remove("non-valid");
        e.target.removeEventListener("input", remove);
      });
    }
  }
  return result;
}

// make inputs defauls values on page reload
document.onReload = document.querySelector(".btn-reset").click();

// code for menu-burger - element '.burger-menu'
const burger = document.querySelector(".menu-burger");

burger.addEventListener("click", function () {
  burger.classList.toggle("close-burger");
});

// code for slider for node with class 'excursions__cards'
$(".excursions__cards").slick({
  dots: true,
  appendDots: ".slider-dots",
  dotsClass: "dots-list",
  centerMode: true,
  infinite: true,
  variableWidth: true,
  speed: 400,
  arrows: true,
  appendArrows: ".slider-arrows",
  nextArrow:
    '<span class="slider-arrow arrow-left"><svg width="25" height="45" viewBox="0 0 25 45" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
    '<path d="M1 0.999998L22.5057 20.2655C23.8367 21.4579 23.8367 23.5421 22.5057 24.7345L0.999998 44" stroke="#0499DD" stroke-width="2"/>\n' +
    "</svg></span>",
  prevArrow:
    '<span class="slider-arrow arrow-right"><svg width="25" height="45" viewBox="0 0 25 45" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
    '<path d="M24 0.999998L2.49433 20.2655C1.16332 21.4579 1.16333 23.5421 2.49433 24.7345L24 44" stroke="#0499DD" stroke-width="2"/>\n' +
    "</svg>\n</span>",
  responsive: [
    {
      breakpoint: 756,
      settings: {
        arrows: false,
      },
    },
  ],
});

// function for sending emails via emaiJS service
function sendEmail() {
  let parameters = {
    name: document.querySelector("#user-name").value,
    phone: document.querySelector("#user-phone").value,
    mail: document.querySelector("#user-mail").value,
  };
  const serviseID = "service_aq91ul1";
  const templateID = "template_5x3s086";

  emailjs
    .send(serviseID, templateID, parameters)
    .then((res) => {
      document.querySelector("#user-name").value = "";
      document.querySelector("#user-phone").value = "";
      document.querySelector("#user-mail").value = "";
    })
    .catch((err) => console.log(err));
}

// add form validation and function send email from form ".question-form__submit"
document
  .querySelector(".question-form__submit")
  .addEventListener("click", (e) => {
    const form = document.querySelector(".question-form");
    if (formValidation(e, form)) {
      sendEmail();
      const msg =
        "Ваше повідомлення вислано. Наш прaцівник сконтактується з Вами в найближчому часі.";
      const el = document.querySelector(".form-container");
      showNotify(msg, el);
    }
  });

function showNotify(msg, el) {
  const div = document.createElement("div");
  div.classList.add("message");
  div.textContent = msg;
  el.appendChild(div);
  const divNode = document.querySelector(".message");
  setTimeout(() => (divNode.style.opacity = "1"), 200);
  setTimeout(() => (divNode.style.opacity = "0"), 3000);
  setTimeout(() => el.removeChild(divNode), 4000);
}
