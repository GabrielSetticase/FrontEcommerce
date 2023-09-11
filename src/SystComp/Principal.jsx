import React from 'react'
import { Card } from './Card'
import { useState, useEffect } from 'react'
import "./Card.css"
import "./App.css"
import { useCartStore } from './useCartStore'
import { Button, Drawer } from 'antd';
import { Cart } from './Cart'
import CrearProducto from './CrearProducto'
import { DetalleCompra } from './DetalleCompra'


export const Principal = ({ loguear, isAdmin, setShowDetail }) => {

    const [productos, setProductos] = useState([])
    const [nombreFilter, setNombreFilter] = useState("")
    const [priceFilter, setPriceFilter] = useState(0)
    const [categoryFilter, setCategoryFilter] = useState("")
    const [isSortedFilter, setIsSortedFilter] = useState(false)
    const categorias = productos.map((product) => product.categoria)
    const uniqueCategorias = [...new Set(categorias)]
    const productsGlobal = useCartStore(state => state.productos)
    const [open, setOpen] = useState(false)



    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false)
    }

    useEffect(() => {
        fetch("http://localhost:3000/productos")
            .then((res) => res.json())
            .then((data) => setProductos(data))
    }, [])

    return (
        <>
            <div className='nav'>
                <h3>Listado de productos</h3>
                <button onClick={e => {
                    e.preventDefault()
                    loguear()
                }}>
                    Salir
                </button>
                <>
                    {
                        !isAdmin &&
                        <>
                            <Button type="primary" onClick={showDrawer}>
                                Ver carrito
                            </Button>
                            <Drawer title="Tus productos" placement="right" onClose={onClose} open={open}>
                                <Cart
                                    setShowDetail={setShowDetail}
                                ></Cart>
                            </Drawer>
                        </>
                    }
                </>
            </div>
            <div className="filter-container">
                <h3>Buscar por:</h3>
                <label htmlFor="nombre">Nombre:</label>
                <input
                    onChange={(e) => setNombreFilter(e.target.value)}
                    type="text"
                    name="nombre"
                    id="nombre"
                    defaultValue={nombreFilter}
                />

                <label htmlFor="precio-min">Precio mínimo:</label>
                <input
                    onChange={(e) => setPriceFilter(e.target.value)}
                    type="number"
                    name="precio-min"
                    id="precio-min"
                    defaultValue={priceFilter}
                />

                <label htmlFor="categoria">Categoría:</label>
                <select
                    name="categoria"
                    id="categoria"
                    onChange={(e) => setCategoryFilter((e.target.value))}
                >
                    <option value="-">-</option>

                    {uniqueCategorias.map((categoria, i) => (
                        <option key={`key-option-${categoria}${i}`} value={categoria}>
                            {categoria}
                        </option>
                    ))}
                </select>

                <label htmlFor="ordenar">Ordenar:</label>
                <input
                    onChange={(e) => setIsSortedFilter(e.target.checked)}
                    type="checkbox"
                    name="ordenar"
                    id="ordenar"
                    checked={isSortedFilter}
                />
            </div>

            <div className="products-layout">
                {productos
                    .filter((product) =>
                        product.nombre.toLowerCase().includes(nombreFilter.toLowerCase())
                    )
                    .filter((product) => product.precio > priceFilter)
                    .filter((product) =>
                        categoryFilter === "-" ? true : product.categoria === categoryFilter
                    )
                    .slice()
                    .sort((a, b) => (isSortedFilter ? a.precio - b.precio : 0))
                    .map((product) => (
                        <Card
                            product={product}
                            key={`key-${product.nombre}-${product.precio}`}
                            titulo={product.nombre}
                            imagen={product.imagen}
                            precio={product.precio}
                            descripcion={product.descripcion}
                            categoria={product.categoria}
                        />
                    ))}
            </div>

            <div>
                {
                    isAdmin &&
                    <CrearProducto />
                }
            </div>
        </>
    )
}
