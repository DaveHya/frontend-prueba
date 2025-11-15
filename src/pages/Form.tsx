


import { useNavigate } from "react-router-dom";
import ProductForm from "../components/productForm";

export default function Form() {
    const navigate = useNavigate();

    const handleAdd = () => {
        // Después de agregar, redirigir a la lista de productos
        navigate("/");
    };

    return(
        <div style={{ maxWidth: "80vw", margin: "auto", padding: "20px" }}>
            <h1>Formulario de Productos</h1>
            <ProductForm onAdd={handleAdd} />
        </div>
    );
}
