import React from "react";
import { Link } from "react-router-dom";
import Chart from "../../Components/Charts/chart";
import './productItem.css'
import { ProductsData } from "../../data";
import PublishIcon from '@mui/icons-material/Publish';

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
                    <Chart title={'Sale In Month'} data={ProductsData} dataKey='sale'/>
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img className="img_productTop" src="https://m.media-amazon.com/images/I/71TPda7cwUL._AC_SL1500_.jpg" alt="MacBook Pro" />
                        <span className="productName">MacBook Pro M2</span>
                    </div>
                    <div className="productInfoButton">
                        <div className="productInfoItem">
                            <div className="productInfoKye">ID:</div>
                            <div className="productInfoValue">MB145</div>
                        </div>
                        <div className="productInfoItem">
                            <div className="productInfoKye">Price:</div>
                            <div className="productInfoValue">$1,299</div>
                        </div>
                        <div className="productInfoItem">
                            <div className="productInfoKye">Storage:</div>
                            <div className="productInfoValue">512GB SSD</div>
                        </div>
                        <div className="productInfoItem">
                            <div className="productInfoKye">RAM:</div>
                            <div className="productInfoValue">16GB</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productForm" action="">
                    <div className="productLeft">
                        <label htmlFor="">Product Name</label>
                        <input type="text" placeholder="Laptop..."/>

                        <label htmlFor="">Price</label>
                        <input type="text"placeholder="$50000" />

                        <label htmlFor="">Storage</label>
                        <input type="text" placeholder="256 SSD"/>

                        <label htmlFor="">RAM</label>
                        <input type="text" placeholder="32GB"/>
                    </div>
                    <div className="productRight">
                        <div className="productUploader">
                            <img className="img_uploader" src="https://m.media-amazon.com/images/I/71TPda7cwUL._AC_SL1500_.jpg" alt="Product-img" srcset="" />
                            <label htmlFor="">
                            <PublishIcon/>
                            </label>
                            <input type="file" style={{display:"none"}} />
                        </div>
                         <button className="uploader_btn">upload(Edit)</button>
                    </div>

                </form>
            </div>
        </div>
     );
}

export default ProductItem;
