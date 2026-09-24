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
