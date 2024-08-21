const express = require('express')
const app = express()
const ImageKit = require("imagekit");




var imagekit = new ImageKit({
    publicKey : "your_public_api_key",
    privateKey : "your_private_api_key",
    urlEndpoint : "https://ik.imagekit.io/your_imagekit_id/"
});

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.listen(300)