import React from 'react';
import { List, Avatar, Button } from 'antd';
import { useCartStore } from './useCartStore';

export const Cart = ({ setShowDetail }) => {
    const productsGlobal = useCartStore((state) => state.productos);
    const deleteProduct = useCartStore((state) => state.removeProduct);
    const cleanCarrito = useCartStore((state) => state.clearCart);

    return (


        <>
            <button onClick={cleanCarrito}>Vaciar carrito</button>
            <h3>
                total ${' '}
                {productsGlobal
                    .map((product) => product.precio)
                    .reduce((a, b) => a + b, 0)}
            </h3>
            <List
                itemLayout="horizontal"
                dataSource={productsGlobal}
                renderItem={(productos, index) => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src={productos.imagen} />}
                            title={<a href="https://ant.design">{productos.nombre}</a>}
                            description={productos.precio}
                        />
                        <Button onClick={() => deleteProduct(productsGlobal[0].nombre)}>
                            Eliminar
                        </Button>
                    </List.Item>
                )}
            />


            <h4>Items totales</h4>

            <button onClick={e => {
                e.preventDefault()
                setShowDetail(true)
            }}>
                Finalizar Compra
            </button>
        </>
    )
};
