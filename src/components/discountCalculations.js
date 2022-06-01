import React from "react";

function DiscountCalculations() {
    /* I calculate the discount percentage I want to apply */
    const discountPercentage = (discount) => 100 - discount;
    /* I apply the discount to the product and return the discounted price. */
    const priceWithDiscount = (price, discountCoupon) => {
        const userCoupon = coupons.find(coupon => coupon.name === discountCoupon);

        if (!userCoupon) {
            alert(`the ${discountCoupon} coupon does not exist`);
            return price;
        }
        else {
            const finalPrice = (price * discountPercentage(userCoupon.discount)) / 100;
            return finalPrice;
        }
        

    };
    
    /*DISCOUNT COUPONS*/
    const coupons = [
        {
            name: '10PERCENTOFF',
            discount: 10
        },
        {
            name: '20PERCENTOFF',
            discount: 20
        },
        {
            name: 'SPECIALGIFT',
            discount: 50
        },
        {
            name: '30PERCENTOFF',
            discount: 30
        },
        {
            name: 'LUCKYDAYS',
            discount: 35
        }
    ];
    
    /*INTERACTION WITH HTML */
    const calculatePriceWithDiscount = () => {
        const priceValue = document.getElementById("price").value;
        const couponValue = document.getElementById("coupon").value;
    
        const valuePriceWithDiscount = priceWithDiscount(priceValue, couponValue);
    
        document.getElementById("price_result").innerText = `The final price is: $ ${valuePriceWithDiscount}`;
    }

    return (
        <button type="button"
        onClick={calculatePriceWithDiscount}
        >Calculate Price</button>
    );
}

export { DiscountCalculations };