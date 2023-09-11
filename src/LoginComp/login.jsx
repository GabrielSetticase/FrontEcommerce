import React, { useState } from 'react';
import axios from 'axios';
import "./forms.css"


export const AuthForm = ({ loguear, setIsRegistered, setIsAdmin }) => {
    const [formData, setFormData] = useState({
        nombre: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/usuarios/login", formData);
            console.log('Respuesta del servidor:', response.data.dataUser.isAdmin);
            localStorage.setItem("dataUser", JSON.stringify(response.data.dataUser))
            setIsAdmin(response.data.dataUser.isAdmin)
            loguear()
        } catch (error) {
            setIsRegistered(false)
            console.error('Error al iniciar sesión:', error);

        }
    };


    return (
        <div className='contenedor'>
            <h2>Iniciar sesión o registrarse</h2>
            <form onSubmit={e => {
                handleLogin(e)
            }}>
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

                <button type="submit" >
                    Iniciar sesión
                </button>
            </form>
            <br />
            <h6>Us Administrador: HECTOR // Contraseña: 12345</h6>
        </div>
    );
};

