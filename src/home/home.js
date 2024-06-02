import "./home.css";
import changePage from "../index";
import image from "../images/home-img.png";

export default function () {
  const home = document.createElement("div"); // Granpa
  const homeLeft = document.createElement("div"); // Papa
  const homeRight = document.createElement("div"); // Son

  home.classList.add("home");
  homeLeft.classList.add("home__left");
  homeRight.classList.add("home__right");
  home.appendChild(homeLeft);
  home.appendChild(homeRight);

  // left
  const h1 = document.createElement("h1");
  const p = document.createElement("p");
  const btn = document.createElement("button");
  h1.textContent = "Lorem ipsum dolor sit amet.";
  p.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,ipsa!";
  btn.textContent = "Menu";
  btn.addEventListener("click", () => {
    changePage("menu");
  });
  homeLeft.appendChild(h1);
  homeLeft.appendChild(p);
  homeLeft.appendChild(btn);

  //right
  const img = new Image();
  img.src = image;
  img.setAttribute("width", "400");
  homeRight.appendChild(img);

  return home;
}
