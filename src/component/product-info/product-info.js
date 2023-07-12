import './product-info.scss'

function ProductInfo({navNaim, productDeskNaim, chrecter1, chrecter2, chrecter3, priceWithoutDisCOUNT, priceWithDiscount}){
    return(
        <div className="product-info">
            <div className="main-product">
                <p id="navigation-name">  
                    <span id="naim-product">{navNaim}</span>{productDeskNaim}
                </p>
            </div>
            <div className="second">
                <div className="cherecters">
                    <p>{chrecter1}</p>
                    <p>{chrecter2}</p>
                    <p>{chrecter3}</p>
                </div>
                <div className="price">
                    <p id="old-price">{priceWithoutDisCOUNT}</p>
                    <p id="new-price">{priceWithDiscount}</p>
                </div>
            </div>
        </div>
    );
}
export default ProductInfo;