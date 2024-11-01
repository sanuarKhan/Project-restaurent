import "./styles.css";
import element from "./domelement.js";
import menuContent from "./menu.js";
import aboutContent from "./about.js";

element();

const isActive = () => {
  if (content.classList == "home") {
    home.classList.add("active");
    menu.classList.remove("active");
    about.classList.remove("active");
  }
  if (content.classList == "menu") {
    menu.classList.add("active");
    home.classList.remove("active");
    about.classList.remove("active");
  }
  if (content.classList == "about") {
    about.classList.add("active");
    home.classList.remove("active");
    menu.classList.remove("active");
  }
};

const homeText = () => {
  const h2 = document.createElement("h2");
  h2.innerText = "welcome to restaurant".toUpperCase();
  content.appendChild(h2);
};

home.addEventListener("click", () => {
  content.innerText = "";
  content.classList.add("home");
  content.classList.remove("menu");
  content.classList.remove("about");
  homeText();
  isActive();
});

menu.addEventListener("click", () => {
  menuContent();
  isActive();
});

about.addEventListener("click", () => {
  aboutContent();
  isActive();
});

console.log("i am from js file through webpack");

// btn.addEventListener("click", isActive);
homeText();
