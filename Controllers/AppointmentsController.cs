using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using DanceApi.Models;
using Microsoft.EntityFrameworkCore;

namespace DanceApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AppointmentsController : ControllerBase
    {
        private readonly DanceContext _context;

        public AppointmentsController(DanceContext context)
        {
            _context = context;
        }

        // GET: api/Appointments
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Appointment>>> GetAppointments()
        {
            return await _context.Appointments.ToListAsync();
        }

        // GET: api/Appointments/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Appointment>> GetAppointment(long id)
        {
            var appointment = await _context.Appointments.FindAsync(id);

            if (appointment == null)
            {
                return NotFound();
            }

            return appointment;
        }

        // POST: api/Appointments
        [HttpPost]
        public async Task<ActionResult<Appointment>> PostAppointment(Appointment item)
        {
            if (!containInformationNeeded(item)) return BadRequest("Must contain date, time and contact(email or phone)");
            if (!ModelState.IsValid) return BadRequest(ModelState);
            if (!isOfficeHours(item)) return Conflict("Must be office hours (9 am to 6pm Monday to Friday)");
            if (findByDateStart(item)) return Conflict("Date and hour already booked");

            _context.Appointments.Add(item);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetAppointment), new { id = item.Id }, item);
        }

        // PUT: api/Appointments/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAppointment(long id, Appointment item)
        {
            if (!containInformationNeeded(item)) return BadRequest("Must contain date, time and contact(email or phone)");
            if (!ModelState.IsValid) return BadRequest(ModelState);
            if (!isOfficeHours(item)) return Conflict("Must be office hours (9 am to 6pm Monday to Friday)");
            if (findByDateStart(item)) return Conflict("Date and hour already booked");

            if (id != item.Id)
            {
                return BadRequest();
            }

            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // DELETE: api/Appointments/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAppointment(long id)
        {
            var todoItem = await _context.Appointments.FindAsync(id);

            if (todoItem == null)
            {
                return NotFound();
            }

            _context.Appointments.Remove(todoItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool isOfficeHours(Appointment a)
        {
            return a.StartTime >= 9 &&
                a.StartTime <= 18 &&
                a.DateAppointment.DayOfWeek != DayOfWeek.Saturday &&
                a.DateAppointment.DayOfWeek != DayOfWeek.Sunday;
        }

        private bool containInformationNeeded(Appointment a)
        {
            return a.DateAppointment != DateTime.MinValue &&
                a.StartTime != 0  &&
                (
                    ! String.IsNullOrWhiteSpace(a.Email)
                    || ! String.IsNullOrWhiteSpace(a.PhoneNumber)
                );
        }

        private bool findByDateStart(Appointment a)
        {
            try
            {
                var appointment = _context.Appointments
                    .Where(q => q.DateAppointment == a.DateAppointment &&
                    q.StartTime == a.StartTime)
                    .FirstOrDefault();

                Console.WriteLine(appointment.Email);
                return true;
            }
            catch { return false; }
        }
    }
}