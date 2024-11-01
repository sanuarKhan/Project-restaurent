
const menuContent = () => {
  // e.target.style.backgroundColor = "#def";
  content.innerText = "";
  content.classList.add("menu");
  content.classList.remove("home");
  content.classList.remove("about");
  const h2 = document.createElement("h2");
  h2.innerText = "our menus are below:".toUpperCase();
  const ul = document.createElement("ul");

  const items = [
    {
      name: "Beef",
      price: "50$",
    },
    {
      name: "Chiken",
      price: "30$",
    },
    {
      name: "Salad",
      price: "5$",
    },
  ];
  items.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `${item.name} --------- ${item.price}`;
    ul.appendChild(li);
  });

  content.appendChild(h2);
  content.appendChild(ul);
};

export default menuContent;
