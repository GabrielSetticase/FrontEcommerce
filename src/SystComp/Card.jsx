import "./Card.css"
import { useCartStore } from "./useCartStore"
import { Image } from "antd"

export const Card = (props) => {

    const addProduct = useCartStore(state => state.addProduct)

    return (
        <div className='Card'>
            <h3> {props.nombre} </h3>
            <Image className="imagen" src={props.imagen} alt='producto' />
            <h4> {props.precio} </h4>
            <p> {props.descripcion} </p>
            <p> {props.categoria} </p>
            <button onClick={() => { addProduct(props.product) }}>Aceptar</button>
        </div>
    )
}