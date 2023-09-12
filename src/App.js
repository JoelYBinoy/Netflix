import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar';
import {action,netflixOriginals,comedy,horror} from './urls'
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Banner/>
     <RowPost url={netflixOriginals} title='Netflix Originals' />
     <RowPost url={action} title='Action Movies' isSmall />
     <RowPost url={comedy} title='Comedy Movies' isSmall />
     <RowPost url={horror} title='Horror Movies' isSmall />

    </div>
  );
}

export default App;
