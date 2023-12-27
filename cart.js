let cartItemsEl = document.querySelector("div.cart-items");
const cartItemTemplate = document.querySelector("div.templateCartItem");

const createCartItems = (cartItemData) => {
  let cartItem = cartItemTemplate.childNodes[1].cloneNode(true);
  cartItem.id = cartItemData.id;

  let img = cartItem.querySelector(".cart-item-img");
  img.src = "../" + cartItemData.imgUrl;
  img.alt = cartItemData.alt;

  let content = cartItem.querySelector(".cart-item-content");

  let title = content.querySelector(".cart-item-title");
  title.innerHTML = cartItemData.title;

  let description = content.querySelector("ul.cart-item-species");

  let price = description.querySelector(".mark");
  price.innerHTML = cartItemData.price;

  let color = description.querySelector(".color");
  color.innerHTML = cartItemData.color;

  let size = description.querySelector(".size");
  size.innerHTML = cartItemData.size;

  let quantity = description.querySelector(".quantity");
  quantity.value = cartItemData.quantity;
  quantity.addEventListener("input", (e) => {
    cartItemsData.forEach((cartItem) => {
      if (cartItem.id === cartItemData.id) {
        cartItem.quantity = e.target.value;
      }
    });
    localStorage.setItem("cartItemsData", JSON.stringify(cartItemsData));
  });

  // let removeBtn = window.getComputedStyle(cartItem, ":after");
  // removeBtn.addEventListener("click", () => {
  //   cartItemsEl.removeChild(cartItem);
  // });

  cartItemsEl.appendChild(cartItem);
};

cartItemTemplate.remove();

const cartItemsData = JSON.parse(window.localStorage.getItem("cartItemsData"));

cartItemsData.forEach((cartItem) => {
  createCartItems(cartItem);
});
