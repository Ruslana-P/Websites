const articles = [
  {
    title: "9 TIPS FOR WEDDING PHOTOGRAPHERS",
    date: "30.12.2020",
    shortText:
      "Hello people! Paul Tarabozzo here! Today I want to share my 9 tips for wedding photographers to make your life easier, attract more clients, and make them excited to work with you. #1 – Ask more questions. People who found you on the internet or through referrals most likely...",
    link: "article-9-tips.html",
    imgTablet: "i/blog/30.12.2020-mid.jpg",
    imgDekstop: "i/blog/30.12.2020-big.jpg",
    imgAlt: "alt",
  },
  {
    title: "ONE SOURCE OF LIGHT DOES IT ALL",
    date: "22.12.2020",
    shortText:
      "Hello people! Tarabozzo here! I want to show you how using just one source of light you can create different kinds of photos, so you can understand that it’s not about the number of light sources, but more about how you use them. Having just one source you can do a lot and it is... ",
    link: "#",
    imgTablet: "i/blog/22.12.2020-mid.jpg",
    imgDekstop: "i/blog/22.12.2020-big.jpg",
    imgAlt: "alt",
  },
  {
    title:
      "PORTRAIT PHOTOGRAPHY TUTORIAL FOR BEGINNERS | LIGHT & COMPOSITION STRAIGHT FROM THE CAMERA | POV",
    date: "06.12.2020",
    shortText:
      "Hello people! Paul Tarabozzo here! Today I want to introduce you to a new series of videos where I will be showing my process of shooting various photos with an explanation, sharing my tips. Having over 10 years of full-time professional photography I believe that my tips and tricks will be useful to any photographer...",
    link: "#",
    imgTablet: "i/blog/06.12.2020-mid.jpg",
    imgDekstop: "i/blog/06.12.2020-big.jpg",
    imgAlt: "alt",
  },
  {
    title: "HOW TO SHOOT SELF PORTRAITS",
    date: "29.11.2020",
    shortText:
      "Hello people! Paul Tarabozzo here and this time I want to show you how I did this great moody self-portrait so you can do your version even if you don’t have any advanced camera and photoshop skills. I was using my favorite beast Sony a9 and Sony 16-35 2.8 G Master lens, which is a... ",
    link: "#",
    imgTablet: "i/blog/29.11.2020-mid.jpg",
    imgDekstop: "i/blog/29.11.2020-big.jpg",
    imgAlt: "alt",
  },
  {
    title: "WHAT WEDDING PHOTOGRAPHER SHOULD NOT DO ON A WEDDING",
    date: "30.04.2020",
    shortText:
      "Hello guys, this is Paul from Tara Weddings and today I want to speak about the things that wedding photographer should not do on weddings. As you can understand, and as you know, the main reason why people ask you to be on a wedding is because of your photos. So this is your main...",
    link: "#",
    imgTablet: "i/blog/30.04.2020-mid.jpg",
    imgDekstop: "i/blog/30.04.2020-big.jpg",
    imgAlt: "alt",
  },
  {
    title: "9 TIPS FOR WEDDING PHOTOGRAPHERS",
    date: "30.12.2020",
    shortText:
      "Hello people! Paul Tarabozzo here! Today I want to share my 9 tips for wedding photographers to make your life easier, attract more clients, and make them excited to work with you. #1 – Ask more questions. People who found you on the internet or through referrals most likely...",
    link: "article-9-tips.html",
    imgTablet: "i/blog/30.12.2020-mid.jpg",
    imgDekstop: "i/blog/30.12.2020-big.jpg",
    imgAlt: "alt",
  },
  {
    title: "ONE SOURCE OF LIGHT DOES IT ALL",
    date: "22.12.2020",
    shortText:
      "Hello people! Tarabozzo here! I want to show you how using just one source of light you can create different kinds of photos, so you can understand that it’s not about the number of light sources, but more about how you use them. Having just one source you can do a lot and it is... ",
    link: "#",
    imgTablet: "i/blog/22.12.2020-mid.jpg",
    imgDekstop: "i/blog/22.12.2020-big.jpg",
    imgAlt: "alt",
  },
  {
    title:
      "PORTRAIT PHOTOGRAPHY TUTORIAL FOR BEGINNERS | LIGHT & COMPOSITION STRAIGHT FROM THE CAMERA | POV",
    date: "06.12.2020",
    shortText:
      "Hello people! Paul Tarabozzo here! Today I want to introduce you to a new series of videos where I will be showing my process of shooting various photos with an explanation, sharing my tips. Having over 10 years of full-time professional photography I believe that my tips and tricks will be useful to any photographer...",
    link: "#",
    imgTablet: "i/blog/06.12.2020-mid.jpg",
    imgDekstop: "i/blog/06.12.2020-big.jpg",
    imgAlt: "alt",
  },
  {
    title: "HOW TO SHOOT SELF PORTRAITS",
    date: "29.11.2020",
    shortText:
      "Hello people! Paul Tarabozzo here and this time I want to show you how I did this great moody self-portrait so you can do your version even if you don’t have any advanced camera and photoshop skills. I was using my favorite beast Sony a9 and Sony 16-35 2.8 G Master lens, which is a... ",
    link: "#",
    imgTablet: "i/blog/29.11.2020-mid.jpg",
    imgDekstop: "i/blog/29.11.2020-big.jpg",
    imgAlt: "alt",
  },
  {
    title: "WHAT WEDDING PHOTOGRAPHER SHOULD NOT DO ON A WEDDING",
    date: "30.04.2020",
    shortText:
      "Hello guys, this is Paul from Tara Weddings and today I want to speak about the things that wedding photographer should not do on weddings. As you can understand, and as you know, the main reason why people ask you to be on a wedding is because of your photos. So this is your main...",
    link: "#",
    imgTablet: "i/blog/30.04.2020-mid.jpg",
    imgDekstop: "i/blog/30.04.2020-big.jpg",
    imgAlt: "alt",
  },
];

