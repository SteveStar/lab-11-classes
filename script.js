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