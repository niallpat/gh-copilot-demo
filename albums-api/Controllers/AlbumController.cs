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

<<<<<<< HEAD
        //add a method that will get the id
        // GET api/album/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            // complete this method
            var album = Album.GetAll().Find(album => album.Id == id);
=======
        // get album by id with a return statement
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var albums = Album.GetAll();
            var album = albums.Find(a => a.Id == id);

>>>>>>> eb2e51b0b31e1f49b16b6061761c31066ea18d17
            if (album == null)
            {
                return NotFound();
            }

            return Ok(album);
        }

        // function that search album by name, artist or genre
<<<<<<< HEAD
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
=======
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
>>>>>>> eb2e51b0b31e1f49b16b6061761c31066ea18d17
                    break;
                default:
                    return BadRequest();
            }

            return Ok(albums);
        }

    }
}
