import React from "react";
import { SideInput } from '../components/sideInput';
import { SquareAreaCalculationButton } from '../components/squareAreaCalculationButton';
import { SquarePerimeterCalculationButton } from '../components/squarePerimeterCalculationButton';
import { TriangleAreaCalculationButton } from '../components/triangleAreaCalculationButton';
import { TrianglePerimeterCalculationButton } from '../components/trianglePerimeterCalculationButton';
import { CircleAreaCalculationButton } from '../components/circleAreaCalculationButton';
import { CirclePerimeterCalculationButton } from '../components/circlePerimeterCalculationButton';
import { CalculationResult } from '../components/calculationResult';
import { loadExtraAnimations } from "../components/extraAnimations";

/* FORM ELEMENTS ANIMATIONS */
loadExtraAnimations();

export default function FiguresPage() {
    return (
        <React.Fragment>
            <main className='container'>
                <div className='card'>
                    <h2>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 2c1.654 0 3 1.346 3 3v14c0 1.654-1.346 3-3 3h-14c-1.654 0-3-1.346-3-3v-14c0-1.654 1.346-3 3-3h14zm0-2h-14c-2.762 0-5 2.239-5 5v14c0 2.761 2.238 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5z"/></svg>
                        Square
                    </h2>
                    <form className='main__card__form'>
                    {/* square calculation components */}
                    <SideInput type="number" name="square_side" description="side length in centimeters (cm)"/>
                    <div className='main__card__buttons'>
                        <SquareAreaCalculationButton />
                        <SquarePerimeterCalculationButton />
                    </div>
                    <CalculationResult name="square_result"/>
                    {/* End of square calculation components */}
                    </form>
                </div>

                <div className='card card--medium'>
                    <h2>
                        <svg className="figure" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.574 3.712c.195-.323.662-.323.857 0l9.37 15.545c.2.333-.039.757-.429.757l-18.668-.006c-.385 0-.629-.422-.428-.758l9.298-15.538zm.429-2.483c-.76 0-1.521.37-1.966 1.111l-9.707 16.18c-.915 1.523.182 3.472 1.965 3.472h19.416c1.783 0 2.879-1.949 1.965-3.472l-9.707-16.18c-.446-.741-1.205-1.111-1.966-1.111z"/></svg>
                        Triangle
                    </h2>
                    <form className='main__card__form'>
                        {/* triangle calculation components */}
                        <SideInput type="number" name="triangle_side1" description="first side (cm)"/>
                        <SideInput type="number" name="triangle_side2" description="second side (cm)"/>
                        <SideInput type="number" name="triangle_base" description="base (cm)"/>
                        <SideInput type="number" name="triangle_height" description="height (cm)"/>
                        <div className='main__card__buttons'>
                        <TriangleAreaCalculationButton />
                        <TrianglePerimeterCalculationButton />
                        </div>
                        <CalculationResult name="triangle_result"/>
                        {/* End of triangle calculation components */}
                    </form>
                </div>

                <div className='card'>
                    <h2>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z"/></svg>
                        Circle
                    </h2>
                    <form className='main__card__form'>
                        {/* circle calculation components */}
                        <SideInput type="number" name="radius" description="radius length in centimeters (cm)"/>
                        <div className='main__card__buttons'>
                        <CircleAreaCalculationButton />
                        <CirclePerimeterCalculationButton />
                        </div>
                        <CalculationResult name="circle_result"/>
                        {/* End of circle calculation components */}
                    </form>
                </div>
            </main>
        </React.Fragment>
    );
}