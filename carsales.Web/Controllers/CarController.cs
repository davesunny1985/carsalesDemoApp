using System.Threading.Tasks;
using carsales.Application.Interfaces;
using carsales.Application.ViewModels;
using carsales.Domain.Core.Bus;
using carsales.Domain.Core.Notifications;
using MediatR;
using Microsoft.AspNetCore.Mvc;


namespace carsales.Web.Controllers
{
    [Route("api/[controller]")]
    public class CarController : ApiController
    {
        private readonly ICarAppService _carAppService;
        public CarController(
           ICarAppService carAppService,
           INotificationHandler<DomainNotification> notifications,
           IMediatorHandler mediator) : base(notifications, mediator)
        {
            _carAppService = carAppService;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Response(_carAppService.GetAll());
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody]CarViewModel carViewModel)
        {
            if (!ModelState.IsValid)
            {
                NotifyModelStateErrors();
                return Response(carViewModel);
            }

            await _carAppService.CreateAsync(carViewModel);

            return Response(carViewModel);
        }
    }
}
