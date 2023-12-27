const addToCart = (cartItemData) => {
  let isAdded = false;

  cartItemsData.forEach((item) => {
    if (item.id === cartItemData.id) {
      item.quantity++;
      isAdded = true;
    }
  });

  if (!isAdded) {
    cartItemsData.push({ ...cartItemData, quantity: 1 });
  }

  localStorage.setItem("cartItemsData", JSON.stringify(cartItemsData));
};

let itemsEl = document.querySelector("div.items");
const itemTemplate = document.querySelector("div.tempalteItem");

const createItem = (itemData, id) => {
  let item = itemTemplate.childNodes[1].cloneNode(true);
  item.id = id;

  let img = item.querySelector("img");
  img.src = itemData.imgUrl;
  img.alt = itemData.imgAlt;

  let content = item.querySelector(".item-content");

  let title = content.querySelector("h4");
  title.innerHTML = itemData.title;

  let description = content.querySelector("p");
  description.innerHTML = itemData.description;

  let price = content.querySelector("p.price");
  price.innerHTML = itemData.price;

  let btn = item.querySelector("button.to-cart");
  btn.addEventListener("click", () => {
    addToCart(itemData);
  });

  itemsEl.appendChild(item);
};

items.forEach((item, i) => createItem(item, i));

itemTemplate.remove();
