import { Outlet, Link } from "react-router-dom";

export default function Layout () {
    return(
          <div className="layout" style={{background:""}}>

        <nav style={{ display: "flex", gap: "10px", padding: "10px", placeSelf:"center" }}>
            <Link to="/" style={{ textDecoration: "none" }}>
                <button style={{ padding: "10px 20px", background: "blue", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>Lista de productos</button>
            </Link>
            <Link to="/form" style={{ textDecoration: "none" }}>
                <button style={{ padding: "10px 20px", background: "blue", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>Productos Nuevos</button>
            </Link>
        </nav>
        <hr />
        <Outlet />
    </div>
 )

}

