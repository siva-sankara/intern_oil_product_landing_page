import React from 'react';
import { Link , useNavigate} from 'react-router-dom';

const products = [
    { imageUrl: 'pr5.png', name: 'Pet Bottle', litres: '500 ml'},
    { imageUrl: 'pr3.png', name: 'Pouches', litres: '500 ml'},
    { imageUrl: 'pr1.png', name: 'Jerry can', litres: '5 litres'},
    { imageUrl: 'pr2.png', name: 'Tins', litres: '10 Litres'},
]

function Size() {
    const navigate = useNavigate();
    const handleNavigation = (path) => {
        window.scrollTo(0, 0);
        navigate(path);
    };
    return (
        <div className="size-container">
            <h2 className="size-heading">Discover the Range of Mustard Oil Sizes</h2>
            <div className="size-grid">
                {products.map((product, index) => (
                    <Link to="/product" onClick={() => handleNavigation('/')} key={index} className="size-item">
                        <img src={process.env.PUBLIC_URL + '/' + product.imageUrl} alt={product.name} />
                        <p className="product-name">{product.name}</p>
                        <p classname="product-litres">{product.litres}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Size;