// Creating a Product

function Product(id, name, price, category, tags) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.category = category;
  this.tags = tags || [];


  this.applyDiscount(percentage) = function () {
    this.price*=(1 - (percentage / 100))
  }
};

const Inventory = {
  products: [],

  addProduct: function (product) {
    this.products.push(product)
    return this.products
  },
  removeProduct: function (productId) {
    this.products = this.products.filter(product => product.id !== productId);
    return this.products;
  },
  getProductById: function (productId) {
        return this.products.find(product => product.id === productId);
    },

    getProductsByCategory: function(category) {
        return this.products.filter(product => product.category === category);
    },

    applyDiscountToCategory: function(category, discountPercentage) {
        this.getProductsByCategory(category).forEach(product => product.applyDiscount(discountPercentage));
    }

}

const SearchEngine = {
    search: function(inventory, query) {
        const regexPattern = new RegExp(query.split('').join('.*'), 'i');
        return inventory.products.filter(product => 
            regexPattern.test(product.name) || 
            product.tags.some(tag => regexPattern.test(tag))
        );
    }
};

const ShoppingCart = {
    items: [], 

    addItem: function(product, quantity) { 
        const existingProduct = this.items.find(item => item.product.id === product.id);
        if (existingProduct) {
            existingProduct.quantity += quantity;
        } else {
            this.items.push({ product, quantity });
        }
    },

    removeItem: function(productId) { 
        this.items = this.items.filter(item => item.product.id !== productId);
    },

    updateQuantity: function(productId, newQuantity) { 
        const item = this.items.find(item => item.product.id === productId);
        if (item) {
            item.quantity = newQuantity;
        }
    },

    getTotalPrice: function() { 
        return this.items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
    },

    applyDiscountCode: function(code) { 
        const discount = 0.1; 
        if (code === 'DISCOUNT10') {
            return this.getTotalPrice() * (1 - discount);
        }
        return this.getTotalPrice();
    }
};


