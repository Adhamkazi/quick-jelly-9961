let arr = JSON.parse(localStorage.getItem("products")) || [];

let mensData = [
  {
    image:
      "https://www.yoox.com/images/items/17/17373541nb_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center",
    name: "1017 ALYX 9SM",
    desc: "Mules and clogs",
    price: "US$ 508,00",
  },
  {
    image:
      "https://www.yoox.com/images/items/45/45693643dq_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
    name: "MARNI",
    desc: "Backpacks & fanny packs",
    price: "US% 498,00",
  },
  {
    image:
      "https://www.yoox.com/images/items/12/12880725on_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
    name: "DUNHILL",
    desc: "Patterned shirts",
    price: "US$ 433,00",
  },

  {
    image:
      "https://www.yoox.com/images/items/45/45696966xu_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
    name: "NEIL BARRETT",
    desc: "Backpacks & fanny packs",
    price: "US$ 618,00",
  },
  {
    image:
      "https://www.yoox.com/images/items/13/13872219sj_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
    name: "AMBUSH",
    desc: "Casual pants",
    price: "US$ 444,00",
  },
  {
    image:
      "https://www.yoox.com/images/items/12/12911971jw_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center ",
    name: "VALENTINO",
    desc: "Sweatshirts",
    price: "US$ 1.491,00",
  },
  {
    image:
      "https://www.yoox.com/images/items/55/55025247hu_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center ",
    name: "NIKE",
    desc: "Travel & duffel bag",
    price: "US$ 68,00",
  },
  {
    image:
      "https://www.yoox.com/images/items/12/12916336jv_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
    name: "KENZO",
    desc: "T-shirt",
    price: "US$ 182,00",
  },
  {
    image:
      "https://www.yoox.com/images/items/46/46867662pa_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
    name: "TOMMY HILFIGER",
    desc: "Hats",
    price: "US$ 64,00",
  },
  {
    image:
      "https://www.yoox.com/images/items/45/45697819ao_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center ",
    name: "1017 ALYX 9SM",
    desc: "Backpacks & fanny packs",
    price: "US$ 545,00",
  },
  {
    image:
      "https://www.yoox.com/images/items/12/12904208bl_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center ",
    name: " KENZO ",
    desc: "T-shirts",
    price: "US$ 154,00",
  },
  {
    image:
      "https://www.yoox.com/images/items/12/12916304ui_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",
    name: "KENZO ",
    desc: "T-shirts",
    price: "US$ 182,00",
  },
  {
    image:
      "https://www.yoox.com/images/items/17/17354526xp_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",
    name: "JIL SANDAR",
    desc: "sneakers",
    price: "US$ 659,00",
    strikedoffprice: 1699,
  },
  {
    image:
      "https://www.yoox.com/images/items/12/12878650mv_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center ",
    name: "MYAR X YOOX",
    desc: "Sweatshirts",
    price: "US$ 177,00",
    strikedoffprice: 3499,
  },
  {
    image:
      " https://www.yoox.com/images/items/46/46814874dh_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center ",
    name: "VALENTINO GARAVANI",
    desc: "Hats",
    price: "US$ 309,00",
    strikedoffprice: 4999,
  },
  {
    image:
      " https://www.yoox.com/images/items/12/12910314mh_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center  ",
    name: "ROBERTO CAVALLI",
    desc: "Patterned shirts",
    price: "US$ 381,00",
    strikedoffprice: 1499,
  },
  {
    image:
      "https://www.yoox.com/images/items/13/13872834sc_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center ",
    name: "GIVENCHY",
    desc: "Cargo",
    price: "US$ 554,00",
    strikedoffprice: 2299,
  },
  {
    image:
      "https://www.yoox.com/images/items/17/17375851el_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center",
    name: "JW ANDERSON",
    desc: "Sneakers",
    price: "US$ 486,00",
    strikedoffprice: 3599,
  },
];

function append(mensData) {
  mensData.forEach((elem, index) => {
    let div = create("div");
    // box.setAttributes("class","boxes")

    let image = create("img");
    image.src = elem.image;

    let title = create("h3");
    title.innerText = elem.name;

    let desc = create("p");
    desc.innerText = elem.desc;

    let price = create("h4");
    price.innerText = elem.price;

    let button = create("button");
    button.innerText = "AddToCart";

    button.addEventListener("click", () => {
      btnfunc(elem, index);
    });
    div.append(image, title, desc, price, button);
    document.getElementById("container").append(div);
  });
}
append(mensData);

function create(x) {
  return document.createElement(x);
}

function btnfunc(elem, index) {
  arr.push(elem);
  localStorage.setItem("products", JSON.stringify(arr));
}