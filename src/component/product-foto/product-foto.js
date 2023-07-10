import './product-foto.scss'

function ProductFoto(){
    return(
        <div className="product-foto">
            <div className="img-conteiner">
                <img src="./src/img/phone.jpg" alt=""/>
            </div>
            <p className="fich-new-product" id="new-product">Новинка!</p>
            <p className="fich-end-product" id="end-product">Закінчуеться!</p>
            <button className="fich-like-product" id="like-product">
                <img src="./src/img/Favorite.svg" alt=""/>
            </button>
        </div>
    );
}
export default ProductFoto;