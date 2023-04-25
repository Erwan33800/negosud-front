using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using nego.business;
using nego.communs.Model;
using nego.communs.Resource.Other;
using nego.services;
using nego.services.Authorization;

namespace nego.api.Controllers
{
    [Authorize]
    [Produces("application/json")]
    [Route("api/cart")]
    public class CartController : Controller
    {
        private readonly ICartService _cartService;

        public CartController(ICartService cartService)
        {
            _cartService = cartService;
        }

        [AllowAnonymous]
        [HttpGet]
        public IActionResult Index()
        {
            var cart = _cartService.GetCart();
            return Ok(cart);
        }

        [AllowAnonymous]
        [HttpPost]
        public async Task<IActionResult> AddToCart([FromBody] CartRequest data)
        {
            var article = await _cartService.AddToCart(data);
            if (article == true)
            {
                return Ok("Successfully added article to cart");
            }
            return BadRequest("Something wrong happened with Adition");
        }

        [AllowAnonymous]
        [HttpDelete]
        public async Task<IActionResult> RemoveFromCart([FromBody] CartRequest data)
        {
            var result = await _cartService.RemoveFromCart(data);
            if (result == true)
            {
                return Ok("Successfully removed article from cart");
            }
            return BadRequest("Something wrong happened with Deletion");
        }

        [AllowAnonymous]
        [HttpDelete("clear")]
        public async Task<IActionResult> ClearCart()
        {
            var result = await _cartService.ClearCart();
            if (result == true)
            {
                return Ok("Successfully cleared cart");
            }
            return BadRequest("Something wrong happened with the clear function");
        }
    }
}
