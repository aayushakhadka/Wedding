import logo from './logo.svg';
import './App.css';
import {Home} from './components/Home';
import { Nav } from './common/Nav';
import { Couple } from './components/Couple';
import { Countdown } from './components/Countdown';
import { Story } from './components/Story';
import { Event } from './components/Event';
import { People } from './components/People';
import { Gallery } from './components/Gallery';
import { Rsvp } from './components/Rsvp';
import { Footer } from './components/Footer';

function App() {
  return (
    <div>
      <Home/>
      <Nav/>
      <Couple/>
      <Countdown/>
      <Story/>
      <Event/>
      <People/>
      <Gallery/>
      <Rsvp/>
      <Footer/>
    </div>
  );
}

export default App;
