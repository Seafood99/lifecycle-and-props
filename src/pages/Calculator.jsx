import React, { useState } from 'react';
import CalculatorA from '../components/CalculatorA';
import CalculatorB from '../components/CalculatorB';

export default function Calculator() {
    const [output, setOutput] = useState(0);

    const increment = () => setOutput(prevOutput => prevOutput + 1);
    const decrement = () => setOutput(prevOutput => prevOutput - 1);

    return (
        <div className='container grid grid-cols-2 min-h-screen'>
            <CalculatorA className="bg-red-200 h-full" output={output} />
            <CalculatorB className="bg-blue-200 h-full" onIncrement={increment} onDecrement={decrement} />
        </div>
    );
}
