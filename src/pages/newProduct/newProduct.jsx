import { useEffect, useState } from "react";

import './newProduct.css';
import PublishIcon from '@mui/icons-material/Publish';


function NewProduct() {
    const [product, setProduct] = useState({
        name: '',
        price: '',
        Hardware: '',
        Software: '',
    });
    const [imgProduct, setImgProduct] = useState(
        "./img-new-user/Mystery-Person-default-wordpress-avatar.webp"
    );

    // تابع handleSubmit خارج از sendData تعریف می‌شود
    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (product.name && product.price && product.Hardware && product.Software) {
            fetch('https://test-programing-7c8bd-default-rtdb.firebaseio.com/NewProduct.json', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...product, imageUrl: imgProduct }),
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => {
                console.log("Product added:", data);
                // نمایش پیام موفقیت
                alert("محصول با موفقیت ارسال شد!");
                // خالی کردن ورودی‌ها
                setProduct({
                    name: '',
                    price: '',
                    Hardware: '',
                    Software: '',
                });
            })
            .catch(error => {
                console.error("Error:", error);
                alert("خطا در ارسال محصول. لطفاً دوباره تلاش کنید.");
            });
        } else {
            alert("لطفاً همه فیلدها را پر کنید.");
        }
    };
    

    const inputFile = (event) => {
        const file = event.target.files[0];
        if (!file) return;
        const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
        if (!allowedTypes.includes(file.type)) {
            alert("Please select a valid image file (JPEG, PNG, WEBP).");
            return;
        }
        const maxSize = 1 * 1024 * 1024; // 1 MB
        if (file.size > maxSize) {
            alert("The file size exceeds 1 MB. Please select a smaller image.");
            return;
        }
        const fileReader = new FileReader();
        fileReader.onload = () => setImgProduct(fileReader.result);
        fileReader.onerror = () => {
            console.error("Error reading the file");
            alert("Error loading the image.");
        };
        fileReader.readAsDataURL(file);
    };

    return (
        <div className="product">
        
            <div className="productBottom">
                <form className="productForm" onSubmit={handleSubmit}>
                    
                    <div className="productLeft">
                        <label htmlFor="">Product Name</label>
                        <input
                            type="text"
                            placeholder="لپ تاپ"
                            value={product.name}
                            onChange={(e) => setProduct({ ...product, name: e.target.value })}
                        />

                        <label htmlFor="">Price</label>
                        <input
                            type="text"
                            placeholder="تومان"
                            value={product.price}
                            onChange={(e) => setProduct({ ...product, price: e.target.value })}
                        />

                        <label htmlFor="">Hardware</label>
                        <input
                            type="text"
                            placeholder="نگهداری شارژ"
                            value={product.Hardware}
                            onChange={(e) => setProduct({ ...product, Hardware: e.target.value })}
                        />

                        <label htmlFor="">Software</label>
                        <input
                            type="text"
                            placeholder="ضد آب"
                            value={product.Software}
                            onChange={(e) => setProduct({ ...product, Software: e.target.value })}
                        />
                        <button className="uploader_btn_product" type="submit">ارسال</button>
                    </div>
                    <div className="productRight">
                    <p className="p_text_product">اضافه کردن محصول</p>
                        <div className="productUploader">
                        
                            <img className="img_uploader" src={imgProduct} alt="Product-img" />
                            <label htmlFor="file-upload">
                                <PublishIcon />
                            </label>
                            <input
                                id="file-upload"
                                type="file"
                                style={{ display: "none" }}
                                onChange={inputFile}
                            />
                        </div>
                        
                    </div>
                </form>
            </div>
        </div>
    );
}

export default NewProduct;
