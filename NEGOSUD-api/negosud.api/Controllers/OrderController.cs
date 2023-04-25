using Azure;
using Microsoft.AspNetCore.Mvc;
using nego.business;
using nego.communs.Model;
using nego.communs.resource;
using nego.communs.Resource;
using nego.communs.Resource.Other;
using nego.services;
using nego.services.Authorization;

namespace nego.api.Controllers
{
    [Authorize]
    [Produces("application/json")]
    [Route("api/order")]
    public class OrderController : Controller
    {
        private readonly IOrderService _orderService;

        public OrderController(IOrderService orderService)
        {
            _orderService = orderService;
        }

        [AllowAnonymous]
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var orders = await _orderService.GetAll();
            return Ok(orders);
        }

        [AllowAnonymous]
        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var order = await _orderService.GetById(id);
            return Ok(order);
        }

        [AllowAnonymous]
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteById(int id)
        {
            var order = await _orderService.DeleteById(id);
            if (order == true)
            {
                return Ok("Successfully deleted order");
            }
            return BadRequest("Something wrong happened Deletion");
        }

        [AllowAnonymous]
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] OrderCreationDTO data)
        {
            var response = await _orderService.Add(data);
            if (response == true)
            {
                return Ok("Successfully Created order");
            }
            return BadRequest("Something wrong happened with Creation");
        }

        [AllowAnonymous]
        [HttpPost("confirmOrder")]
        public async Task<IActionResult> ConfirmOrder(int id)
        {
            var response = await _orderService.ConfirmOrder(id);
            if (response == true )
            {
                return Ok("Order has been confirmed succesfully, changes has been saved to the database");
            }
            return BadRequest("OrderType can only be declared as 'addStock' or as 'removeStock'");
        }

        [AllowAnonymous]
        [HttpPut]
        public async Task<IActionResult> Update([FromBody] OrderRessource data)
        {
            var order = await _orderService.Update(data);
            if (order != null)
            {
                return Ok("Successfully Updated order");
            }
            return BadRequest("Something wrong happened with Update");
        }
    }
}
