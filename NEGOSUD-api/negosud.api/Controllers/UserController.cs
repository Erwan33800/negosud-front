﻿using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using nego.business;
using nego.communs.Model;
using nego.communs.Resource;
using nego.communs.Resource.Other;
using nego.services;
using nego.services.Authorization;
using nego.services.Authorization.Helper;

namespace nego.api.Controllers
{
    [Authorize]
    [Produces("application/json")]
    [Route("api/user")]
    public class UserController : Controller
    {
        private readonly IMapper _mapper;
        private readonly IUserService _clientService;
        private readonly AppSettings _appSettings;


        public UserController(IUserService clientService, IOptions<AppSettings> appSettings)
        {
            _clientService = clientService;
            _appSettings = appSettings.Value;
        }

        /*        [Authorize(1)]
        */
        [AllowAnonymous]
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var users = await _clientService.GetAll();
            return Ok(users);
        }

        [AllowAnonymous]
        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var user = await _clientService.GetById(id);
            return Ok(user);
        }

        [AllowAnonymous]
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteById(int id)
        {
            var user = await _clientService.DeleteById(id);
            if (user == true)
            {
                return Ok("Successfully deleted user");
            }
            return BadRequest("Something wrong happened Deletion");
        }

        [AllowAnonymous]
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] UserCreationDTO data)
        {
            var response = await _clientService.Add(data);
            if (response == true)
            {
                return Ok("Successfully Created user");
            }
            return BadRequest("Something wrong happened with Creation");
        }

        [AllowAnonymous]
        [HttpPost("authenticate")]
        public async Task<IActionResult> Authenticate([FromBody] AuthenticateRequest model)
        {
            var response = _clientService.Authenticate(model);
            return Ok(response);
        }

        [AllowAnonymous]
        [HttpPut]
        public async Task<IActionResult> Update([FromBody] UserRessource data)
        {
            var user = await _clientService.Update(data);
            if (user != null)
            {
                return Ok("Successfully updated user");
            }
            return BadRequest("Something wrong happened with Update");
        }

    }
}