"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createItem } from "@/app/lib/api";

export function NewItemForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [wear, setWear] = useState("FT"); // Valor padrão para o desgaste
  const [erro, setErro] = useState<string | null>(null);
  const [enviando, setEnviando] = useState(false);

  async function enviar() {
    setErro(null);
    setEnviando(true);
    try {
      await createItem({ name, price: Number(price), wear });
      setName("");
      setPrice("");
      setWear("FT");
      router.refresh(); // Pede ao Next para atualizar os dados da página
    } catch (e) {
      setErro((e as Error).message);
    } finally {
      setEnviando(false);
    }
  }

  return (
    <div style={{ marginBottom: 24, padding: 16, border: "1px solid #ccc", borderRadius: 8 }}>
      <h3>Adicionar Novo Item</h3>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <input
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: "8px" }}
        />
        <input
          placeholder="Preço"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          style={{ padding: "8px" }}
        />
        <input
          placeholder="Desgaste (ex: FN, MW, FT)"
          value={wear}
          onChange={(e) => setWear(e.target.value)}
          style={{ padding: "8px" }}
        />
        <button 
          onClick={enviar} 
          disabled={enviando}
          style={{ padding: "8px 16px", cursor: "pointer" }}
        >
          {enviando ? "A salvar..." : "Criar item"}
        </button>
      </div>
      {erro && <p style={{ color: "red", marginTop: 8 }}>{erro}</p>}
    </div>
  );
}