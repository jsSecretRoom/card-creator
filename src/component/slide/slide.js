import './slide.scss'

import ProductFoto from "../product-foto/product-foto"
import ProductInfo from "../product-info/product-info"

import img1 from '../../assets/imgs/phone.jpg'

function Slide({category, productName, description1, description2,
    description3, priceWithoutDiscount, discountPrice, fotoLink}){

    return(
        <div className="slide">
            <div className="end-product-feach">
                <p>Нема в нвявності!</p>
            </div>

            <div className="slide-indicator">
                <ProductFoto productImg={img1}/>

                <ProductInfo 
                    navNaim={category} 
                    productDeskNaim={productName} 
                    chrecter1={description1} 
                    chrecter2={description2} 
                    chrecter3={description3} 
                    priceWithoutDisCOUNT={priceWithoutDiscount} 
                    priceWithDiscount={discountPrice}
                    
                />
            </div>
        </div>
    );
}

export default Slide