import './product-foto.scss'


import favorite from '../../assets/icons/Favorite.svg'

function ProductFoto({productImg}){
    return(
        <div className="product-foto">
            <div className="img-conteiner">
                <img src={productImg}/>
            </div>
            <p className="fich-new-product" id="new-product">Новинка!</p>
            <p className="fich-end-product" id="end-product">Закінчуеться!</p>
            <button className="fich-like-product" id="like-product">
                <img src={favorite}/>
            </button>
        </div>
    );
}
export default ProductFoto;