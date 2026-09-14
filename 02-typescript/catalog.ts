export type Skin = {
    id: number;
    name: string;
    price: number;
    available: boolean;
    wear: string;

};

export const skins: Skin[] = [
    { id: 1, name: "AK-47 | redline", price: 120, available: true, wear: "FT" },
    { id: 2, name: "awp | asiimov", price: 430, available: false, wear: "FT" },
    { id: 3, name: "M4A4 | Howl", price: 5200, available: true, wear: "MW" },
    { id: 4, name: "Glock-18 | Fade", price: 900, available: true, wear: "FN" },
    { id: 5, name: "USP-S | Kill Confirmed", price: 350, available: true, wear: "MW" },
    { id: 6, name: "Desert Eagle | Blaze", price: 1800, available: false, wear: "FN" },
    { id: 7, name: "AK-47 | Vulcan", price: 750, available: true, wear: "FT" },
    { id: 8, name: "M4A1-S| Printstream", price: 640, available: true, wear: "MW" },
    { id: 9, name: "Karambit | Doppler", price: 9500, available: true, wear: "FN" },
    { id: 10, name: "P250 | Sand Dune", price: 3, available: true, wear: "BS" },

];

export function availableItems(lista: Skin[]): Skin[] {
    return lista.filter((s) => s.available);
}

export function findByName(lista: Skin[], nome: string): Skin | undefined {
  const busca = nome.toLowerCase().trim();
  return lista.find((s) => s.name.toLowerCase().includes(busca));
}

export function priceRange(lista: Skin[], min: number, max: number): Skin[] {
    return lista.filter((s) => s.price >= min && s.price <= max);
}

export function applyDiscount(lista: Skin[], percentual: number): Skin[] {
    return lista.map((s) => ({
        ...s,
        price: s.price * (1 - percentual / 100),
    }));
}

export function averagePrice(lista: Skin[]): number {
    if (lista.length === 0) return 0;
    const soma = lista.reduce((acumulador, s) => acumulador + s.price, 0);
    return soma / lista.length;
}

export function sortByPrice(lista: Skin[]): Skin[] {
    return [...lista].sort((a, b) => a.price - b.price);
}

console.log("Disponíveis:", availableItems(skins).length);
console.log("Busca:", findByName(skins, "awp | asiimov")?.price);
console.log("Faixa 100-1000:", priceRange(skins, 100, 1000).map((s) => s.name));
console.log("Desconto 10%:", applyDiscount(skins, 10)[0].price);
console.log("Média:", averagePrice(skins));
console.log("Mais barato:", sortByPrice(skins)[0].name);
console.log("Original intacta:", skins[0].price); 
