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

    /// <summary>
    /// Returns a list of all medicines in the pharmacy.
    /// </summary>
    /// <returns></returns>
    [HttpGet]
    public IEnumerable<Medicine> GetAllMedicines()
    {
        return _service.GetAll();
    }

    /// <summary>
    /// Returns the medicine with the specified id.
    /// </summary>
    /// <param name="id">The id of the medicine to return.</param>
    /// <returns></returns>
    [HttpGet("{id}")]
    public IActionResult GetMedicineById(int id)
    {
        var medicine = _service.GetMedicineById(id);
        if (medicine == null)
        {
            return NotFound();
        }
        return Ok(medicine);
    }

    /// <summary>
    /// Adds a new medicine.
    /// </summary>
    /// <param name="medicine">The medicine object to add.</param>
    /// <returns></returns>
    [HttpPost]
    public IActionResult Add(Medicine medicine)
    {
        _service.Add(medicine);
        return Ok();
    }

    /// <summary>
    /// Updates the details of an existing medicine.
    /// </summary>
    /// <param name="medicine">The medicine object with updated details.</param>
    /// <returns></returns>
    [HttpPut("{id}")]
    public IActionResult Update(int id, Medicine medicine)
    {
        medicine.Id = id;
        _service.Update(medicine);
        return Ok();
    }

    /// <summary>
    /// Deletes the medicine with the specified id.
    /// </summary>
    /// <param name="id">The id of the medicine to delete.</param>
    /// <returns></returns>
    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        _service.Delete(id);
        return Ok();
    }
}