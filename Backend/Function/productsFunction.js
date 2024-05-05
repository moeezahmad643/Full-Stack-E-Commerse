const Products = require("../Schema/productsScema");

async function getProducts(product={}) {
  try {
    let product = await new Products(product);
    return await Products.save();
  } catch (error) {
    throw error
  }
}
async function getProducts(product = {}) {
  try {
    return await Products.find(UpdateProduct);
  } catch (err) {
    console.log(err);
  }
}
async function UpdateProduct(FilterId, Product) {
  try {
    return await updateOne(FilterId, Product);
  } catch (error) {
    throw error
  }
}

module.exports = {
  getProducts,
  UpdateProduct,
  getProducts
};
