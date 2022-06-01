import React from "react";
import { InputWithAddButton } from "../components/inputWithAddButton";
import { CalculationResult } from "../components/calculationResult";
import { ArithmeticAverageCalculation } from "../components/arithmeticAverageCalculation";
import { MedianCalculation } from "../components/medianCalculation";
import { ModeCalculation } from "../components/modeCalculation";
import { loadExtraAnimations } from "../components/extraAnimations";

/* FORM ELEMENTS ANIMATIONS */
loadExtraAnimations();


export default function AveragesPage() {
    return (
        <React.Fragment>
            <main className='container'>
                <div className='card card--medium'>
                    <p>fill the list with the numbers you want to work with</p>
                    <form className='main__card__form'>
                    {/* averages calculation components */}
                    <InputWithAddButton type="number" name="number_value" description="write the number" />
                    <h4 id="number_list">Number list:</h4>
                    <div className='main__card__buttons'>
                        <ArithmeticAverageCalculation />
                        <MedianCalculation />
                        <ModeCalculation />
                    </div>
                    <CalculationResult name="arithmetic_result"/>
                    {/* End of averages calculation */}
                    </form>
                </div>
            </main>
        </React.Fragment>
    );
}