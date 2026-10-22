using AcademyDomain;

var itens = new List<Item>
{
    new(1, "AK-47 | Redline", 120m, true),
    new(2, "AWP | Asiimov", 430m, false),
    new(3, "M4A4 | Howl", 5200m, true),
    new(4, "Glock-18 | Fade", 900m, true),
};

var ana = new User(1, "Ana");

// LINQ: disponíveis, ordenados por preço
var disponiveis = itens.Where(i => i.Available).OrderBy(i => i.Price).ToList();
Console.WriteLine("Disponíveis: " + disponiveis.Count);       // Esperado: 3
Console.WriteLine("Mais barato: " + disponiveis.First().Name); // Esperado: AK-47 | Redline

// Pedido válido
var pedido = new Order(1, ana);
pedido.AddItem(itens[0]); // AK-47 (120m)
pedido.AddItem(itens[3]); // Glock-18 (900m)
Console.WriteLine("Total do pedido: " + pedido.Total);        // Esperado: 1020

// Teste Describe()
Console.WriteLine(pedido.Describe()); 
// Esperado: Pedido #1 - Usuário: Ana | Itens: [AK-47 | Redline, Glock-18 | Fade] | Total: R$ 1020

// Teste de Erro: Item Indisponível
try
{
    pedido.AddItem(itens[1]); // AWP | Asiimov (false)
}
catch (InvalidOperationException ex)
{
    Console.WriteLine("Erro esperado (Indisponível): " + ex.Message);
}

// Teste de Erro: Item Duplicado
try
{
    pedido.AddItem(itens[0]); // AK-47 já foi adicionada
}
catch (InvalidOperationException ex)
{
    Console.WriteLine("Erro esperado (Duplicado): " + ex.Message);
}

// Teste RemoveItem()
pedido.RemoveItem(1); // Remove AK-47
Console.WriteLine("Total após remoção: " + pedido.Total);     // Esperado: 900

// Teste de Erro: Remover item inexistente
try
{
    pedido.RemoveItem(999);
}
catch (InvalidOperationException ex)
{
    Console.WriteLine("Erro esperado (Remoção inválida): " + ex.Message);
}