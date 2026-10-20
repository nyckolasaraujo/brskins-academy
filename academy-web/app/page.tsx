import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{ maxWidth: 720, margin: "40px auto" }}>
      <h1>Bem-vindo à BRSKINS Academy!</h1>
      <p>Explore nosso catálogo e componentes.</p>
      
      <nav style={{ marginTop: "20px" }}>
        {/* Link adicionado para acessar a listagem de itens */}
        <Link 
          href="/items" 
          style={{ 
            display: "inline-block",
            padding: "10px 16px",
            backgroundColor: "#0070f3",
            color: "#fff",
            borderRadius: "6px",
            textDecoration: "none"
          }}
        >
          Ir para Itens →
        </Link>
      </nav>
    </main>
  );
}