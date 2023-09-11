
import React, { useState } from 'react';

function CrearProducto() {
    const [nuevoProducto, setNuevoProducto] = useState({
        nombre: '',
        descripcion: '',
        precio: 0,
        categoria: '',
        imagen: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNuevoProducto({ ...nuevoProducto, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(("http://localhost:3000/productos"), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(nuevoProducto),
            });

            if (response.ok) {
                console.log('Nuevo Producto guardado exitosamente');
            } else {
                console.error('Error al guardar el nuevo Producto');
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
        }
    };

    return (
        <div>
            <h2>Crear Producto</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre:</label>
                    <input
                        type="text"
                        name="nombre"
                        value={nuevoProducto.nombre}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Descripción:</label>
                    <input
                        type="text"
                        name="descripcion"
                        value={nuevoProducto.descripcion}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>categoria:</label>
                    <input
                        type="text"
                        name="categoria"
                        value={nuevoProducto.categoria}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Precio:</label>
                    <input
                        type="number"
                        name="precio"
                        value={nuevoProducto.precio}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>imagen:</label>
                    <input
                        type="text"
                        name="imagen"
                        value={nuevoProducto.imagen}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Guardar nuevo Producto</button>
            </form>
        </div>
    );
}

export default CrearProducto;