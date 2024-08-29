import React from 'react';

export default function CalculatorB({ className, onIncrement, onDecrement }) {
    return (
        <div className={className}>
            <h1 className='font-bold'>Calculator B</h1>
            <p>Menampilkan kontroler calculator</p>

            <div>
                <button onClick={onIncrement} className='bg-blue-400 hover:bg-blue-500 p-3 m-2'>Increment</button>
                <button onClick={onDecrement} className='bg-red-400 hover:bg-red-500 p-3 m-2'>Decrement</button>
            </div>
        </div>
    );
}
