import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OffersCarousel from './components/OffersCarousel';
import Specialisation from './components/Specialisation';
import SpecialistCarousal from './components/SpecialistCarousal';
import PatientCaring from './components/PatientCaring';
import Blogs from './components/Blogs';
import Stats from './components/Stats';
import FAQs from './components/FAQs';
import DownloadApp from './components/DownloadApp';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <OffersCarousel />
      <Specialisation />
      <SpecialistCarousal />
      <PatientCaring />
      <Blogs />
      <Stats />
      <FAQs />
      <DownloadApp />
    </div>
  );
}

export default App;
