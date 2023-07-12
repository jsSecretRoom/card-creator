import './App.scss';

import Form from './component/form/form';
import ProductSliderIlustration from './component/card-slider/product-slider-ilustration';
import BackButtonComponent from './component/back-button-component/back-button-component';
import DellRemakeButtons from './component/dell-remake-buttons/dell-remake-buttons';
import SearchCardCom from './component/search-card-com/search-card-com';



// import connectToMongoDB from './component/database/database';

// async function getDataFromMongoDB() {
//   const data = await connectToMongoDB();
//   console.log(data); // Ваши данные из базы данных MongoDB
// }

// getDataFromMongoDB();

const data = [
  {
    id: "12121",
    category: "Mobile",
    productName: "samsung galaxy ultra 1010nex pro max 108px black",
    description1: "desk1",
    description2: "desk2",
    description3: "desk3",
    priceWithoutDiscount: "999 999",
    discountPrice: "888 888",
    fotoLink: "../../assets/imgs/phone.jpg",
    newProduct: "true",
    topSales: "false",
    isMissing: "false",
    warning: "false"
    
  },
  {
    id: "121231",
    category: "Mobile",
    productName: "samsung galaxy ultra 1010nex pro max 108px black",
    description1: "desk1",
    description2: "desk2",
    description3: "desk3",
    priceWithoutDiscount: "999 999",
    discountPrice: "888 888",
    fotoLink: "../../assets/imgs/phone.jpg",
    newProduct: "false",
    topSales: "true",
    isMissing: "false",
    warning: "true"
    
  },
  {
    id: "121214",
    category: "Mobile",
    productName: "samsung galaxy ultra 1010nex pro max 108px black",
    description1: "desk1",
    description2: "desk2",
    description3: "desk3",
    priceWithoutDiscount: "999 999",
    discountPrice: "888 888",
    fotoLink: "../../assets/imgs/phone.jpg",
    newProduct: "false",
    topSales: "false",
    isMissing: "true",
    warning: "false"
  }
];



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
            <ProductSliderIlustration data={data}/>
            <DellRemakeButtons/>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
