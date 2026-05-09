using Pharmacy_Backend.Models;
using Microsoft.AspNetCore.Mvc;
using Pharmacy_Backend.Services;

namespace Pharmacy_Backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PharmacyController : ControllerBase
{
    private readonly PharmacyService _service;

    public PharmacyController(PharmacyService service)
    {
        _service = service;
    }

    [HttpGet]
    public IEnumerable<Medicine> GetAllMedicines()
    {
        return _service.GetAll();
    }

    [HttpPost]
    public IActionResult Add(Medicine medicine)
    {
        _service.Add(medicine);
        return Ok();
    }

    [HttpPut]
    public IActionResult Update(Medicine medicine)
    {
        _service.Update(medicine);
        return Ok();
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        _service.Delete(id);
        return Ok();
    }
}