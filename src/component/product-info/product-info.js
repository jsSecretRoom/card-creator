import './product-info.scss'

function ProductInfo(){
    return(
        <div className="product-info">
            <div className="main-product">
                <p id="navigation-name">Мобільній телефон...  
                <span id="naim-product">+NAME PRODUCT...</span></p>
            </div>
            <div className="second">
                <div className="cherecters">
                    <p>Характеристики...</p>
                    <p>Характеристики...</p>
                    <p>Характеристики...</p>
                </div>
                <div className="price">
                    <p id="old-price">99 99</p>
                    <p id="new-price">999 999</p>
                </div>
            </div>
        </div>
    );
}
export default ProductInfo;