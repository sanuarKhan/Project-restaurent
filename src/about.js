const aboutContent = () => {
  content.innerText = "";
  content.classList.add("about");
  content.classList.remove("menu");
  content.classList.remove("home");

  const h2 = document.createElement("h2");
  h2.innerText = "we are now a brand for the quality and taste".toUpperCase();
  const p = document.createElement("p");
  p.innerText =
    "In the heart of Dhaka, there's a haven for food Lovers: 'Food lovers.' Every dish here is crafted to perfection, making it more than just a meal—it's an experience. From the freshest ingredients to the exquisite presentation, everything speaks of quality. The taste? Simply unparalleled. A visit to Food Lovers isn’t just dining; it’s a culinary journey. Care to join this taste revolution?";
  content.appendChild(h2);
  content.appendChild(p);
};
export default aboutContent;