

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
                    </div>
                  </div>
                  <div className="slide">
                    <div className=".end-product-feach"></div>
                    <div className="slide-indicator">
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
                    </div>
                  </div>
                </div>
            </div>
        </div>
    );
}

export default ProductSliderIlustration;