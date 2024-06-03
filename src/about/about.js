import "./about.css";
import satay from "../images/home-img.png";

export default function () {
  const about = document.createElement("div");
  about.classList.add("about");

  const h2 = document.createElement("h2");
  h2.textContent = "About us";
  about.appendChild(h2);

  const p1 = document.createElement("p1");
  p1.textContent = `Welcome to Naspad Delights, where culinary finesse
  meets genuine hospitality in every dish we serve. Situated in the
  heart of Brookville, our restaurant beckons connoisseurs of fine
  dining for an unparalleled gastronomic journey. At
  Naspad Delights, we take pride in curating an
  exquisite menu that tantalizes the taste buds and leaves a lasting
  impression on every guest.`;

  about.appendChild(p1);

  const img = document.createElement("img");
  img.src = satay;
  img.alt = "Satay";
  img.width = "400";
  about.appendChild(img);

  const p2 = document.createElement("p2");
  p2.textContent = `Indulge in Culinary Harmony at Naspad Delights,
  where flavors from around the world blend seamlessly with warm
  hospitality. Nestled in the charming town of Greenwood, our
  restaurant offers a haven for food aficionados seeking an
  extraordinary dining experience. At
  Naspad Delights, we are committed to crafting
  exceptional dishes that delight the senses and create cherished
  memories.`;
  p2.classList.add("p2");
  about.appendChild(p2);

  const span = document.createElement("span");
  span.textContent = "- Kang Gor Eng";
  span.classList.add("signature");
  about.appendChild(span);

  return about;
}
