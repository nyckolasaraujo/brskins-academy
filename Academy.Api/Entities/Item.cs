namespace Academy.Api.Entities;

public class Item
{
    public int Id { get; set; }
    public string Name { get; set; } = "";
    public decimal Price { get; set; }
    public bool Available { get; set; } = true;
}
