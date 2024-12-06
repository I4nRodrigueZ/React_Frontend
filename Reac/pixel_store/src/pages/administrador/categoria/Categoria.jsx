import React, { useState, useEffect } from "react";
import "../../admin.css"; // Subir dos niveles en la estructura de carpetas
  // Puedes agregar tu estilo aquí

const CategoriasCRUD = () => {
  const [categorias, setCategorias] = useState([]);
  const [formData, setFormData] = useState({ nombre: "" });
  const [editingCategoryId, setEditingCategoryId] = useState(null);

  // Fetch all categories
  const fetchCategorias = async () => {
    try {
      const response = await fetch("http://localhost:5000/categorias", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await response.json();
      if (response.ok) {
        setCategorias(data);
      } else {
        alert(data.mensaje || "Error al cargar las categorías.");
      }
    } catch (error) {
      console.error("Error al cargar categorías:", error);
    }
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submit (POST/PUT)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = editingCategoryId
      ? `http://localhost:5000/categoria/${editingCategoryId}`
      : "http://localhost:5000/categorias";
    const method = editingCategoryId ? "PUT" : "POST";

    try {
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        alert(editingCategoryId ? "Categoría actualizada" : "Categoría creada");
        fetchCategorias();
        setFormData({ nombre: "" });
        setEditingCategoryId(null);
      } else {
        alert(data.mensaje || "Error al guardar la categoría.");
      }
    } catch (error) {
      console.error("Error al guardar categoría:", error);
    }
  };

  // Handle edit button click
  const handleEdit = (categoria) => {
    setEditingCategoryId(categoria.id);
    setFormData({ nombre: categoria.nombre });
  };

  // Handle delete button click
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/categoria/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (response.ok) {
        alert("Categoría eliminada");
        fetchCategorias();
      } else {
        alert("Error al eliminar categoría.");
      }
    } catch (error) {
      console.error("Error al eliminar categoría:", error);
    }
  };

  useEffect(() => {
    fetchCategorias();
  }, []);

  return (
    <div className="crud-container">
      <h1>Gestión de Categorías</h1>

      {/* Formulario para agregar/editar categoría */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre de la categoría"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
        <button type="submit">
          {editingCategoryId ? "Actualizar" : "Agregar"}
        </button>
      </form>

      {/* Tabla de categorías */}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {categorias.map((categoria) => (
              <tr key={categoria.id}>
                <td>{categoria.nombre}</td>
                <td>
                  <button onClick={() => handleEdit(categoria)}>Editar</button>
                  <button onClick={() => handleDelete(categoria.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CategoriasCRUD;
