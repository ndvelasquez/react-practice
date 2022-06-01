import React from 'react';
import { Link } from 'react-router-dom';
import ruler from '../ruler.svg';
import percentage from '../percentage-discount.svg';
import numbers from '../input-numbers.svg';
import { loadExtraAnimations } from '../components/extraAnimations';

loadExtraAnimations();

export default function HomePage() {
    return (
        <header>
            <nav>
                <div className="navbar">
                    <li><img src={ ruler } alt={ 'ruler' } height="40"/> <Link to="/figures">Figures</Link></li>
                    <li><img src={ percentage } alt={ 'percentage' } height="40"/><Link to="/discounts">Discounts</Link></li>
                    <li><img src={ numbers } alt={ 'numbers' } height="40"/><Link to="/averages">Averages</Link></li>
                </div>
            </nav>
        </header>
    );
}