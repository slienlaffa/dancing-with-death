using danceAPI.Controllers;
using danceAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Moq;
using System;
using System.Net;
using Xunit;

namespace danceAPI.tests
{
    public class UnitTestAppointments
    {
        [Fact]
        public async void Appointment_MustBeIn_OfficeHours()
        {
            // Arrange
            var mockAppointment = new Mock<DanceContext>();
            var controller = new AppointmentsController(mockAppointment.Object);

            var modelCorrect = new Appointment()
            {
                DateAppointment = new DateTime(2019, 03, 11),
                StartTime = 9,
                Email = "someguy@gmail.com"
            };
            var modelTooEarly = new Appointment()
            {
                DateAppointment = new DateTime(2019, 03, 11),
                StartTime = 8,
                Email = "early_bird@gmail.com"
            };
            var modelTooLate = new Appointment()
            {
                DateAppointment = new DateTime(2019, 03, 11),
                StartTime = 19,
                Email = "night_owl@gmail.com"
            };
            var modelSaturday = new Appointment()
            {
                DateAppointment = new DateTime(2019, 03, 16),
                StartTime = 12,
                Email = "lost_guy@gmail.com"
            };
            var modelSunday = new Appointment()
            {
                DateAppointment = new DateTime(2019, 03, 17),
                StartTime = 18,
                Email = "saturnian_guy@gmail.com"
            };
            // Act
            var result1 = await controller.PostAppointment(modelCorrect);
            var result2 = await controller.PostAppointment(modelTooEarly);
            var result3 = await controller.PostAppointment(modelTooLate);
            var result4 = await controller.PostAppointment(modelSaturday);
            var result5 = await controller.PostAppointment(modelSunday);

            // Assert
            var actionResult1 = Assert.IsType<ActionResult<Appointment>>(result1);
            Assert.IsType<CreatedAtActionResult>(actionResult1.Result);
            var actionResult2 = Assert.IsType<ActionResult<Appointment>>(result2);
            Assert.IsType<ConflictObjectResult>(actionResult2.Result);
            var actionResult3 = Assert.IsType<ActionResult<Appointment>>(result3);
            Assert.IsType<ConflictObjectResult>(actionResult3.Result);
            var actionResult4 = Assert.IsType<ActionResult<Appointment>>(result4);
            Assert.IsType<ConflictObjectResult>(actionResult4.Result);
            var actionResult5 = Assert.IsType<ActionResult<Appointment>>(result5);
            Assert.IsType<ConflictObjectResult>(actionResult5.Result);
        }

        [Fact]
        public async void Appointment_MustContain_Date_Time_Contact()
        {
            // Arrange
            var mockAppointment = new Mock<DanceContext>();
            var controller = new AppointmentsController(mockAppointment.Object);

            var modelCorrectEmail = new Appointment()
            {
                DateAppointment = new DateTime(2019, 03, 11),
                StartTime = 9,
                Email = "someguy@gmail.com"
            };
            var modelCorrectPhone = new Appointment()
            {
                DateAppointment = new DateTime(2019, 03, 11),
                StartTime = 10,
                PhoneNumber = "85415195"
            };
            var modelNoContact = new Appointment()
            {
                DateAppointment = new DateTime(2019, 03, 12),
                StartTime = 19
            };
            var modelContact = new Appointment()
            {
                DateAppointment = new DateTime(2019, 03, 15),
                StartTime = 12,
                Email = "lost_guy@gmail.com",
                PhoneNumber = "85415195"
            };
            var modelNoStartTime = new Appointment()
            {
                DateAppointment = new DateTime(2019, 03, 15),
                Email = "saturnian_guy@gmail.com"
            };
            var modelNoDate = new Appointment()
            {
                StartTime = 12,
                Email = "saturnian_guy@gmail.com"
            };
            // Act
            var result1 = await controller.PostAppointment(modelCorrectEmail);
            var result2 = await controller.PostAppointment(modelCorrectPhone);
            var result3 = await controller.PostAppointment(modelNoContact);
            var result4 = await controller.PostAppointment(modelContact);
            var result5 = await controller.PostAppointment(modelNoStartTime);
            var result6 = await controller.PostAppointment(modelNoDate);

            // Assert
            var actionResult1 = Assert.IsType<ActionResult<Appointment>>(result1);
            Assert.IsType<CreatedAtActionResult>(actionResult1.Result);
            var actionResult2 = Assert.IsType<ActionResult<Appointment>>(result2);
            Assert.IsType<CreatedAtActionResult>(actionResult2.Result);
            var actionResult3 = Assert.IsType<ActionResult<Appointment>>(result3);
            Assert.IsType<BadRequestObjectResult>(actionResult3.Result);
            var actionResult4 = Assert.IsType<ActionResult<Appointment>>(result4);
            Assert.IsType<CreatedAtActionResult>(actionResult4.Result);
            var actionResult5 = Assert.IsType<ActionResult<Appointment>>(result5);
            Assert.IsType<BadRequestObjectResult>(actionResult5.Result);
            var actionResult6 = Assert.IsType<ActionResult<Appointment>>(result6);
            Assert.IsType<BadRequestObjectResult>(actionResult6.Result);
        }


    }
}
