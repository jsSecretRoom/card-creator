import './product-slider-ilustration.scss'

import Slide from '../slide/slide';


import left from '../../assets/icons/left.svg'
import right from '../../assets/icons/right.svg'

function ProductSliderIlustration({data}) {

    const productSlide = data.map(items => {
        return (
            <Slide {...items}/>
        )
        
    });


    return (
        <div className="product-slider">
            <div className="slider-continer">
                <button className="left"><img src={left} alt=""/></button>
                <button className="right"><img src={right} alt=""/></button>
                <div className="slides">
                    {productSlide}
                </div>
            </div>
        </div>
    );
}

export default ProductSliderIlustration;