import './LandingPage.css'

import { Header } from '../../Components/Header/Header';
import Carousel from '../../Components/Carousel/Carousel';
import ContentCard from '../../Components/ContentCard/ContentCard';


function LandingPage() {
  return (
    <div className="App">
      <Header></Header>
      <div id="main-carousel">
        <Carousel></Carousel>
      </div>
      <ContentCard></ContentCard>
    </div>
  );
}

export default LandingPage;
