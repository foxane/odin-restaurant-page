import "./index.css";
import homePage from "../home/home";
import menuPage from "../menu/menu";

const content = document.querySelector("#content");
// Remove preload class to prevent transition on page load
(function () {
  window.onload = function () {
    const body = document.querySelector("body");
    body.classList.remove("preload");
    console.log("hi");
  };
})();

const changePage = function (cases) {
  let currPage = "";
  if (cases === currPage) return;
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
  }
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
