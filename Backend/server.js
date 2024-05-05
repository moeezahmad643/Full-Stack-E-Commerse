const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const fs = require("fs");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose
  .connect("mongodb://localhost:27017/Ecommerse4u", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected Successfully");
  })
  .catch((err) => console.log(err));

const usersSchema = mongoose.Schema({
  username: String,
  userEmail: String,
  password: String,
});

const User = mongoose.model("User", usersSchema);

const cartSchema = mongoose.Schema({
  email: String,
  products: Array,
});

const Cart = mongoose.model("Cart", cartSchema);

const productSchema = mongoose.Schema({
  id: Number,
  title: String,
  price: Number,
  description: String,
  category: String,
  image: String,
  rating: Object,
  sizes: Array,
  colors: Array,
});
const Products = mongoose.model("Product", productSchema);

app.get("/products", async (req, res) => {
  let products = await Products.find({});
  res.json(products);
});

app.get("/products/:product", (req, res) => {
  let ProductsData = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: {
        rate: 3.9,
        count: 120,
      },
      sizes: ["One Size"],
      colors: ["Black", "Green", "Red", "Blue"],
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "men's clothing",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      rating: {
        rate: 4.1,
        count: 259,
      },
      sizes: ["Small", "Medium", "Large", "X-Large"],
      colors: ["Black", "White", "Gray", "Navy"],
    },
    {
      id: 3,
      title: "Mens Cotton Jacket",
      price: 55.99,
      description:
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      rating: {
        rate: 4.7,
        count: 500,
      },
      sizes: ["Small", "Medium", "Large", "X-Large", "XX-Large"],
      colors: ["Black", "Brown", "Gray", "Blue"],
    },
    {
      id: 4,
      title: "Mens Casual Slim Fit",
      price: 15.99,
      description:
        "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      rating: {
        rate: 2.1,
        count: 430,
      },
      sizes: ["Small", "Medium", "Large", "X-Large"],
      colors: ["Black", "White", "Gray"],
    },
    {
      id: 5,
      title:
        "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      price: 695,
      description:
        "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      category: "jewelry",
      image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      rating: {
        rate: 4.6,
        count: 400,
      },
      sizes: ["One Size"],
      colors: ["Gold", "Silver"],
    },
    {
      id: 6,
      title: "Solid Gold Petite Micropave ",
      price: 168,
      description:
        "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
      category: "jewelry",
      image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      rating: {
        rate: 3.9,
        count: 70,
      },
      sizes: ["One Size"],
      colors: ["Gold"],
    },
    {
      id: 7,
      title: "White Gold Plated Princess",
      price: 9.99,
      description:
        "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
      category: "jewelry",
      image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      rating: {
        rate: 3,
        count: 400,
      },
      sizes: ["One Size"],
      colors: ["White", "Gold"],
    },
    {
      id: 8,
      title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
      price: 10.99,
      description:
        "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
      category: "jewelry",
      image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
      rating: {
        rate: 1.9,
        count: 100,
      },
      sizes: ["One Size"],
      colors: ["Rose Gold", "Silver"],
    },
    {
      id: 9,
      title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
      price: 64,
      description:
        "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
      rating: {
        rate: 3.3,
        count: 203,
      },
      sizes: ["2TB"],
      colors: ["Black"],
    },
    {
      id: 10,
      title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
      price: 109,
      description:
        "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
      rating: {
        rate: 2.9,
        count: 470,
      },
      sizes: ["1TB"],
      colors: ["Black"],
    },
    {
      id: 11,
      title:
        "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
      price: 109,
      description:
        "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
      category: "electronics",
      image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
      rating: {
        rate: 4.8,
        count: 319,
      },
      sizes: ["256GB"],
      colors: ["Black"],
    },
    {
      id: 12,
      title:
        "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
      price: 114,
      description:
        "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
      rating: {
        rate: 4.8,
        count: 400,
      },
      sizes: ["4TB"],
      colors: ["Black"],
    },
  ];

  const productId = parseInt(req.params.product); // Convert the product ID to an integer

  // Find the product in the array based on its ID
  const product = ProductsData.find((item) => item.id === productId);

  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }

  res.json(product);
});

app.post("/cart", async (req, res) => {
  let newProducts = req.body.product; // object
  let email = req.body.email; // string

  let cart = await Cart.findOne({ email: email });
  if (cart) {
    cart.products.push(newProducts);
    await cart.save();
    res.json({ result: `ok` });
  } else {
    console.log("No Products Found");
    cart = new Cart({
      email: email,
      products: [newProducts], // Initialize the products array with the new product
    });

    res.json({ result: `ok` });
    await cart.save();
  }
});
app.get("/cart", async (req, res) => {
  try {
    let email = req.query.email;
    let response = await Cart.find({ email: email });

    if (!response || response.length === 0) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const uniqueProducts = [];
    response[0].products.forEach((element) => {
      const exists = uniqueProducts.some(
        (prod) =>
          prod.id === element.id &&
          prod.color === element.color &&
          prod.size === element.size
      );

      if (!exists) {
        uniqueProducts.push({
          id: element.id,
          color: element.color,
          size: element.size,
          quantity: 1,
        });
      } else {
        const existingProduct = uniqueProducts.find(
          (prod) =>
            prod.id === element.id &&
            prod.color === element.color &&
            prod.size === element.size
        );
        existingProduct.quantity++;
      }
    });
    console.log(uniqueProducts);
    res.json(uniqueProducts);
  } catch (error) {
    console.error("Error fetching cart:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/users", async (req, res) => {
  let userData = await User.find({});
  res.json(userData);
});

app.post("/removeProducts", async (req, res) => {
  console.log(req.body);
  let data = await Cart.updateOne(
    { email: req.body.email }, // Match document with the provided email
    { $pull: { products: { id: req.body.id } } } // Pull the object from the 'products' array where 'id' matches
);
  res.json({ res: "ok" });
});
app.post("/login", async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  console.log(email, password);

  let responce = await User.findOne({ userEmail: email, password: password });
  if (responce) {
    res.json({
      result: "ok",
      userId: responce._id,
      username: responce.username,
      userEmail: responce.userEmail,
    });
  } else {
    res.json({ result: "Error" });
  }
});

app.post("/signup", async (req, res) => {
  let name = req.body.username;
  let email = req.body.email;
  let password = req.body.password;

  console.log(name, email, password);

  let oldUser = await User.findOne({ userEmail: email });
  console.log(oldUser?.userEmail, email);
  if (oldUser?.userEmail == email) {
    res.json({ result: "Email already Exist" });
  } else {
    const newUser = new User({
      username: name,
      userEmail: email,
      password: password,
    });

    newUser.save();
    res.json({ result: "ok" });
  }
});

app.listen(port, () => {
  console.log(`The Server Is live on http://localhost:${port}`);
});
