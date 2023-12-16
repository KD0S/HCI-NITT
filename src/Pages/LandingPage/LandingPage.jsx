import './LandingPage.css'

import Carousel from '../../Components/Carousel/Carousel';
import ContentCard from '../../Components/ContentCard/ContentCard';
import { Header } from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';


function LandingPage() {
  return (
    <div className="App">
      <Header></Header>
      <div id="main-carousel">
        <Carousel></Carousel>
      </div>
      <ContentCard></ContentCard>
      <Footer></Footer>
    </div>
  );
}

export default LandingPage;
