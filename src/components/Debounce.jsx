import { useState, useEffect } from 'react';

export default function Debounce() {
    const [search, setSearch] = useState('');
    const [debouncedSearch, setDebouncedSearch] = useState('');

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearch(search);
        }, 500); // 1000ms delay

        return () => {
            clearTimeout(handler);
        };
    }, [search]);

    return (
        <div className='container p-2'>
            <input 
                className='border border-gray-400 p-2'
                type="text" 
                value={search}
                onInput={(e) => setSearch(e.target.value)} 
            />
            <p>Search: {debouncedSearch}</p>
        </div>
    );
}
