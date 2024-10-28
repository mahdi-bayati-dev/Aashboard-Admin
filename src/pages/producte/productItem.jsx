import React from "react";
import { Link } from "react-router-dom";
import './productItem.css'
function ProductItem() {
    return ( 
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="product">Product</h1>
                <Link to={'./newProduct'}>
                <button className="productAddBtn">create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">

                </div>
                div.productTopRight
            </div>
            
        </div>
     );
}

export default ProductItem;