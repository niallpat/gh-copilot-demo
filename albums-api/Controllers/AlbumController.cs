using albums_api.Models;
using Microsoft.AspNetCore.Mvc;
using System.Net;
using System.Text.Json;
using System.Text;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace albums_api.Controllers
{
    [Route("albums")]
    [ApiController]
    public class AlbumController : ControllerBase
    {
        // GET: api/album
        [HttpGet]
        public IActionResult Get()
        {
            var albums = Album.GetAll();

            return Ok(albums);
        }

        // get album by id with a return statement
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var albums = Album.GetAll();
            var album = albums.Find(a => a.Id == id);

            if (album == null)
            {
                return NotFound();
            }

            return Ok(album);
        }

        // function that search album by name, artist or genre
        [HttpGet("search")]
        public IActionResult Search([FromQuery] string query)
        {
            var albums = Album.GetAll();
            var searchResults = albums.FindAll(a => a.Title.Contains(query) || a.Artist.Contains(query) || a.Genre.Contains(query));

            return Ok(searchResults);
        }

        // function that sort albums by name, artist or genre
        [HttpGet("sort")]
        public IActionResult Sort([FromQuery] string field)
        {
            var albums = Album.GetAll();
            switch (field)
            {
                case "title":
                    albums.Sort((a, b) => string.Compare(a.Title, b.Title));
                    break;
                case "artist":
                    albums.Sort((a, b) => string.Compare(a.Artist, b.Artist));
                    break;
                case "genre":
                    albums.Sort((a, b) => string.Compare(a.Genre, b.Genre));
                    break;
                default:
                    return BadRequest();
            }

            return Ok(albums);
        }

    }
}
