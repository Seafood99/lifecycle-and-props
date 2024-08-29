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
        }, 500); // 500ms debounce

        return () => {
            clearTimeout(handler);
        };
    }, [search]);

    // Filter products based on debounced search
    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(debouncedSearch.toLowerCase())
    );

    return (
        <div className="p-4 bg-gray-100">
            <input
                className="border border-gray-300 rounded-lg p-2 mb-4 w-full text-gray-700"
                type="text"
                placeholder="Search products..."
                value={search}
                onInput={(e) => setSearch(e.target.value)}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredProducts.map(product => (
                    <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
                        <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="font-bold text-lg text-gray-800 mb-2">{product.title}</h3>
                            <p className="text-gray-600">${product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
