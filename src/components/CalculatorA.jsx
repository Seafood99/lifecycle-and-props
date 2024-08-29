import React from 'react';

export default function CalculatorA({ className, output }) {
    return (
        <div className={className}>
            <h1 className='font-bold'>Calculator A</h1>
            <p>Menampilkan output calculator</p>

            <div className='p-4 border border-black'>
                <p>Output:</p>
                <p>{output}</p>
            </div>
        </div>
    );
}
