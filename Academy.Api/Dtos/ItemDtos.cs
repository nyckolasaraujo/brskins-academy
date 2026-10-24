namespace Academy.Api.Dtos;

public record ItemDto(int Id, string Name, decimal Price, bool Available);
public record CreateItemDto(string Name, decimal Price);
public record UpdateAvailabilityDto(bool Available);