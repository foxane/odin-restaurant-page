import "./menu.css";

export default function () {
  const test = document.createElement("div");
  test.textContent = "Test from menu.js";
  console.log(test);
  return test;
}
