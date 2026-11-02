import Link from "next/link";
import { notFound } from "next/navigation";
import { getItem } from "@/app/lib/api"; 

type Props = { params: Promise<{ id: string }> };

export default async function ItemPage({ params }: Props) {
  const { id } = await params;
  
  // Busca o item específico na API convertendo o id para número
  const item = await getItem(Number(id));

  if (!item) {
    notFound(); // Dispara o arquivo not-found.tsx se retornar null (404)
  }

  return (
    <main style={{ maxWidth: 720, margin: "40px auto" }}>
      <Link href="/items">← voltar</Link>
      <h1>{item.name}</h1>
      <p>Preço: R$ {item.price.toFixed(2)}</p>
      <p>Desgaste: {item.wear}</p>
      <p>{item.available ? "Disponível" : "Indisponível"}</p>
    </main>
  );
}