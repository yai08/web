import { useState } from 'react';  
import './Formulario.css';  
import { dataForm } from "../api/form/postFrom";  
import emailjs from '@emailjs/browser';  
import swal from 'sweetalert'

const Formulario = () => {  
  
  const [nombre, setNombre] = useState('');  
  const [tickects, setTickets] = useState ('');
  const [telefono, setTelefono] = useState('');  
  const [correo, setCorreo] = useState('');  
  const [operacion, setOperacion] = useState('');
  const [metodoPagos, setMetodoPago] = useState('');  
  const [InfoMetodoPago, setInfoMetodoPago] = useState('');  
  
  

  const handlesubmit = async () => {  
    const serviceId = 'service_11cj91v';  
    const templateId = 'template_7dr0rw1';  
    const publickey = 'Bs-kKUFrCYazUJxmS';  

    const data = {  
      
      dat_tick:tickects ,
      dat_nom: nombre,  
      dat_tlf: telefono,  
      dat_cor: correo,  
      dat_oper: operacion,
      dat_met_pag: metodoPagos,  
    };  

    // Enviar el correo  
    try {  
      await emailjs.send(serviceId, templateId, data, publickey);  
      console.log('Email enviado satisfactoriamente');  
    } catch (error) {  
      console.error('Error al enviar correo', error);  
    }  

    // Enviar los datos al servidor y manejar la respuesta  
    try {  
      const response = await dataForm(data);  
      console.log('Respuesta del servidor:', response);  
    } catch (error) {  
      console.error('Error al enviar datos:', error);  
    } finally {  
      // Limpiar los campos después del envío  
      setTickets('');
      setNombre('');  
      setTelefono('');  
      setCorreo('');  
      setOperacion('');
      setMetodoPago('');  
      setInfoMetodoPago('');  
    }  
  };  

  const handleChangeMetodoPago = (event) => {  
    setMetodoPago(event.target.value);  
    const metodoSeleccionado = event.target.value;  
    switch (metodoSeleccionado) {  
      case 'Binance':  
        setInfoMetodoPago(<div className='info-box'>Id pay Binance: 213271601 Correo: luismiguelziik@gmail.com</div>);  
        break;  
      case 'Pago Movil':  
        setInfoMetodoPago(<div className='info-box'>0102 Venezuela, Cedula: 26937816, Telefono: 04125358270</div>);  
        break;  
      case 'Zelle':  
        setInfoMetodoPago(<div className='info-box'>BENQ.2704@gmail.com Rodolfo Castro</div>);  
        break;  
      case 'Bancolombia':  
        setInfoMetodoPago(<div className='info-box'>Luzznie G. Hernandez A. 54200001993 Ahorros</div>);  
        break;  
      case 'Banco de estado':  
        setInfoMetodoPago(<div className='info-box'>Cuenta Rut Ivana Sobral, Cedula: 27.382.505-3</div>);  
        break;  
      default:  
        setInfoMetodoPago('');  
    }  
  };  

  const  handleFormSubmit = (e) => {  
    e.preventDefault(); // Prevenir el envío del formulario por defecto  
    swal({  
      title: "Estimado Cliente",  
      text: "Felicidades por tu compra, puedes seguir comprando para aumentar tus posibilidades, atento a tu correo para más detalles. En las siguientes 24hrs. tendrás la verificación de su compra.",  
      icon: "success",   
      timer: 5000,  
      position: "bottom"  
    
  });
    handlesubmit(); // Llamar a la función de envío  
  };  

  return (  
    <div className='contenedor-form'>  
      <h2>Regístrate</h2>  
      <form onSubmit={handleFormSubmit}>  
      
        <div className='canti-tick'>  
          <label>Cantidad de tickets</label>  
          <input type="text" className="tickets" placeholder='Ingrese Cantidad' value={tickects} onChange={(e) => setTickets(e.target.value)} />  
        </div>  

        <div className='nombre-cli'>  
          <label>Nombre del Comprador</label>  
          <input type="text" className="nombre" placeholder='Ingrese nombre' value={nombre} onChange={(e) => setNombre(e.target.value)} />  
        </div> 

        <div className='numero-tlf'>  
          <label>Número de teléfono</label>  
          <input type="tel" className='estatura' placeholder="Ingrese teléfono" value={telefono} onChange={(e) => setTelefono(e.target.value)} />  
        </div>  

        <div className='correo-elec'>  
          <label>Correo Electrónico</label>  
          <input type="email" className='fecha' placeholder="Ingrese correo" value={correo} onChange={(e) => setCorreo(e.target.value)} />  
        </div>  

        <div className='numero-oper'>
          <label>Numero de operacion</label>
          <input type='text' className='operacion' placeholder='ingrese numero' value={operacion} onChange={(e) =>setOperacion(e.target.value)}></input>
        </div>

        

        <div className='metodo-pago'>  
          <label>Método de Pago</label>  
          <select value={metodoPagos} onChange={handleChangeMetodoPago}>  
            <option value="">Seleccione</option>  
            <option value="Pago Movil">Pago Móvil</option>  
            <option value="Zelle">Zelle</option>  
            <option value="Bancolombia">Bancolombia</option>  
            <option value="Banco de estado">Banco de estado</option>  
            <option value="Binance">Binance</option>  
            
          </select>  
          <div className="info-metodo-pago">{InfoMetodoPago}</div>  
        </div>  

        <button className='boton-formulario' type="submit">Comprar</button>  
      </form>  
    </div>  
  );  
}  

export default Formulario;
