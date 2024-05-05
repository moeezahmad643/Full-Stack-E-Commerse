const app = require("express")();
const port = 3000;
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const connection = require("./Connection/connection");
const {
  setProductInCart,
  getCart,
  removeCartProduct,
} = require("./Function/cartFunctions");
const { GetUser, NewUser } = require("./Function/UserFunctions");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connection().then(() => {
  console.log("connection Created Succesfully");
});

app.get("/products", async (req, res) => {
  let products = await Products.find({});
  if (products) {
    res.status(200).json(products);
  } else {
    res.status(404).json({ responce: "Data Not Found" });
  }
});

app.get("/products/:product", async (req, res) => {
  let products = await Products.find({ id: req.params.product });
  if (products) {
    res.status(200).json(products);
  } else {
    res.status(404).json({ result: "data not found" });
  }
});

app.post("/cart", async (req, res) => {
  let newProducts = req.body.product; // object
  let email = req.body.email; // string
  try {
    let responce = await setProductInCart({ email: email }, newProducts);
    res.status(200).json({ responce: "Data Entered" + responce });
  } catch (error) {
    res.status(404).json({ responce: "Data Not found" });
  }
});
app.get("/cart", async (req, res) => {
  let email = req.query.email;
  try {
    let responce = await getCart({ email: email });
    res.status(200).json(responce);
  } catch (error) {
    res.status(404).json({ responce: "Data Not Found" });
  }
});

app.get("/users", async (req, res) => {
  let userData = await GetUser();
  res.json(userData);
});

app.post("/removeProducts", async (req, res) => {
  let ProductId = req.body.id;
  let email = req.body.email;
  try {
    let data = await removeCartProduct({ email: email }, id);
    if (data) {
      res.status(200).json({ res: "ok" });
    } else {
      res.status(404).json({ res: "Product to Remove Not Found" });
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({ res: "ok" });
  }
});
app.post("/login", async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  console.log(email, password);

  let responce = await GetUser(email, password);
  if (responce) {
    res.json({
      result: "ok",
      userId: responce._id,
      username: responce.username,
      userEmail: responce.userEmail,
    });
  } else {
    res.status(404).json({ result: "Error" });
  }
});

app.post("/signup", async (req, res) => {
  let name = req.body.username;
  let email = req.body.email;
  let password = req.body.password;

  console.log(name, email, password);

  let responce = await GetUser(email, password);
  if (responce?.userEmail == email) {
    res.status(200).json({ result: "Email already Exist" });
  } else {
    let data = await NewUser(name, email, password);
    if (data) {
      res.status(200).json({ result: "User Created" });
    } else {
      res.status(404).json({ result: "Server Error" });
    }
  }

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
