import Link from "next/link";
import { getItems } from "@/app/lib/api";
import { NewItemForm } from "@/app/components/NewItemForm";
import AvailabilityButton from "./AvailabilityButton"; // Ajusta o caminho se necessário (ex: "@/app/items/AvailabilityButton")

// Server Component: não tem "use client", pode ser async
export default async function ItemsPage() {
    // Busca os itens diretamente da API
    const items = await getItems();

    return (
        <main style={{ maxWidth: 700, margin: "40px auto" }}>
            <h1>Items</h1>
            
            {/* Adicionamos o formulário no topo da página */}
            <NewItemForm />

            <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
                {items.map((item) => (
                    <li 
                        key={item.id}
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "10px 0",
                            borderBottom: "1px solid #eaeaea"
                        }}
                    >
                        <div>
                            <Link href={"/items/" + item.id} style={{ fontWeight: "bold" }}>
                                {item.name}
                            </Link> 
                            <span> - R$ {item.price}</span>
                            <span style={{ marginLeft: "10px", fontSize: "0.9rem", color: item.available ? "green" : "red" }}>
                                ({item.available ? "Disponível" : "Indisponível"})
                            </span>
                        </div>

                        {/* Botão de disponibilidade integrado na linha */}
                        <AvailabilityButton itemId={item.id} initialAvailable={item.available} />
                    </li>
                ))}
            </ul>
        </main>
    );
}