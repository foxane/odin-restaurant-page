import "./index.css";
import homePage from "../home/home";
import menuPage from "../menu/menu";
import contactPage from "../contact/contact";
import aboutPage from "../about/about";

const content = document.querySelector("#content");
// Remove preload class to prevent transition on page load
(function () {
  window.onload = function () {
    const body = document.querySelector("body");
    body.classList.remove("preload");
    console.log("hi");
  };
})();

let currPage = "";
const changePage = function (cases) {
  if (cases === currPage) return;

  // Turn color for active page
  document
    .querySelector(`[data-attr="${cases}"]`)
    .classList.add("nav__btn-active");
  if (currPage !== "")
    document
      .querySelector(`[data-attr="${currPage}"]`)
      .classList.remove("nav__btn-active");

  content.innerHTML = "";
  switch (cases) {
    case "home":
      content.appendChild(homePage());
      currPage = cases;
      break;
    case "menu":
      content.appendChild(menuPage());
      currPage = cases;
      break;
    case "contact":
      content.appendChild(contactPage());
      currPage = cases;
      break;
    case "about":
      content.appendChild(aboutPage());
      currPage = cases;
      break;
  }
  console.log(currPage);
};

const handler = (() => {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      changePage(e.target.dataset.attr);
    });
  });
})();

changePage("home");

export default changePage;
