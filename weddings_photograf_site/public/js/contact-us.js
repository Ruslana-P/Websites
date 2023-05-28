let validation = true;

//function validate form
function formValidation(form) {
  const inputs = form.querySelectorAll("input");
  const textareas = form.querySelectorAll("textarea");
  const selects = form.querySelectorAll("select");
  validation = "true";

  [...inputs, ...textareas].forEach((element) => {
    if (element.value.trim() === "" || !element.checkValidity()) {
      element.style.border = "1px solid red";
      element.onchange = () => (element.style.border = "1px solid #f0f0f0");
      validation = "false";
    }
  });

  [...selects].forEach((element) => {
    value = element.options[element.selectedIndex].value;
    if (value === "-1") {
      element.style.border = "1px solid red";
      element.onchange = () => (element.style.border = "1px solid #f0f0f0");
      validation = "false";
    }
  });
}

//function shows message after sending form
function showMessage(message, elem) {
  console.log("function showmessage works");
  const div = document.createElement("div");
  div.classList.add("notification");
  div.innerHTML = message;
  elem.appendChild(div);
  const notif = document.querySelector(".notification");
  setTimeout(() => (notif.style.opacity = 1), 500);
  setTimeout(() => (notif.style.opacity = 0), 2500);
  setTimeout(() => notif.remove(), 3000);
}

const mess = `<span> Your message has been sucsessfully send.</span>
              <span>We will contact you soon. </span>`;
const form = document.querySelector(".cu-form");
document.querySelector(".cu-form__submit").onclick = function () {
  formValidation(form);
  if (validation === "true") {
    showMessage(mess, form);
    document.querySelector(".cu-form__button-reset").click();
  }
};