//function create div class='content__article article'
function createArticle(obj) {
  const div = document.createElement("div");
  div.classList.add("content__article");
  div.classList.add("article");
  const link = document.createElement("a");
  link.classList.add("article__title");
  link.setAttribute("href", obj.link);
  link.textContent = obj.title;
  div.appendChild(link);
  const date = document.createElement("span");
  date.classList.add("article__date");
  date.textContent = obj.date;
  div.appendChild(date);
  if (screenSize != "phone") {
    const img = document.createElement("img");
    img.classList.add("article__img");
    screenSize === "tablet" && img.setAttribute("src", `${obj.imgTablet}`);
    screenSize === "dekstop" && img.setAttribute("src", `${obj.imgDekstop}`);
    img.setAttribute("alt", `${obj.imgAlt}`);
    div.appendChild(img);
  }
  const text = document.createElement("div");
  text.classList.add("article__text");
  text.textContent = `${obj.shortText}`;
  div.appendChild(text);
  const more = document.createElement("a");
  more.classList.add("article__btn");
  more.setAttribute("href", `${obj.link}`);
  more.textContent = "read more";
  div.appendChild(more);
  return div;
}

//function render childElement into parent element
function renderArticle(parentElem, child) {
  parentElem.appendChild(child);
}

const container = document.querySelector(".blog__articles");
const loadMore = document.querySelector(".content__btn");
let count = 0;
const articlesNum = articles.length;

function renderArticles() {
  for (let i = count; i < count + 4; i++) {
    const art = createArticle(articles[i]);
    renderArticle(container, art);
    if (i === articlesNum - 1) {
      loadMore.style.display = "none";
      return;
    }
    if (i === count + 4 - 1) {
      count = i + 1;
      return;
    }
  }
}
renderArticles();
loadMore.addEventListener("click", () => renderArticles());
