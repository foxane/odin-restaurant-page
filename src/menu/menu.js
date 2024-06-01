import "./menu.css";

import food0 from "../images/food-0.jpg";
import food1 from "../images/food-1.jpg";
import food2 from "../images/food-2.jpg";
import food3 from "../images/food-3.jpg";
import food4 from "../images/food-4.jpg";

const getImgSrc = (int) => `../images/food-${int}.jpg`;

const items = [
  {
    name: "Fried Rice",
    imgSrc: food0,
    desc: "Flavour rich with spicy level of your choosing.",
    price: "$9.99",
  },
  {
    name: "Fried Noodle",
    imgSrc: food1,
    desc: "Fried noodle with all the spiciness you can ever dream.",
    price: "$9.99",
  },
  {
    name: "Not Vegeta Salad",
    imgSrc: food2,
    desc: "Directly harvested ingredients from our own farm.",
    price: "$9.99",
  },
  {
    name: "Somthing Steaky",
    imgSrc: food3,
    desc: "Idk much about steak, but i love meat. Full of juicy oils",
    price: "$9.99",
  },
  {
    name: "Satay",
    imgSrc: food4,
    desc: "The myth of wolf and lamb. But the lamb are chopped and pierced.",
    price: "$9.99",
  },
];

console.log(items);

export default function () {
  const menuDiv = document.createElement("div");
  menuDiv.classList.add("menu");

  // Create menu card
  for (const item of items) {
    const menuCard = document.createElement("div");
    menuCard.classList.add("menu__card");

    const h3 = document.createElement("h3");
    h3.textContent = item.name;

    const img = new Image();
    img.src = item.imgSrc;
    img.alt = item.name;
    img.width = "315";

    const p1 = document.createElement("p");
    p1.textContent = item.desc;

    const p2 = document.createElement("p");
    p2.classList.add("card__price");
    p2.textContent = item.price;

    const btn = document.createElement("button");
    btn.textContent = "Order";

    menuCard.appendChild(h3);
    menuCard.appendChild(img);
    menuCard.appendChild(p1);
    menuCard.appendChild(p2);
    menuCard.appendChild(btn);

    menuDiv.appendChild(menuCard);
  }

  return menuDiv;
}
