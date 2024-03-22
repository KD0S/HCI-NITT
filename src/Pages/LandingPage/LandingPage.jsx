import './LandingPage.css'

import AboutUs from '../../Components/AboutUs/AboutUs';
import Spreadsheet from '../../Components/Spreadsheet/Spreadsheet';
import LatestNews from '../../Components/LatestNews/LatestNews';
import ImageGallery from '../../Components/ImageGallery/ImageGallery';


function LandingPage() {
  return (
    <div className="App">
      <ImageGallery />
      <AboutUs />
      <Spreadsheet />
      <LatestNews />
    </div>
  );
}

export default LandingPage;
