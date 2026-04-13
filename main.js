// Instead Of API :( cause Claude Code Told Me Thad >:(
const products = [
  {
    id: Date.now() + Math.floor(Math.random() * 1000000),
    productName: "Armadello Quantom",
    category: "Tshirt",
    price: "49.99$",
    rating: 8,
    image: "imgs/tshirt1.webp",
  },
  {
    id: Date.now() + Math.floor(Math.random() * 1000000),
    productName: "Nebula Runner",
    category: "Footwear",
    price: "120.00$",
    rating: 9,
    image: "imgs/foot.webp",
  },
  {
    id: Date.now() + Math.floor(Math.random() * 1000000),
    productName: "Obsidian Slim",
    category: "Pants",
    price: "85.50$",
    rating: 7,
    image: "imgs/pants1.webp",
  },
  {
    id: Date.now() + Math.floor(Math.random() * 1000000),
    productName: "Titanium Aviators",
    category: "Accessories",
    price: "150.00$",
    rating: 9,
    image: "imgs/acss1.webp",
  },
  {
    id: Date.now() + Math.floor(Math.random() * 1000000),
    productName: "Midnight",
    category: "Pants",
    price: "65.00$",
    rating: 8,
    image: "imgs/pants2.webp",
  },
  {
    id: Date.now() + Math.floor(Math.random() * 1000000),
    productName: "Cyber-Puff",
    category: "Outerwear",
    price: "199.99$",
    rating: 10,
    image: "imgs/out.webp",
  },
  {
    id: Date.now() + Math.floor(Math.random() * 1000000),
    productName: "Neon Stripe",
    category: "Accessories",
    price: "12.99$",
    rating: 6,
    image: "imgs/acss2.webp",
  },
  {
    id: Date.now() + Math.floor(Math.random() * 1000000),
    productName: "Vantage Point",
    category: "Hoodie",
    price: "75.00$",
    rating: 8,
    image: "imgs/hoddie1.webp",
  },
  {
    id: Date.now() + Math.floor(Math.random() * 1000000),
    productName: "Gravity Field",
    category: "Footwear",
    price: "145.00$",
    rating: 9,
    image: "imgs/foot1.webp",
  },
  {
    id: Date.now() + Math.floor(Math.random() * 1000000),
    productName: "Solaris Sun",
    category: "Accessories",
    price: "35.00$",
    rating: 7,
    image: "imgs/acss3.webp",
  },
  {
    id: Date.now() + Math.floor(Math.random() * 1000000),
    productName: "Lunar Eclipse",
    category: "Accessories",
    price: "45.00$",
    rating: 8,
    image: "imgs/acss4.webp",
  },
  {
    id: Date.now() + Math.floor(Math.random() * 1000000),
    productName: "Apex Predator",
    category: "Tshirt",
    price: "32.00$",
    rating: 7,
    image: "imgs/tshirt2.webp",
  },
  {
    id: Date.now() + Math.floor(Math.random() * 1000000),
    productName: "Glitch Graphic",
    category: "Tshirt",
    price: "38.50$",
    rating: 8,
    image: "imgs/tshirt3.webp",
  },
  {
    id: Date.now() + Math.floor(Math.random() * 1000000),
    productName: "Arctic Fox",
    category: "Outerwear",
    price: "250.00$",
    rating: 10,
    image: "imgs/out6.webp",
  },
  {
    id: Date.now() + Math.floor(Math.random() * 1000000),
    productName: "Stealth Tech",
    category: "Outerwear",
    price: "110.00$",
    rating: 9,
    image: "imgs/out5.webp",
  },
  {
    id: Date.now() + Math.floor(Math.random() * 1000000),
    productName: "Zenith Knit",
    category: "Sweater",
    price: "88.00$",
    rating: 8,
    image: "imgs/sweater1.webp",
  },
  {
    id: Date.now() + Math.floor(Math.random() * 1000000),
    productName: "Rift Valley",
    category: "Pants",
    price: "70.00$",
    rating: 7,
    image: "imgs/pants3.webp",
  },
  {
    id: Date.now() + Math.floor(Math.random() * 1000000),
    productName: "Oasis Linen",
    category: "Pants",
    price: "55.00$",
    rating: 8,
    image: "imgs/pants4.webp",
  },
  {
    id: Date.now() + Math.floor(Math.random() * 1000000),
    productName: "Driftwood",
    category: "Footwear",
    price: "95.00$",
    rating: 7,
    image: "imgs/foot2.webp",
  },
  {
    id: Date.now() + Math.floor(Math.random() * 1000000),
    productName: "Vortex Beanie",
    category: "Accessories",
    price: "25.00$",
    rating: 9,
    image: "imgs/acss5.webp",
  },
  {
    id: Date.now() + Math.floor(Math.random() * 1000000),
    productName: "Canyon Range",
    category: "Accessories",
    price: "40.00$",
    rating: 8,
    image: "imgs/acss6.webp",
  },
  {
    id: Date.now() + Math.floor(Math.random() * 1000000),
    productName: "Echo Base Layer",
    category: "Tshirt",
    price: "45.00$",
    rating: 7,
    image: "imgs/tshirt4.webp",
  },
  {
    id: Date.now() + Math.floor(Math.random() * 1000000),
    productName: "Hydra Waterproof",
    category: "Outerwear",
    price: "180.00$",
    rating: 9,
    image: "imgs/out4.webp",
  },
  {
    id: Date.now() + Math.floor(Math.random() * 1000000),
    productName: "Summit Trekking",
    category: "Accessories",
    price: "130.00$",
    rating: 10,
    image: "imgs/acss11.webp",
  },
  {
    id: Date.now() + Math.floor(Math.random() * 1000000),
    productName: "Velocity Training",
    category: "Tshirt",
    price: "29.99$",
    rating: 8,
    image: "imgs/tshirt5.webp",
  },
  {
    id: Date.now() + Math.floor(Math.random() * 1000000),
    productName: "Gridlock Canvas",
    category: "Accessories",
    price: "20.00$",
    rating: 6,
    image: "imgs/acss7.webp",
  },
  {
    id: Date.now() + Math.floor(Math.random() * 1000000),
    productName: "Ion Charge",
    category: "Accessories",
    price: "210.00$",
    rating: 9,
    image: "imgs/acss8.webp",
  },
  {
    id: Date.now() + Math.floor(Math.random() * 1000000),
    productName: "Banshee Leather",
    category: "Outerwear",
    price: "299.00$",
    rating: 10,
    image: "imgs/out3.webp",
  },
  {
    id: Date.now() + Math.floor(Math.random() * 1000000),
    productName: "Pioneer Flannel",
    category: "Shirt",
    price: "60.00$",
    rating: 8,
    image: "imgs/shirt2.webp",
  },
  {
    id: Date.now() + Math.floor(Math.random() * 1000000),
    productName: "Horizon Polo",
    category: "Shirt",
    price: "52.00$",
    rating: 7,
    image: "imgs/shirt1.webp",
  },
  {
    id: Date.now() + Math.floor(Math.random() * 1000000),
    productName: "Nomad Desert",
    category: "Accessories",
    price: "28.00$",
    rating: 8,
    image: "imgs/acss9.webp",
  },
  {
    id: Date.now() + Math.floor(Math.random() * 1000000),
    productName: "Tundra Thermal",
    category: "Accessories",
    price: "18.00$",
    rating: 9,
    image: "imgs/acss10.webp",
  },
  {
    id: Date.now() + Math.floor(Math.random() * 1000000),
    productName: "Vector Windbreaker",
    category: "Outerwear",
    price: "95.00$",
    rating: 8,
    image: "imgs/out2.webp",
  },
  {
    id: Date.now() + Math.floor(Math.random() * 1000000),
    productName: "Prism Reflective",
    category: "Accessories",
    price: "30.00$",
    rating: 7,
    image: "imgs/acss12.webp",
  },
  {
    id: Date.now() + Math.floor(Math.random() * 1000000),
    productName: "Catalyst Sports",
    category: "Activewear",
    price: "42.00$",
    rating: 9,
    image: "imgs/act3.webp",
  },
  {
    id: Date.now() + Math.floor(Math.random() * 1000000),
    productName: "Flow Yoga",
    category: "Activewear",
    price: "68.00$",
    rating: 10,
    image: "imgs/act2.webp",
  },
  {
    id: Date.now() + Math.floor(Math.random() * 1000000),
    productName: "Circuit Mesh",
    category: "Activewear",
    price: "35.00$",
    rating: 7,
    image: "imgs/act1.webp",
  },
  {
    id: Date.now() + Math.floor(Math.random() * 1000000),
    productName: "Mantle Wool",
    category: "Outerwear",
    price: "220.00$",
    rating: 9,
    image: "imgs/out1.webp",
  },
  {
    id: Date.now() + Math.floor(Math.random() * 1000000),
    productName: "Avenue Suede",
    category: "Footwear",
    price: "160.00$",
    rating: 8,
    image: "imgs/foot3.webp",
  },
  {
    id: Date.now() + Math.floor(Math.random() * 1000000),
    productName: "Element Henley",
    category: "Tshirt",
    price: "48.00$",
    rating: 8,
    image: "imgs/tshirt6.webp",
  },
];

