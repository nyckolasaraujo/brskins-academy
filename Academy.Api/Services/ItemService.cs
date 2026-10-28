using Academy.Api.Data;
using Academy.Api.Dtos;
using Academy.Api.Entities;
using Microsoft.EntityFrameworkCore;

namespace Academy.Api.Services;

public class ItemService
{
    private readonly AcademyDbContext _db;

    public ItemService(AcademyDbContext db)
    {
        _db = db;
    }

    public async Task<List<ItemDto>> GetAllAsync(bool? available)
    {
        var query = _db.Items.AsQueryable();
        if (available.HasValue)
        {
            query = query.Where(i => i.Available == available.Value);
        }
        var items = await query.OrderBy(i => i.Id).ToListAsync();
        return items.Select(ToDto).ToList();
    }

    public async Task<ItemDto?> GetByIdAsync(int id)
    {
        var item = await _db.Items.FindAsync(id);
        return item is null ? null : ToDto(item);
    }

    public async Task<ItemDto> CreateAsync(CreateItemDto dto)
    {
        if (string.IsNullOrWhiteSpace(dto.Name) || dto.Price <= 0)
        {
            throw new ArgumentException("Nome obrigatório e preço > 0.");
        }
        var item = new Item { Name = dto.Name, Price = dto.Price };
        _db.Items.Add(item);
        await _db.SaveChangesAsync();
        return ToDto(item);
    }

    public async Task<ItemDto?> SetAvailabilityAsync(int id, bool available)
    {
        var item = await _db.Items.FindAsync(id);
        if (item is null) return null;
        item.Available = available;
        await _db.SaveChangesAsync();
        return ToDto(item);
    }

    private static ItemDto ToDto(Item i) =>
        new(i.Id, i.Name, i.Price, i.Available);
}

