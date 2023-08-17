import ButtonComponent from './components/ButtonComponent';
import NavBarComponent from './NavBarComponent/NavBarComponent';
import { useState } from 'react';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [count, setCount] = useState(0);

  const incrementar = () =>{
    setCount(count + 5000)
  }
  const desincrementar = () =>{
    setCount(count - 5000)
  }
  return (
    <div className='container-banco'>
      <NavBarComponent/>
      <div>
        <h1>Banco</h1>
        <h4>Ingrese el monto que desea retirar</h4>
        <h5>Contador: ${count}</h5>
      </div>

      <div className='botones'>
      <ButtonComponent boton="Incrementar" bsButtonType="success" onClickFunction={incrementar}/>
      <br />
      <ButtonComponent boton="Desincrementar" bsButtonType="danger" onClickFunction={desincrementar}/>
      </div>
    </div>
  )
}
export default App
