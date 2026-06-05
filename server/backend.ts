const express = require("express"); // a framework to create the server
const axios = require("axios"); // for HTTP requests
const path = require("path"); // to set the html file paths properly

const app = express(); // our actual server object

const publicPath = path.resolve(__dirname, "..", "public");
app.use(express.static(publicPath));

app.get("/exchange", async (req, res)=> {
    try {
        const {code} = req.query; // get code from URL query
        const tokenResponse = await axios.post(
            "http://localhost:8080/token",
            new URLSearchParams({
                grant_type: "authorization_code",
                code: code,
                client_id: "my-client-id",
                redirect_uri: "http://localhost:3000/callback.html"
            }),
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded" // telling the server that im sending form style data
                }
            }
        );
        res.json(tokenResponse.data); // send token back to frontend
    } catch (error) {
        console.error("Error", error.message);
        res.status(500).json({
            error: "OAuth flow failed"
        });
    }
});

// start server
app.listen(3000, () => {
    console.log("Frontend running on http://localhost:3000");
  });