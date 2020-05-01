import React from 'react';
import Curso1 from './Curso1';
import Curso2 from './Curso2';
import "./styles/styles.scss"


const App = () => (
  <>
  
  <div className="main-banner img-container l-section" id="main-banner">
    <div className="ed-grid lg-grid-6">
      <div className="lg-cols-4 lg-x-2">
        <img className="main-banner__img" alt="banner" src="https://www.caracteristicas.co/wp-content/uploads/2017/05/universo-1-e1568576142428.jpg" />
        <div className="main-banner__data s-center">
          <p className="t2 s-mb-0">Bienvenido a PlayTec Academy</p>
          <p> Dale Play a la Tecnologia</p>
          <a href="https://www.app.playtecedu.com/" className="button">Play</a>
        </div>
      </div>
    </div>
  </div>


<div className="ed-grid m-grid-3"> 
  <Curso1/>
  <Curso2/>
</div>

  </>


)
export default App;
