import './LandingPage.css'

import Carousel from '../../Components/Carousel/Carousel';
import AboutUs from '../../Components/AboutUs/AboutUs';
import Spreadsheet from '../../Components/Spreadsheet/Spreadsheet';
import LatestNews from '../../Components/LatestNews/LatestNews';


function LandingPage() {
  return (
    <div className="App">
      <Carousel />
      <AboutUs />
      <Spreadsheet />
      <LatestNews />
    </div>
  );
}

export default LandingPage;
