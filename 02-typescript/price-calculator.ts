// Regras:
// -subtotal= soma dos preços
// - taxa da plataforma = 5% do subtotal
// - cupom "BRS10" dá 10% de desconto sobre (subtotal + taxa);
//   outros cupons são ignorados
// - qualquer preço <= 0 é inválido e deve lançar um erro


function calcularSubtotal(precos: number[]): number {
    let soma = 0;
    for (const preco of precos) {
        soma = soma + preco;
    }
    return soma;
}

function calcularTaxa(subtotal: number): number {

    return subtotal * 0.05;
}

function aplicarCupom(valor: number, cupom?: string): number {
    if (cupom === "BRS10") {
        return valor * 0.90;
    }
    return valor;
}

function validarPrecos(precos: number[]): void {
    for (const preco of precos) {
        if (preco <= 0) {
            throw new Error("Preço inválido: " + preco);
        }
    }
}

function calcularTotal(precos: number[], cupom: string): number {
    validarPrecos(precos);
    const subtotal = calcularSubtotal(precos);
    const taxa = calcularTaxa(subtotal);
    return aplicarCupom(subtotal + taxa, cupom);
}

console.log("caso 1:", calcularTotal([100, 50]));
console.log("caso 2:", calcularTotal([100, 50], "BRS10"));
console.log("caso 3:", calcularTotal([]));
console.log("caso 4:", calcularTotal([200], "XYZ"));
console.log("caso 6:", calcularTotal([200, 200], "BRS10"));

try {
    calcularTotal([-5]);
} catch (error) {
    console.log("caso 5:", (error as Error).message);
}

//Meu caso 6:
// regras:
// - subtotal = 200 + 200 = 400
// - taxa = 5% de 400 = 20
// - valor com taxa = 400 + 20 = 420
// - desconto "BRS10" = 10% de 420 = 42

console.log("caso 6:", calcularTotal([200, 200], "BRS10")); 