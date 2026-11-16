// 1. Product Variables

const productName = "Smart Phone";

const basePrice = 35000;

const discountPercent = 15;

const taxRate = 5;

const stockStatus = "in_stock";


// 2. Discount Function

function calculateDiscountedPrice(price, discount) {

    return price - (price * discount / 100);

}


// 3. Tax Function

function calculateTax(price, taxRate) {

    return price * taxRate / 100;

}


// 4. Final Price Function

function calculateFinalPrice(price, discount, taxRate) {

    let discountedPrice = calculateDiscountedPrice(price, discount);

    let tax = calculateTax(discountedPrice, taxRate);

    return discountedPrice + tax;

}


// 5. Free Shipping Function

function isFreeShipping(finalPrice) {

    if (finalPrice >= 500) {

        return "Free Shipping";

    } else {

        return "Shipping: Rs.49";

    }

}


// 6. Stock Message Function

function getStockMessage(status) {

    if (status === "in_stock") {

        return "In Stock";

    } else if (status === "limited") {

        return "Limited Stock";

    } else {

        return "Out of Stock";

    }

}


// 7. Calculate Values

let discountedPrice = calculateDiscountedPrice(
    basePrice,
    discountPercent
);

let taxAmount = calculateTax(
    discountedPrice,
    taxRate
);

let finalPrice = calculateFinalPrice(
    basePrice,
    discountPercent,
    taxRate
);

let shipping = isFreeShipping(finalPrice);

let stockMessage = getStockMessage(stockStatus);


// 8. Print Summary

console.log("===== PRODUCT PRICE SUMMARY =====");

console.log("Product Name:", productName);

console.log("Base Price: Rs.", basePrice);

console.log("Discounted Price: Rs.", discountedPrice);

console.log("Tax Amount: Rs.", taxAmount);

console.log("Final Price: Rs.", finalPrice);

console.log("Shipping:", shipping);

console.log("Stock Status:", stockMessage);

