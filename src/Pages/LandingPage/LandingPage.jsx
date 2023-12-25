import './LandingPage.css'

import Carousel from '../../Components/Carousel/Carousel';
import AboutUs from '../../Components/AboutUs/AboutUs';
import Spreadsheet from '../../Components/Spreadsheet/Spreadsheet';
import LatestNews from '../../Components/LatestNews/LatestNews';
// import ContentCard from '../../Components/ContentCard/ContentCard';
import { Header } from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';


function LandingPage() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      {/* <ContentCard></ContentCard> */}
      <AboutUs />
      <Spreadsheet />
      <LatestNews />
      <Footer></Footer>
    </div>
  );
}

export default LandingPage;
