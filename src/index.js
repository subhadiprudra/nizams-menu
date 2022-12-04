import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import background from "./images/backg.jpg";
import App from './app';



  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
   
    <div >
      <div style={{ 
      backgroundImage: `url(${background})`,
          height:'100vh',
          width:'200vh',
          backgroundSize: 'cover',
          position:'fixed',
          backgroundRepeat: 'no-repeat',
          padding: '5%',
          zIndex:'-99'
    }}>
      </div>
      
      <App/>
      
    </div>
    
  );
  