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

let bgPos = "right";
const changeBg = () => {
  document.querySelector(
    "main"
  ).style.cssText = `background-image:linear-gradient(to bottom ${bgPos},rgba(5, 5, 5, 0.808),rgb(0, 0, 0));`;
  if (bgPos === "right") {
    bgPos = "left";
  } else {
    bgPos = "right";
  }
};

let currPage = "";
const changePage = function (cases) {
  if (cases === currPage) return;
  changeBg();
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
