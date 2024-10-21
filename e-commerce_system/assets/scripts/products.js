// Product class definition
class Product {
  constructor(id, name, price, category, tags) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
    this.tags = tags;
  }
}

// Inventory class definition
class Inventory {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    if (
      !product.id ||
      !product.name ||
      !product.price ||
      !product.category ||
      product.tags.length === 0
    ) {
      throw new Error("All fields must be filled out properly.");
    }

    if (this.getProductById(product.id)) {
      throw new Error("A product with this ID already exists.");
    }

    this.products.push(product);
  }

  removeProduct(productId) {
    const initialLength = this.products.length;
    this.products = this.products.filter((product) => product.id !== productId);
    if (this.products.length === initialLength) {
      throw new Error("Product not found in inventory.");
    }
  }

  getProductById(productId) {
    return this.products.find((product) => product.id === productId);
  }

  search(query) {
    query = query.toLowerCase().trim();
    return this.products.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.tags.some((tag) => tag.toLowerCase().includes(query))
    );
  }
}

// Cart class definition
class Cart {
  constructor() {
    this.items = [];
  }

  addItem(product, quantity) {
    if (quantity <= 0) {
      throw new Error("Quantity must be greater than 0");
    }
    const existingItem = this.items.find(
      (item) => item.product.id === product.id
    );
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({ product, quantity });
    }
  }

  removeItem(productId) {
    const initialLength = this.items.length;
    this.items = this.items.filter((item) => item.product.id !== productId);
    if (this.items.length === initialLength) {
      throw new Error("Product not found in cart.");
    }
  }

  getTotalPrice() {
    return this.items.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  }
}

// Helper function to format price in Kenyan Shillings
function formatPrice(price) {
  return `KES ${price.toFixed(2)}`;
}

// Create inventory and cart instances
const inventory = new Inventory();
const cart = new Cart();

// Reference to DOM elements
const productForm = document.getElementById("productForm");
const inventoryList = document.getElementById("inventoryList");
const cartList = document.getElementById("cartList");
const totalPriceElement = document.getElementById("totalPrice");
const searchQuery = document.getElementById("searchQuery");
const searchButton = document.getElementById("searchButton");
const searchResults = document.getElementById("searchResults");

// Function to display error messages
function displayErrorMessage(message) {
  alert(message); // For now, we'll use alert for simplicity. You can replace this with a more sophisticated UI later.
}

// Function to update the inventory UI
function updateInventoryList() {
  inventoryList.innerHTML = "";

  if (inventory.products.length === 0) {
    inventoryList.innerHTML = "<li>No products in inventory.</li>";
    return;
  }

  inventory.products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${product.name}</strong> - ${formatPrice(product.price)} [${
      product.category
    }]
      <button onclick="addToCart(${product.id})">Add to Cart</button>
      <button onclick="removeFromInventory(${product.id})">Remove</button>
    `;
    inventoryList.appendChild(li);
  });
}

// Function to update cart UI
function updateCartList() {
  cartList.innerHTML = "";

  if (cart.items.length === 0) {
    cartList.innerHTML = "<li>Your cart is empty.</li>";
    return;
  }

  cart.items.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${item.product.name}</strong> - ${formatPrice(
      item.product.price
    )} x ${item.quantity}
      <button onclick="removeFromCart(${item.product.id})">Remove</button>
    `;
    cartList.appendChild(li);
  });

  updateTotalPrice();
}

// Function to update total price in cart
function updateTotalPrice() {
  const total = cart.getTotalPrice();
  totalPriceElement.textContent = `Total Price: ${formatPrice(total)}`;
}

// Add a new product to the inventory
productForm.addEventListener("submit", function (event) {
  event.preventDefault();

  try {
    const id = parseInt(document.getElementById("productId").value);
    const name = document.getElementById("productName").value.trim();
    const price = parseFloat(document.getElementById("productPrice").value);
    const category = document.getElementById("productCategory").value.trim();
    const tags = document
      .getElementById("productTags")
      .value.split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag !== "");

    const newProduct = new Product(id, name, price, category, tags);
    inventory.addProduct(newProduct);

    updateInventoryList();
    productForm.reset();
  } catch (error) {
    displayErrorMessage(error.message);
  }
});

// Remove product from inventory
function removeFromInventory(productId) {
  try {
    inventory.removeProduct(productId);
    updateInventoryList();
  } catch (error) {
    displayErrorMessage(error.message);
  }
}

// Add product to cart
function addToCart(productId) {
  try {
    const product = inventory.getProductById(productId);
    if (!product) {
      throw new Error("Product not found in inventory.");
    }
    cart.addItem(product, 1);
    updateCartList();
    alert(`${product.name} added to the cart!`);
  } catch (error) {
    displayErrorMessage(error.message);
  }
}

// Remove product from cart
function removeFromCart(productId) {
  try {
    cart.removeItem(productId);
    updateCartList();
  } catch (error) {
    displayErrorMessage(error.message);
  }
}

// Improved search functionality
function performSearch() {
  try {
    const query = searchQuery.value.trim();
    if (query === "") {
      throw new Error("Please enter a search query.");
    }
    const results = inventory.search(query);
    displaySearchResults(results);
  } catch (error) {
    displayErrorMessage(error.message);
  }
}

// Display search results
function displaySearchResults(results) {
  searchResults.innerHTML = "";

  if (results.length === 0) {
    searchResults.innerHTML = "<li>No products found.</li>";
    return;
  }

  results.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${product.name}</strong> - ${formatPrice(product.price)} [${
      product.category
    }]
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    searchResults.appendChild(li);
  });
}

// Event listeners
searchButton.addEventListener("click", performSearch);
searchQuery.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    performSearch();
  }
});

// Initial UI update
updateInventoryList();
updateCartList();
