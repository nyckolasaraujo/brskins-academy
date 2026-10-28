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
public IActionResult GetAll([FromQuery] bool? available)
{
    var items = _service.GetAll(available);
    return Ok(items);
}

    [HttpGet("{id:int}")]
    public IActionResult GetById(int id)
    {
        var item = _service.GetById(id);
        return item is null ? NotFound() : Ok(item);
    }

 [HttpPost]
public IActionResult Create(CreateItemDto dto)
{
    try
    {
        var created = _service.Create(dto);
        return CreatedAtAction(
            nameof(GetById), new { id = created.Id }, created);
    }
    catch (ArgumentException ex)
    {
        return BadRequest(new { error = ex.Message });
    }
}

    [HttpPut("{id:int}/availability")]
    public IActionResult UpdateAvailability(int id, UpdateAvailabilityDto dto)
    {
        var updated = _service.SetAvailability(id, dto.Available);
        return updated is null ? NotFound() : Ok(updated);
    }

    [HttpDelete("{id:int}")]
public IActionResult Delete(int id)
{
    var deleted = _service.Delete(id);
    return deleted ? NoContent() : NotFound();
}
}