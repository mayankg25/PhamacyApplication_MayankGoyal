using Pharmacy_Backend.Models;
using Microsoft.AspNetCore.Hosting;
using System.Text.Json;

namespace Pharmacy_Backend.Services;
public class PharmacyService
{
    private readonly string _filePath;

    public PharmacyService(IWebHostEnvironment environment)
    {
        _filePath = Path.Combine(environment.ContentRootPath, "Data", "medicines.json");
    }
    
    /// <summary>
    /// This method is used to return all the medicines stored in local json database.
    /// </summary>
    /// <returns>List of <see cref="Medicine"/></returns>
    public List<Medicine> GetAll()
    {
        return ReadFile();
    }

    public void Add(Medicine medicine)
    {
        var data = ReadFile();
        medicine.Id = data.Count > 0 ? data.Max(x => x.Id) + 1 : 1;

        data.Add(medicine);
        WriteFile(data);
    }

    public void Update(Medicine medicine)
    {
        var data = ReadFile();
        var existing = data.FirstOrDefault(x => x.Id == medicine.Id);

        if (existing != null)
        {
            existing.Name = medicine.Name;
            existing.Price = medicine.Price;
            existing.Notes = medicine.Notes;
            existing.ExpiryDate = medicine.ExpiryDate;
            existing.Quantity = medicine.Quantity;
            existing.Brand = medicine.Brand;
            WriteFile(data);
        }
    }

    public void Delete(int id)
    {
        var data = ReadFile();
        var item = data.FirstOrDefault(x => x.Id == id);

        if (item != null)
        {
            data.Remove(item);
            WriteFile(data);
        }
    }

    private List<Medicine> ReadFile()
    {
        if (!File.Exists(_filePath))
            return new List<Medicine>();

        var json = File.ReadAllText(_filePath);
        return JsonSerializer.Deserialize<List<Medicine>>(json) ?? new List<Medicine>();
    }

     private void WriteFile(List<Medicine> medicines)
    {
        var json = JsonSerializer.Serialize(medicines, new JsonSerializerOptions
        {
            WriteIndented = true
        });

        File.WriteAllText(_filePath, json);
    }
}