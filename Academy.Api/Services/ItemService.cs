using Academy.Api.Data;
using Academy.Api.Entities;
using Academy.Api.Dtos;
using Microsoft.EntityFrameworkCore;

namespace Academy.Api.Services;

public class ItemService
{
    private readonly AcademyDbContext _context;

    public ItemService(AcademyDbContext context)
    {
        _context = context;
    }

    public async Task<List<Item>> GetAll(bool? available = null)
    {
        var query = _context.Items.AsQueryable();
        if (available.HasValue)
        {
            query = query.Where(i => i.Available == available.Value);
        }
        return await query.ToListAsync();
    }

    public async Task<Item?> GetById(int id)
    {
        return await _context.Items.FindAsync(id);
    }

    public async Task<Item> Create(CreateItemDto createDto)
    {
        var item = new Item
        {
            Name = createDto.Name,
            Price = createDto.Price,
            Available = true
        };

        _context.Items.Add(item);
        await _context.SaveChangesAsync();
        return item;
    }

    public async Task<Item?> SetAvailability(int id, bool available)
    {
        var item = await _context.Items.FindAsync(id);
        if (item == null) return null;

        item.Available = available;
        await _context.SaveChangesAsync();
        return item;
    }

    public async Task<bool> Delete(int id)
    {
        var item = await _context.Items.FindAsync(id);
        if (item == null) return false;

        _context.Items.Remove(item);
        await _context.SaveChangesAsync();
        return true;
    }
}