// Firtst Page Load
createProducts(products);

// Create Product Logic
function createProducts(products) {
  const main = document.querySelector("main");
  let productsContainer = document.getElementById("products");
  productsContainer.remove();

  let newProductsContainer = document.createElement("div");
  newProductsContainer.id = "products";
  newProductsContainer.className =
    "products grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6";

  products.forEach((ele) => {
    let product = document.createElement("div");
    product.className = "product";

    let picOverflow = document.createElement("div");
    picOverflow.className =
      "pic-overflow overflow-hidden rounded-xl bg-gray-50 mb-3";

    let picture = document.createElement("picture");
    picture.className = "group picture";

    let source = document.createElement("source");
    source.srcset = ele.image;
    source.type = "image/webp";

    let img = document.createElement("img");
    img.src = ele.image;
    img.alt = ele.category;
    img.loading = "lazy";
    img.decoding = "async";
    img.className =
      "w-full h-72 object-cover group-hover:scale-105 transition duration-500";

    picture.append(source, img);

    picOverflow.append(picture);

    let description = document.createElement("div");
    description.className = "p-desc px-1";

    let productName = document.createElement("p");
    productName.className =
      "name text-sm font-medium text-gray-800 mb-1 truncate";
    productName.append(document.createTextNode(ele.productName));

    let stars = document.createElement("div");
    stars.className =
      "stars flex justify-center sm:justify-start items-center gap-0.5 mb-2";

    createProductRating(ele.rating, stars);

    let price = document.createElement("span");
    price.className = "price text-sm font-semibold text-gray-600";
    price.append(document.createTextNode(ele.price));

    description.append(productName, stars, price);

    product.append(picOverflow, description);

    newProductsContainer.append(product);
  });

  main.append(newProductsContainer);
}

// Create Product Rating Stars
function createProductRating(filledStars, stars) {
  const starsNum = 10;

  for (let i = 0; i < filledStars; i++) {
    let i = document.createElement("i");
    i.className = "fa-solid fa-star text-yellow-400 text-xs";
    stars.append(i);
  }

  for (let j = 0; j < starsNum - filledStars; j++) {
    let i = document.createElement("i");
    i.className = "fa-regular fa-star text-yellow-400 text-xs";
    stars.append(i);
  }
}

// Filtering Logic
const categories = document.querySelector(".categories");

categories.childNodes.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    filterProducts(e.target.innerHTML.trim());
  });
});

function filterProducts(categoryName) {
  if (categoryName === "All") {
    createProducts(products);
  } else {
    createProducts(products.filter((ele) => ele.category === categoryName));
  }
}
