const API = process.env.NEXT_PUBLIC_API_URL;

export type ItemDto = {
  id: number;
  name: string;
  price: number;
  available: boolean;
  wear: string;
};

export async function getItems(): Promise<ItemDto[]> {
  const res = await fetch(API + "/api/items", { cache: "no-store" });
  if (!res.ok) throw new Error("Falha ao listar itens: " + res.status);
  return res.json();
}

export async function getItem(id: number): Promise<ItemDto | null> {
  const res = await fetch(API + "/api/items/" + id, { cache: "no-store" });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error("Falha ao buscar item: " + res.status);
  return res.json();
}

type NewItem = { name: string; price: number; wear: string };

export async function createItem(data: NewItem): Promise<ItemDto> {
  const res = await fetch(API + "/api/items", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Falha ao criar item: " + res.status);
  return res.json();
}

export async function setAvailability(id: number, available: boolean): Promise<void> {
  const res = await fetch(`${API}/api/items/${id}/availability`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(available),
  });

  if (!res.ok) {
    throw new Error("Falha ao atualizar a disponibilidade: " + res.status);
  }
}