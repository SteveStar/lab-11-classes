//Part 1
class ProductProperties {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    getTotalValue() {
        let totalValue = this.price * this.quantity;
        console.log(totalValue);
        return totalValue;
    }

    toString() {
        return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}`;
    }

    static applyDiscount(products, discount) {
        if (discount < 0 || discount > 1) {
            console.error("Discount must be between 0 and 1.");
            return;
        }
        products.forEach(product => {
            product.price -= product.price * discount;
        });
    }
}

let product = new ProductProperties("Apples", 2.50, 50);

product.getTotalValue();
console.log(product.toString());

// Part 2 & 3
class PerishableProductProperties extends ProductProperties {
    constructor(name, price, quantity, expirationDate) {
        super(name, price, quantity); 
        this.expirationDate = expirationDate;
    }

    toString() {
        return `${super.toString()}, Expiration Date: ${this.expirationDate}`;
    }

}

// this is before the discounts
console.log("Before Discount:");
console.log(milk.toString());
console.log(yogurt.toString());
console.log(bread.toString());

// the discount is applied
ProductProperties.applyDiscount([milk, yogurt, orange], 0.1);

// this is after discount
console.log("\nAfter Discount:");
console.log(milk.toString());
console.log(yogurt.toString());
console.log(bread.toString());

// Part 4

class Store {
    constructor() {
        this.inventory = []; // Array to store products 
    }

    addProduct(product) {
        if (product instanceof ProductProperties) {
            this.inventory.push(product);
        } else {
            console.error("Only instances of ProductProperties or its subclasses can be added.");
        }
    }

    getInventoryValue() {
        return this.inventory.reduce((total, product) => total + product.getTotalValue(), 0);
    }

    findProductByName(name) {
        return this.inventory.find(product => product.name === name) || null;
    }
}

const myStore = new Store();

const milk = new PerishableProductProperties("Milk", 1.50, 10, "2024-12-31");
const yogurt = new PerishableProductProperties("Yogurt", 2.00, 5, "2024-12-25");
const orange = new ProductProperties("Bread", 2.50, 8);

myStore.addProduct(milk);
myStore.addProduct(yogurt);
myStore.addProduct(bread);

console.log("Total Inventory Value: $" + myStore.getInventoryValue().toFixed(2));

// This is to find the product, whichever is actually listed in the list
const foundProduct = myStore.findProductByName("Yogurt");

// Conditional if its found
if (foundProduct) {
    console.log("Found Product:", foundProduct.toString());
} else {
    console.log("Product not found.");
}

// Additional conditional if attempting to find something that doesnt exist
const missingProduct = myStore.findProductByName("Eggs");
if (missingProduct) {
    console.log("Found Product:", missingProduct.toString());
} else {
    console.log("Product not found.");
}


// Part 5

// Making a separate store
const newStore = new Store();

// New set of products
const lettuce = new PerishableProductProperties("Lettuce", 1.20, 8, "2024-11-11");
const beef = new PerishableProductProperties("Beef", 1.60, 2, "2024-12-21");
const rock = new ProductProperties("Rock", 2.10, 4);
const toy = new ProductProperties("Toy", 1.95, 1);
const fish = new PerishableProductProperties("Fish", 1.30, 5, "2024-12-22");