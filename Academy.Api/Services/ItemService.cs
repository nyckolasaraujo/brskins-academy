using Academy.Api.Dtos;

namespace Academy.Api.Services;

public class ItemService
{
    // Por enquanto os dados vivem em memória. Na Etapa 10 isso vira PostgreSQL.
    private readonly List<ItemDto> _items = new()
    {
        new(1, "AK-47 | Redline", 120m, true),
        new(2, "AWP | Asiimov", 430m, false),
    };

   public IReadOnlyList<ItemDto> GetAll(bool? available = null)
{
    if (available.HasValue)
    {
        return _items.Where(i => i.Available == available.Value).ToList();
    }
    return _items;
}

    public ItemDto? GetById(int id) => _items.FirstOrDefault(i => i.Id == id);

   public ItemDto Create(CreateItemDto dto)
{
    if (string.IsNullOrWhiteSpace(dto.Name) || dto.Price <= 0)
    {
        throw new ArgumentException("Nome obrigatório e preço > 0.");
    }

    var nextId = _items.Count == 0 ? 1 : _items.Max(i => i.Id) + 1;
    var item = new ItemDto(nextId, dto.Name, dto.Price, true);
    _items.Add(item);
    return item;
}

    public ItemDto? SetAvailability(int id, bool available)
    {
        var index = _items.FindIndex(i => i.Id == id);
        if (index < 0) return null;
        _items[index] = _items[index] with { Available = available };
        return _items[index];
    }

    public bool Delete(int id)
{
    var index = _items.FindIndex(i => i.Id == id);
    if (index < 0) return false;

    _items.RemoveAt(index);
    return true;
}
}