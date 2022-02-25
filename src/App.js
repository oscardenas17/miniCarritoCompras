import { Component } from 'react';
import Productos from './components/Productos'
import Layout from './components/Layout'
import Navbar from './components/Navbar'
import Title from './components/Title'




class App extends Component{
  state={
    productos: [
      {name: 'Tomate', price: 1500, img: '/productos/tomate.jpg' },
      {name: 'Arbejas', price: 2500, img: '/productos/Arbejas.jpg' },
      {name: 'Lechuga', price: 500, img: '/productos/lechuga.jpg' }
    ],
    carro: [],
    esCarroVisible:false,
    //carro:[
      //{name: 'Tomate', price: 1500, img: '/productos/tomate.jpg' , cantidad: 1},
    //],
  }

  agregarAlCarro = (producto) => {
    const { carro } = this.state //sacar carro

    //pregunto si existe un mismo nombre de producto, en caso que si  const newCarro , sino salta al    return this.setState({
      if (carro.find(x => x.name === producto.name)) { 
     
        const newCarro = carro.map(x => x.name === producto.name //se cuentra un prodcuto al iterar
         ? ({
          ...x, //copia del elemento iterado
          cantidad: x.cantidad+1 //aumento cantidad
      })
      :x ) // devuelve el elemento si no es el que se itera

      return this.setState({ carro: newCarro }) //return para no dejar que avance el programa al bloque de abajo, se setea el nuevo carro
    }
    
    return this.setState({
      carro: this.state.carro.concat({
        ...producto, cantidad: 1,
      })
    })
  }

  mostrarCarro = () =>{
    //evitar click en el boton de carro si esta vacio, que no haga nada
    if(!this.state.carro.length){
      return
    }
    this.setState ( {esCarroVisible: !this.state.esCarroVisible }) //se niega carro visible: queda true
  }
  render(){
    const {esCarroVisible} = this.state
    //console.log(this.state.carro)
    return(
      <div>
        <Navbar 
          carro={this.state.carro} 
          esCarroVisible={ esCarroVisible} 
          mostrarCarro={this.mostrarCarro}
         /> 
        <Layout>
          <Title />
          <Productos
            agregarAlCarro={ this.agregarAlCarro }
            productos = {this.state.productos}
          />    
        </Layout>    
     </div>
    )
  }
}

export default App;
