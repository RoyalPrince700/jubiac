import React, { useState, useEffect } from 'react';

const FoodMenu = ({ vendorId }) => {
    const [menu, setMenu] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch(`/api/food-menu?vendorId=${vendorId}`)
            .then(res => res.json())
            .then(data => setMenu(data.menu))
            .catch(err => console.error(err));
    }, [vendorId]);

    const handleAddToCart = (item, customizations) => {
        setCart(prevCart => [...prevCart, { ...item, customizations, quantity: 1 }]);
    };

    return (
        <div>
            <h2>Food Menu</h2>
            <ul>
                {menu.map(item => (
                    <li key={item.id}>
                        <h3>{item.productName}</h3>
                        <p>{item.description}</p>
                        <p>Price: ${item.price}</p>
                        {/* Render customizations dynamically */}
                        {item.customizations.map((custom, index) => (
                            <label key={index}>
                                <input type="checkbox" value={custom} />
                                {custom}
                            </label>
                        ))}
                        <button onClick={() => handleAddToCart(item, /* selected customizations */)}>
                            Add to Cart
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FoodMenu;
