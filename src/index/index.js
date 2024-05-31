import "./index.css";
import homePage from "../home/home";

document.querySelector("#content").appendChild(homePage());

const menuBtn = document.getElementById("btn-menu");

$(window).load(function () {
  $("body").removeClass("preload");
});
