import './App.scss';

import Form from './component/form/form';
import ProductSliderIlustration from './component/card-slider/card-slider';
import BackButtonComponent from './component/back-button-component/back-button-component';
import DellRemakeButtons from './component/dell-remake-buttons/dell-remake-buttons';
import SearchCardCom from './component/search-card-com/search-card-com';

function App() {
  return (
    <div className="body-conteiner">
      <main className="cards-form-conteiner">
        <div className="decoration"></div>
        <div className="create-block">
          <div className="header">
            <p>Product cart creator!</p>
          </div>
          <div className="card-form">
            <Form/>
          </div>
        </div>
        <div className="show-card-block">
          <SearchCardCom/>
          <div className="product">
            <BackButtonComponent/>
            <ProductSliderIlustration/>
            <DellRemakeButtons/>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
