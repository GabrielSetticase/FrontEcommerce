import axios from 'axios';
import React, { useState } from 'react'
import "./forms.css"

export const RegisterComp = ({ setIsRegistered }) => {

    const [formData, setFormData] = useState({
        nombre: '',
        password: '',
        direccion: '',
        email: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/usuarios/registro", formData);
            console.log('Respuesta del servidor:', response.data);
            setIsRegistered(true)
        } catch (error) {
            console.error('Error al registrar usuario:', error);
        }
    };


    return (
        <>
            <form className='contenedor'>
                <div>
                    <label>Usuario:</label>
                    <input
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Contraseña:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>direccion:</label>
                    <input
                        type="text"
                        name="direccion"
                        value={formData.direccion}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className='botones'>
                    <button type="button" onClick={handleSignup}>
                        Registrarse
                    </button>
                    <button
                        onClick={e => {
                            setIsRegistered(true)
                        }}>
                        Volver
                    </button>
                </div>
            </form>

        </>
    )
}
