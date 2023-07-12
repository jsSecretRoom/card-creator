import './slide.scss'

import ProductFoto from "../product-foto/product-foto"
import ProductInfo from "../product-info/product-info"

import img1 from '../../assets/imgs/phone.jpg'

function Slide(){
    return(
        <div className="slide">
            <div className="end-product-feach">
                <p>Нема в нвявності!</p>
            </div>

            <div className="slide-indicator">
                <ProductFoto productImg={img1}/>

                <ProductInfo navNaim="Мобільній телефон..." 
                productDeskNaim="+NAME PRODUCT..." 
                chrecter1="Характеристики..." 
                chrecter2="Характеристики..." 
                chrecter3="Характеристики..." 
                priceWithoutDisCOUNT="999 99" 
                priceWithDiscount="99 999"/>
            </div>
        </div>
    );
}

export default Slide