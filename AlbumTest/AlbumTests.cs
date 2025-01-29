using NUnit.Framework;
using albums_api.Models;
using System.Collections.Generic;

namespace AlbumTest
{
    [TestFixture]
    public class AlbumTests
    {
        [Test]
        public void GetAll_ShouldReturnAllAlbums()
        {
            // Arrange
            var expectedAlbums = new List<Album>
            {
                new Album(1, "You, Me and an App Id", "Daprize", 10.99, "https://aka.ms/albums-daprlogo"),
                new Album(2, "Seven Revision Army", "The Blue-Green Stripes", 13.99, "https://aka.ms/albums-containerappslogo"),
                new Album(3, "Scale It Up", "KEDA Club", 13.99, "https://aka.ms/albums-kedalogo"),
                new Album(4, "Lost in Translation", "MegaDNS", 12.99,"https://aka.ms/albums-envoylogo"),
                new Album(5, "Lock Down Your Love", "V is for VNET", 12.99, "https://aka.ms/albums-vnetlogo"),
                new Album(6, "Sweet Container O' Mine", "Guns N Probeses", 14.99, "https://aka.ms/albums-containerappslogo")
            };

            // Act
            var actualAlbums = Album.GetAll();

            // Assert
            Assert.AreEqual(expectedAlbums, actualAlbums);
        }
    }
}
