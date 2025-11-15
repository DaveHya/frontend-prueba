import { useState } from "react";
import api from "../services/api";
import "../App.css"

interface Props {
  onAdd: () => void;
}

export default function ProductForm({ onAdd }: Props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await api.post("/", {
      name,
      description,
      price: parseFloat(price),
    });
    setName("");
    setDescription("");
    setPrice("");
    onAdd(); // refresca la lista
  };

  return (
    <form className="form-product" onSubmit={handleSubmit} style={{ marginBottom: 20}}>
        {/* <span>Productos Nuevos</span> */}
        <div className="row-name"> 
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nombre"
        required
      />
   
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Precio"
        required
      />
</div>

<div className="form-description" > 
         <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Descripción"
        required
        
      />
      </div>

      <div className="" > 
      <button type="submit">Agregar Producto</button>
        </div>
    </form>
  );
}
