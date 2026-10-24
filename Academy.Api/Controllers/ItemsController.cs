using Academy.Api.Dtos;
using Academy.Api.Services;
using Microsoft.AspNetCore.Mvc;

namespace Academy.Api.Controllers;

[ApiController]
[Route("api/items")]
public class ItemsController : ControllerBase
{
    private readonly ItemService _service;

    public ItemsController(ItemService service)
    {
        _service = service;
    }

    [HttpGet]
    public IActionResult GetAll() => Ok(_service.GetAll());

    [HttpGet("{id:int}")]
    public IActionResult GetById(int id)
    {
        var item = _service.GetById(id);
        return item is null ? NotFound() : Ok(item);
    }

    [HttpPost]
    public IActionResult Create(CreateItemDto dto)
    {
        if (string.IsNullOrWhiteSpace(dto.Name) || dto.Price <= 0)
        {
            return BadRequest(new { error = "Nome obrigatório e preço > 0." });
        }
        var created = _service.Create(dto);
        return CreatedAtAction(
            nameof(GetById), new { id = created.Id }, created);
    }

    [HttpPut("{id:int}/availability")]
    public IActionResult UpdateAvailability(int id, UpdateAvailabilityDto dto)
    {
        var updated = _service.SetAvailability(id, dto.Available);
        return updated is null ? NotFound() : Ok(updated);
    }
}