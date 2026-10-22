namespace AcademyDomain;

public class Order
{
    public int Id { get; }
    public User User { get; }
    
    // Lista privada para encapsulamento
    private readonly List<OrderItem> _items = new();

    // Exposição pública apenas para leitura
    public IReadOnlyList<OrderItem> Items => _items;

    public Order(int id, User user)
    {
        Id = id;
        User = user;
    }

    // 1. Exercício: Cálculo do Total usando LINQ
    public decimal Total => _items.Sum(i => i.UnitPrice);

    public void AddItem(Item item)
    {
        // Regra 1: Verificar se o item está disponível
        if (!item.Available)
        {
            throw new InvalidOperationException("Item indisponível: " + item.Name);
        }

        // Regra 2 (Exercício): O mesmo item não pode entrar duas vezes no pedido
        if (_items.Any(i => i.Item.Id == item.Id))
        {
            throw new InvalidOperationException("Item já adicionado ao pedido: " + item.Name);
        }

        _items.Add(new OrderItem(item, item.Price));
    }

    // 3. Exercício: RemoveItem(int itemId)
    public void RemoveItem(int itemId)
    {
        var itemParaRemover = _items.FirstOrDefault(i => i.Item.Id == itemId);

        if (itemParaRemover is null)
        {
            throw new InvalidOperationException($"Item com ID {itemId} não encontrado no pedido.");
        }

        _items.Remove(itemParaRemover);
    }

    // 4. Exercício: Describe()
    public string Describe()
    {
        var nomesItens = _items.Select(i => i.Item.Name);
        var listaFormatada = string.Join(", ", nomesItens);

        return $"Pedido #{Id} - Usuário: {User.Name} | Itens: [{listaFormatada}] | Total: R$ {Total}";
    }
}