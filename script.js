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

// Part 2
class PerishableProductProperties extends ProductProperties {
    constructor(name, price, quantity, expirationDate) {
        super(name, price, quantity); 
        this.expirationDate = expirationDate;
    }

    toString() {
        return `${super.toString()}, Expiration Date: ${this.expirationDate}`;
    }

}

const milk = new PerishableProductProperties("Milk", 1.50, 10, "2024-12-31");
const yogurt = new PerishableProductProperties("Yogurt", 2.00, 5, "2024-12-25");

console.log(milk.toString());
console.log(yogurt.toString());

milk.getTotalValue();
yogurt.getTotalValue();

// Part 3

