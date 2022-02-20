import { Component } from 'react';
import Productos from './components/Productos'
import Layout from './components/Layout'

class App extends Component{
  state={
    productos: [
      {name: 'Tomate', price: 1500, img: '/productos/tomate.jpg' },
      {name: 'Arbejas', price: 2500, img: '/productos/Arbejas.jpg' },
      {name: 'Lechuga', price: 500, img: '/productos/lechuga.jpg' }
    ]
  }


  render(){
    return(
      <div>
        <Productos
          agregarAlCarrov={ ()=> console.log('No hace nada')}
          productos = {this.state.productos}
        />       
        
      </div>
    )
  }
}

export default App;
