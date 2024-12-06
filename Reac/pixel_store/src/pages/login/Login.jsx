import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({ nombre: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: formData.nombre,
          contrasena: formData.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Inicio de sesión exitoso");
        localStorage.setItem("token", data.token);
        navigate("/administrador/usuarios");
      } else {
        alert(data.mensaje || "Error en el inicio de sesión");
      }
    } catch (error) {
      console.error("Error al conectar con el servidor:", error);
      alert("Hubo un problema al conectar con el servidor.");
    }
  };

  return (
    <div className="background">
      <div className="login-container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-title">
            <span>sign in to your</span>
          </div>
          <div className="title-2">
            <span>GAMES</span>
          </div>

          <div className="input-container">
            <input
              required
              className="input-name"
              type="text"
              name="nombre"
              placeholder="Username"
              value={formData.nombre}
              onChange={handleChange}
            />
          </div>

          <div className="input-container">
            <input
              required
              className="input-pwd"
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <button className="submit" type="submit">
            <span className="sign-text">Sign in</span>
          </button>

          <p className="signup-link">
            No account? <Link className="up" to="/register">Sign up!</Link>
          </p>
        </form>
      </div>

      {/* Meteoritos */}
      <div className="meteor"></div>
      <div className="meteor"></div>
      <div className="meteor"></div>
    </div>
  );
};

export default Login;
