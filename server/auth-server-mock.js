const { OAuth2Server } = require("oauth2-mock-server");

async function runOAuthServer() {
    try {
        const server = new OAuth2Server();

        // Generate signing keys
        await server.issuer.keys.generate("RS256");
        await server.start(8080, "localhost");

        console.log("OAuth2 Mock server is running on http://localhost:8080")
    } catch (error) {
        console.error("Failed to start the server due to",error);
    }
}
runOAuthServer();