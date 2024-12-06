import React, { useState } from "react";


const Register = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "", // Nuevo campo
    email: "",
    password: "",
    telefono: "", // Nuevo campo
    direccion: "", // Nuevo campo
    rol: "usuario", // Establecemos el rol predeterminado como "usuario"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: formData.nombre,
          apellido: formData.apellido, // Nuevo campo
          email: formData.email,
          contrasena: formData.password,
          telefono: formData.telefono, // Nuevo campo
          direccion: formData.direccion, // Nuevo campo
          rol: formData.rol, // Enviar el rol como texto
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Usuario creado exitosamente. Ahora puedes iniciar sesión.");
      } else {
        alert(data.mensaje || "Error al registrar usuario");
      }
    } catch (error) {
      console.error("Error al conectar con el servidor:", error);
      alert("Hubo un problema al conectar con el servidor.");
    }
  };

  return (
    <div className="login-container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-title">
          <span>Register</span>
        </div>
        <div className="title-2">
          <span>GAMES</span>
        </div>
        <div className="input-container">
          <input
            required
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <div className="input-container">
          <input
            required
            type="text"
            name="apellido" // Nuevo campo
            placeholder="Apellido"
            value={formData.apellido}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <div className="input-container">
          <input
            required
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <div className="input-container">
          <input
            required
            type="password"
            name="password"
            placeholder="Contraseña"
            value={formData.password}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <div className="input-container">
          <input
            type="text"
            name="telefono" // Nuevo campo
            placeholder="Teléfono"
            value={formData.telefono}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <div className="input-container">
          <input
            type="text"
            name="direccion" // Nuevo campo
            placeholder="Dirección"
            value={formData.direccion}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <div className="input-container">
          <select
            name="rol"
            value={formData.rol}
            onChange={handleChange}
            required
            className="input-field"
          >
            <option value="usuario">Usuario</option>
            <option value="vendedor">Vendedor</option>
          </select>
        </div>
        <button className="submit" type="submit">
          Registrar
        </button>
      </form>
    </div>
  );
};

export default Register;
