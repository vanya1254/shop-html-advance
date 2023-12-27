const items = [
  {
    id: 1,
    imgUrl: "img/item1.jpg",
    imgAlt: "image product",
    title: "ELLERY X&nbsp;M&rsquo;O CAPSULE",
    description:
      "Known for her sculptural takes on&nbsp;traditional tailoring, Australian arbiter of&nbsp;cool Kym Ellery teams up&nbsp;with Moda Operandi.",
    price: "$84.00",
    color: "Navy",
    size: "Xl",
  },
  {
    id: 2,
    imgUrl: "img/item2.jpg",
    imgAlt: "image product",
    title: "ELLERY X&nbsp;M&rsquo;O CAPSULE",
    description:
      "Known for her sculptural takes on&nbsp;traditional tailoring, Australian arbiter of&nbsp;cool Kym Ellery teams up&nbsp;with Moda Operandi.",
    price: "$400.00",
    color: "Black",
    size: "Xl",
  },
  {
    id: 3,
    imgUrl: "img/item3.jpg",
    imgAlt: "image product",
    title: "ELLERY X&nbsp;M&rsquo;O CAPSULE",
    description:
      "Known for her sculptural takes on&nbsp;traditional tailoring, Australian arbiter of&nbsp;cool Kym Ellery teams up&nbsp;with Moda Operandi.",
    price: "$52.00",
    color: "Different",
    size: "Xl",
  },
  {
    id: 4,
    imgUrl: "img/item4.jpg",
    imgAlt: "image product",
    title: "ELLERY X&nbsp;M&rsquo;O CAPSULE",
    description:
      "Known for her sculptural takes on&nbsp;traditional tailoring, Australian arbiter of&nbsp;cool Kym Ellery teams up&nbsp;with Moda Operandi.",
    price: "$60.00",
    color: "Beige",
    size: "Xl",
  },
  {
    id: 5,
    imgUrl: "img/item5.jpg",
    imgAlt: "image product",
    title: "ELLERY X&nbsp;M&rsquo;O CAPSULE",
    description:
      "Known for her sculptural takes on&nbsp;traditional tailoring, Australian arbiter of&nbsp;cool Kym Ellery teams up&nbsp;with Moda Operandi.",
    price: "$92.00",
    color: "Light Blue",
    size: "Xl",
  },
  {
    id: 6,
    imgUrl: "img/item6.jpg",
    imgAlt: "image product",
    title: "ELLERY X&nbsp;M&rsquo;O CAPSULE",
    description:
      "Known for her sculptural takes on&nbsp;traditional tailoring, Australian arbiter of&nbsp;cool Kym Ellery teams up&nbsp;with Moda Operandi.",
    price: "$78.00",
    color: "Grey",
    size: "Xl",
  },
];

localStorage.setItem("cartItemsData", JSON.stringify([]));

const cartItemsData = JSON.parse(localStorage.getItem("cartItemsData"));
