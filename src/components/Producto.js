import { Component } from "react";

class Producto extends Component{   
    render(){
       //console.log(this.props)
        const {producto} = this.props
        return(
            <div>
                <img src={ producto.img} alt={producto.name} />
                <h3>{producto.name}</h3>
                <p>{producto.price}</p>
            </div>
        )
    }
}

export default Producto