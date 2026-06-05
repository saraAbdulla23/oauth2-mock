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
        const accessToken = tokenResponse.data.access_token;

        // use access token to get user information
        const userInfoResponse = await axios.get(
            "http://localhost:8080/userinfo",
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            }
        );

        // send token and user info back to frontend
        res.json({
            token: tokenResponse.data,
            user: {
                ...userInfoResponse.data, //userinfo endpoint will return id "johndoe" by default
                name: "John Doe",
                email: "john.doe@gmail.com",
                role: "SELLER"
            }
        });
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