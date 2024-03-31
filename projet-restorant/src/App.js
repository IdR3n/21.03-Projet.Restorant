import React from 'react';
import Reservation from './Compenents/Reservations.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from './Compenents/NavBars.jsx';
import Carouselle from './Compenents/Carouselle.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='Navbars'>
          <Navbars></Navbars>
        </div>
        <div className='Carouselles'>
          <Carouselle></Carouselle>
        </div>
        <Reservation></Reservation>
      </header>
    </div>
  );
}

export default App;
