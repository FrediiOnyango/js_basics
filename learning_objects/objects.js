// Product Object Constructor

function Product(id, name, price, category, tags) {
  this.id = id;
  this.name = name;
  this.price = typeof price === "number" ? price : 0;
  this.category = category;
  this.tags = Array.isArray(tags) ? tags : [];
}

// Method to Apply Discount

Product.prototype.applyDiscount = function (percentage) {
  if (percentage >= 0 && percentage <= 100) {
    this.price = this.price - this.price * (percentage / 100);
  }
};

// Inventory Object and Methods

function Inventory() {
  this.products = [];
}

// Method to add a product
Inventory.prototype.addProduct = function (product) {
  this.products.push(product);
};

// Method to remove a product by ID
Inventory.prototype.removeProduct = function (productId) {
  this.products = this.products.filter((product) => product.id !== productId);
};

// Method to get a product by ID
Inventory.prototype.getProductById = function (productId) {
  const product = this.products.find((product) => product.id === productId);
  return product ? product : null;
};


// Method to get a product by category
Inventory.prototype.getProductByCategory = function (category) {
  return this.products.filter((product) => product.category === category);
};

// Method to apply discount to all products in a category
Inventory.prototype.applyDiscountToCategory = function (
  category,
  discountPercentage
) {
  this.products.forEach((product) => {
    if (product.category === category) {
      product.applyDiscount(discountPercentage);
    }
  });
};


// Shopping Cart Object and Methods



// Alternative (handling invalid quantities in updateQuantity):

ShoppingCart.prototype.updateQuantity = function (productId, newQuantity) {
  const item = this.items.find((item) => item.product.id === productId);
  if (item && newQuantity > 0) {
    item.quantity = newQuantity;
  } else if (newQuantity <= 0) {
    this.removeItem(productId);
  }
};

