import React, { useState } from 'react';
import { Navbar, NavbarBrand, Button } from 'reactstrap';
import './Navbars.css'; // Sidebar için özel CSS stil dosyanız

function Navbars() {
  const [isOpen, setIsOpen] = useState(false);

  // Sidebar'ın açılıp kapanmasını kontrol eden fonksiyon
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div>
     <Navbar className="my-2" color="danger" expand="md">
        <Button color="light" onClick={toggleSidebar} style={{zIndex: 2, position: 'relative', marginRight: '15px'}}>☰</Button>
        <NavbarBrand href="/" style={{
          zIndex: 1,
          color: 'white'
        }}>
          <img
            alt="logo"
            src={require('../image/RestorantLogo.png')}
            style={{
              height: 50,
              width: 50,
              margin: 15
            }}
          />
          Chef's Restorant
        </NavbarBrand>
      </Navbar>
      {/* Sidebar menü */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`} style={{zIndex: 1}}><br />
        <a href="/">Page D'acceuil</a>
        <a href="/">Menu</a>
        <a href="/">Reservation</a>
        <a href="/">Contact</a>
      </div>
    </div>
  );
}

export default Navbars;
