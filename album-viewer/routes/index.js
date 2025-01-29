var express = require("express");
var router = express.Router();
require("dotenv").config();
const axios = require("axios");

 const DaprHttpPort = process.env.DAPR_HTTP_PORT || "3500";
 const AlbumService = process.env.ALBUM_API_NAME || "album-api";
 const Background = process.env.BACKGROUND_COLOR || "black";

/* GET home page. */
router.get("/", async function (req, res, next) {
  try {
<<<<<<< HEAD
    
    // const url = `http://127.0.0.1:${DaprHttpPort}/v1.0/invoke/${AlbumService}/method/albums`;
    const url = `https://localhost:7212/albums`;
    console.log("Invoking album-api via locally: " + url);
=======
    // Call the album-api service via Dapr
    // The album-api service is registered with Dapr and can be invoked via Dapr
    // The Dapr sidecar is listening on port 3500
    // The album-api service is listening on port 5000
    // The Dapr sidecar will forward the request to the album-api service
    // The Dapr sidecar will handle service discovery, retries, and other features
    // The Dapr sidecar will also handle secrets, configuration, and other features
    // The Dapr sidecar will also handle distributed tracing, metrics, and other features
    const url = `http://127.0.0.1:${DaprHttpPort}/v1.0/invoke/${AlbumService}/method/albums`;
    console.log("Invoking album-api via dapr: " + url);
>>>>>>> eb2e51b0b31e1f49b16b6061761c31066ea18d17
    axios.headers = { "Content-Type": "application/json" };
    var response = await axios.get(url);
    data = response.data || [];
    console.log("Response from backend albums api: ", data);
    res.render("index", {
      albums: data,
      background_color: Background,
    });
  } catch (err) {
    console.log("Error: ", err);
    next(err);
  }
});

module.exports = router;
