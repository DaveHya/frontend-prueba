import api from "../services/api";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

interface Props {
  products: Product[];
  refresh: () => void;
}

export default function ProductList({ products, refresh }: Props) {
  const deleteProduct = async (id: number) => {
    await api.delete(`/${id}`);
    refresh();
  };

  return (
    <> 
    <div style={{
  display: "grid",
  gridTemplateColumns: "1fr 2fr 1fr 100px",
  gap: "10px",
  fontWeight: "bold",
  padding: "10px 0",
  borderBottom: "2px solid #ddd"
}}>
  <div>Nombre</div>
  <div>Descripción</div>
  <div>Precio</div>
  <div>Acción</div>
</div>

<div style={{
  display: "grid",
  gridTemplateColumns: "1fr 2fr 1fr 100px",
  gap: "10px",
  alignItems: "center",
  marginTop: "10px"
}}>
  {products.map((p) => (
    <div key={p.id} style={{ display: "contents" }}>
      <div><strong>{p.name}</strong></div>
      <div>{p.description}</div>
      <div>${p.price}</div>
      <button
        onClick={() => deleteProduct(p.id)}
        style={{
          padding: "6px 10px",
          background: "red",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer"
        }}
      >
        Eliminar
      </button>
    </div>
  ))}
</div>

</>

   
  );
}
