import './LandingPage.css'

import { Header } from '../../Components/Header/Header';
import Carousel from '../../Components/Carousel/Carousel';


function LandingPage() {
  return (
    <div className="App">
      <Header></Header>
      <div id="main-carousel">
        <Carousel></Carousel>
      </div>
    </div>
  );
}

export default LandingPage;
