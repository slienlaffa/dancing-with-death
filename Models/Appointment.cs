using System;
using System.ComponentModel.DataAnnotations;

namespace DanceApi.Models
{
    public class Appointment
    {
        public long Id { get; set; }

        [DataType(DataType.Date)] 
        public DateTime DateAppointment { get; set; }
        public int StartTime { get; set; }
        [EmailAddress]
        public string Email { get; set; }
        [Phone]
        public string PhoneNumber { get; set; }
    }
}