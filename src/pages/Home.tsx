import { useEffect, useState } from "react";
import api from "../services/api";
import ProductList from "../components/productList";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  // Función que obtiene productos desde el backend
  const fetchProducts = async () => {
    try {
      const res = await api.get("/");
      setProducts(res.data);
    } catch (error) {
      console.error("Error al obtener productos:", error);
    }
  };

  // Cargar productos al iniciar
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div style={{ maxWidth: "80vw", margin: "auto", padding: "20px" }}>
      <div>
     
        <h1>Gestión de Productos</h1>
        <hr />
        <ProductList products={products} refresh={fetchProducts} />
      </div>
    </div>
  );
}
