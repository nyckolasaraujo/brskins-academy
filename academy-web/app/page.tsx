import { Catalog } from "./components/Catalog";
export default function Home() {
  return (
    <main style={{ maxWidth:720, margin: "40px auto" }}>
      <Catalog />
    </main>
  );
}