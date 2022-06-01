import React from "react";
import { SideInput } from "../components/sideInput";
import { DiscountCalculations } from "../components/discountCalculations";
import { CalculationResult } from "../components/calculationResult";
import { loadExtraAnimations } from "../components/extraAnimations";

/* FORM ELEMENTS ANIMATIONS */
loadExtraAnimations();

export default function DiscountsPage() {
    return (
        <React.Fragment>
            <main className='container'>
                <div className='card'>
                    <form className='main__card__form'>
                    {/* discount calculation components */}
                    <SideInput type="number" name="price" description="price"/>
                    <SideInput type="text" name="coupon" description="do you have a coupon?"/>
                    <div className='main__card__buttons'>
                        <DiscountCalculations />
                    </div>
                    <CalculationResult name="price_result"/>
                    {/* End of discount calculation */}
                    </form>
                    <h5>Hint: use 10PERCENTOFF, SPECIALGIFT or LUCKYDAYS as coupons 😎</h5>
                </div>
            </main>
        </React.Fragment>
    );
}