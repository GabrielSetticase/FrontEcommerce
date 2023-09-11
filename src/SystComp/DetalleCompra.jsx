import React from 'react'
import { useCartStore } from './useCartStore'
import "./DetalleCompra.css"

export const DetalleCompra = ({ setShowDetail }) => {
    const productsGlobal = useCartStore(state => state.productos)
    const dataUser = localStorage.getItem("dataUser") && JSON.parse(localStorage.getItem("dataUser"))
    return (
        <>
            <div className='div'>
                <h3>Resumen de tu compra</h3>
            </div>
            <div className='div'>
                {productsGlobal
                    .map((product) => product.nombre)
                }
            </div>
            <h3 className='h3 div' >Datos del envio</h3>
            <h4 className='h4 div'>Nombre: {dataUser && dataUser.name}</h4>
            <h4 className='h4 div'>Direccion: {dataUser && dataUser.direccion}</h4>
            <button className='button'> Realizar Pedido</button>
            <br />
            <button className='button' onClick={e => {
                e.preventDefault()
                setShowDetail(false)
            }}>
                Volver
            </button>
        </>


    )
}
