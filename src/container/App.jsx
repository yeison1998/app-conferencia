import React from 'react';
import Menu from '../components/menu';
import Cabecera from '../components/cabecera';
import Oradores from '../components/oradores';
import CCTesoro from '../components/CCTesoro';
import Registrarse from '../components/registrarse';
import PieDePag from '../components/piedDePag';
import Modal from '../components/modal';


class App extends React.Component {
  render() {
    return (
      <div>

          <Menu />
          <Cabecera />
          <Oradores />
          <CCTesoro />
          <Registrarse />
          <PieDePag />
          <Modal />

      </div>
      
    );
  }
}

export default App;