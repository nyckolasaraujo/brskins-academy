import Link from "next/link";
import { skins } from "@/app/data/skins";

// Server Component: não tem "use cliente", pode ser async
export default async function ItemsPage() {
    // simula uma consulta lenta para você ver o loading.tsx
    await new Promise((r) => setTimeout(r,800));

    return (
        <main style={{ maxWidth: 700, margin: "40px auto" }}>
            <h1>Items</h1>
            <ul>
                {skins.map((s) => (
                    <li key={s.id}>
                        <Link href={"/items/" + s.id}>{s.name}</Link> -R$ {s.price}
                    </li>
                ))}
            </ul>
        </main>
    );
}