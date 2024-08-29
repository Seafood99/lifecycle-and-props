import React, { useState, useEffect } from 'react';

export default function Products() {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');
    const [debouncedSearch, setDebouncedSearch] = useState('');

    useEffect(() => {
        // Fetch products from dummyjson
        const fetchProducts = async () => {
            const response = await fetch('https://dummyjson.com/products');
            const data = await response.json();
            setProducts(data.products);
        };
        fetchProducts();
    }, []);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearch(search);
        }, 500); // 1000ms debounce

        return () => {
            clearTimeout(handler);
        };
    }, [search]);

    // Filter products based on debounced search
    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(debouncedSearch.toLowerCase())
    );

    return (
        <div>
            <input
                className='border border-gray-400 p-2'
                type="text"
                placeholder="Search products..."
                value={search}
                onInput={(e) => setSearch(e.target.value)}
            />
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {filteredProducts.map(product => (
                    <div key={product.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', width: '200px' }}>
                        <img src={product.thumbnail} alt={product.title} style={{ width: '100%' }} />
                        <h3>{product.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}