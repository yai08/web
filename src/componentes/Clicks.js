import React from 'react';
import Boton from './Boton';
import Contador from './Contador';
import './Contador.css'
import { useState } from 'react';

const Clicks = () => {



const [numClicks, setNumClicks] = useState(1); 

const manejarClic = () => {
  setNumClicks(numClicks + 1); 
}

const reiniciarContador = () => {
   setNumClicks(1);
}

  return (
    <div className="contador">

     <div className='contenedor-principal'>

    
      <Contador className='contar'  numClicks={numClicks} />
     
      <Boton
      
      texto='Click'
      esBotonDeClick={true}    
      manejarClic={manejarClic}/>
     

    <Boton
    
    texto='Reiniciar'
    esBotonDeClick={false}
    manejarClic={reiniciarContador}

    
    />

   

     </div>
    
  
    </div>


    
  );
}

  export default Clicks