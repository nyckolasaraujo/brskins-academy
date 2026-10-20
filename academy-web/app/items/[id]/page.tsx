import Link from "next/link";
import { notFound } from "next/navigation";
import { skins } from "@/app/data/skins";

type Props = { params: Promise<{ id: string }> };

export default async function ItemPage({ params }: Props) {
  const { id } = await params;
  const skin = skins.find((s) => s.id === Number(id));

  if (!skin) {
    notFound(); // Dispara o arquivo not-found.tsx
  }

  return (
    <main style={{ maxWidth: 720, margin: "40px auto" }}>
      <Link href="/items">← voltar</Link>
      <h1>{skin.name}</h1>
      <p>Preço: R$ {skin.price.toFixed(2)}</p>
      <p>Desgaste: {skin.wear}</p>
      <p>{skin.available ? "Disponível" : "Indisponível"}</p>
    </main>
  );
}