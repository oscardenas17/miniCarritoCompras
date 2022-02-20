import {Component} from 'react'
import Producto from  './Producto'

class Productos extends Component {
    render(){
        const{productos, agregarAlcarro} = this.props
    
        return (
            <div>
            {productos.map( producto =>
                <Producto
                    agregarAlcarro={agregarAlcarro}
                    key={producto.name}
                    producto= {producto}
                />)}
            </div>
  
     )
    }
}

export default Productos