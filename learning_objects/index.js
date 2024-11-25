function Product(id, name, price, category, tags) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.category = category;
  this.tags = tags;
}

// Create Products
const product1 = new Product(1, "Laptop", 1000, "Electronics", [
  "computer",
  "gadget",
]);
const product2 = new Product(2, "Phone", 500, "Electronics", [
  "mobile",
  "smartphone",
]);
const product3 = new Product(3, "Shoes", 100, "Clothing", [
  "fashion",
  "footwear",
]);

// Create Inventory and add products
const inventory = new Inventory();
inventory.addProduct(product1);
inventory.addProduct(product2);
inventory.addProduct(product3);

// Apply discount to Electronics
inventory.applyDiscountToCategory("Electronics", 10); // 10% discount on Electronics

function SearchEngine() {}
// Search for a product
const searchEngine = new SearchEngine();
const results = searchEngine.search(inventory, "phone");
console.log(results); // Should return product2

function ShoppingCart() {
  this.items = []; //Property to store array of products and their quantities
}
// Create ShoppingCart and add items
const cart = new ShoppingCart();
cart.addItem(product1, 2); // Add 2 laptops
cart.addItem(product3, 1); // Add 1 pair of shoes

// Calculate total price
console.log(cart.getTotalPrice()); // Should calculate total price of items

// Apply discount code
console.log(cart.applyDiscountCode("SAVE10")); // Apply 10% discount



// Task 1: getProductById(productId)

Inventory.prototype.getProductById = function (productId) {
  for (var i = 0; i < this.products.length; i++) {
    if (this.products[i].id === productId) {
      return this.products[i]; // Return the matching product
    }
  }
  return null; // Return null if no product is found
};


// Task 2: getProductsByCategory(category)

Inventory.prototype.getProductsByCategory = function (category) {
  var matchingProducts = [];
  for (var i = 0; i < this.products.length; i++) {
    if (this.products[i].category === category) {
      matchingProducts.push(this.products[i]); // Add the matching product to the array
    }
  }
  return matchingProducts; // Return the array of matching products
};


// Task 3: SearchEngine.search(inventory, query)


SearchEngine.prototype.search = function (inventory, query) {
  var lowerQuery = query.toLowerCase();
  var matchingProducts = [];

  // Loop through all products
  for (var i = 0; i < inventory.products.length; i++) {
    var product = inventory.products[i];

    // Check if product name contains the query
    if (product.name.toLowerCase().indexOf(lowerQuery) !== -1) {
      matchingProducts.push(product);
      continue; // Skip to the next iteration if name matches
    }

    // Check if any of the tags contain the query
    for (var j = 0; j < product.tags.length; j++) {
      if (product.tags[j].toLowerCase().indexOf(lowerQuery) !== -1) {
        matchingProducts.push(product);
        break; // Exit the inner loop if a matching tag is found
      }
    }
  }

  return matchingProducts;
};


// Basic Constructor Function for Product and Inventory

// Product Constructor:

function Product(id, name, price, category, tags) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.category = category;
  this.tags = tags;
}


// Inventory Constructor:

function Inventory() {
  this.products = [];
}

Inventory.prototype.addProduct = function (product) {
  this.products.push(product);
};

Inventory.prototype.removeProduct = function (productId) {
  for (var i = 0; i < this.products.length; i++) {
    if (this.products[i].id === productId) {
      this.products.splice(i, 1); // Remove the product from the array
      return true; // Return true if the product is found and removed
    }
  }
  return false; // Return false if no product is found
};


// Constructor for Cart:

function Cart() {
  this.items = [];
}

Cart.prototype.addItem = function (product, quantity) {
  for (var i = 0; i < this.items.length; i++) {
    if (this.items[i].product.id === product.id) {
      this.items[i].quantity += quantity; // Increase quantity if the product is already in the cart
      return;
    }
  }
  // If the product is not in the cart, add it
  this.items.push({ product: product, quantity: quantity });
};

Cart.prototype.removeItem = function (productId) {
  for (var i = 0; i < this.items.length; i++) {
    if (this.items[i].product.id === productId) {
      this.items.splice(i, 1); // Remove the item from the cart
      return;
    }
  }
};

Cart.prototype.getTotalPrice = function () {
  var total = 0;
  for (var i = 0; i < this.items.length; i++) {
    total += this.items[i].product.price * this.items[i].quantity;
  }
  return total;
};
