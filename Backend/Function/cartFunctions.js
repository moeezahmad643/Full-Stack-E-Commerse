const Cart = require("../Schema/cartSchema");

async function getCart(uniqueId) {
  try {
    return await Cart.find(uniqueId);
  } catch (error) {
    throw error;
  }
}

async function setProductInCart(uniqueId, product) {
  try {
    let data = await Cart.find(uniqueId);
    data.products.push(product);
    await data.save();
    return data;
  } catch (error) {
    throw error;
  }
}

async function removeCartProduct(uniqueId, productId) {
  try {
    let cart = await Cart.find(uniqueId);
    let updatedCart = cart.products.filter(
      (element) => element.id != productId
    );
    cart = updatedCart;
    cart.save();
    return await cart;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getCart,
  removeCartProduct,
  setProductInCart,
};
