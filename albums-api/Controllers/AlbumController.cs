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
            //throw new Exception("This is a deliberate exception.");
            var albums = Album.GetAll();

            return Ok(albums);
        }

        //add a method that will get the id
        // GET api/album/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            // complete this method
            var album = Album.GetAll().Find(album => album.Id == id);
            if (album == null)
            {
                return NotFound();
            }

            return Ok(album);
        }

        // function that search album by name, artist or genre
        // GET api/album/search?query=keyword
        [HttpGet("search")]
        public IActionResult Search(string query)
        {
            // complete this method
            var albums = Album.GetAll().FindAll(album => album.Title.Contains(query) || album.Artist.Contains(query));
            if (albums == null)
            {
                return NotFound();
            }

            return Ok(albums);
        }

        // function that sort albums by name, artist or genre
        // GET api/album/sort?by=keyword
        [HttpGet("sort")]
        public IActionResult Sort(string by)
        {
            // complete this method
            var albums = Album.GetAll();
            switch (by)
            {
                case "title":
                    albums.Sort((a, b) => a.Title.CompareTo(b.Title));
                    break;
                case "artist":
                    albums.Sort((a, b) => a.Artist.CompareTo(b.Artist));
                    break;
                case "price":
                    albums.Sort((a, b) => a.Price.CompareTo(b.Price));
                    break;
                default:
                    return BadRequest();
            }

            return Ok(albums);
        }

    }
}
