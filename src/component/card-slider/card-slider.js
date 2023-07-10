import './card-slider.scss'

import ProductFoto from "../product-foto/product-foto";
import ProductInfo from "../product-info/product-info";

function ProductSliderIlustration() {
    return (
        <div className="product-slider">
            <div className="slider-continer">
                <button className="left"><img src="./src/img/left.svg" alt=""/></button>
                <button className="right"><img src="./src/img/right.svg" alt=""/></button>
                <div className="slides">

                    <div className="slide">
                        <div className="end-product-feach">
                            <p>Нема в нвявності!</p>
                        </div>

                        <div className="slide-indicator">
                            <ProductFoto/>
                            <ProductInfo/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductSliderIlustration;