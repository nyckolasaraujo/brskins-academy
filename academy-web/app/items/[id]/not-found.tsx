import Link from "next/link";

export default function ItemNotFound() {
  return (
    <main style={{ maxWidth: 720, margin: "40px auto", textAlign: "center" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "16px" }}>
        Item não encontrado! 🔍
      </h1>
      <p style={{ color: "#666", marginBottom: "24px" }}>
        O item ou skin que você está procurando não existe ou foi removido.
      </p>
      <Link 
        href="/items" 
        style={{ 
          textDecoration: "underline", 
          fontWeight: "bold",
          color: "#0070f3" 
        }}
      >
        ← Voltar para a lista de itens
      </Link>
    </main>
  );
}