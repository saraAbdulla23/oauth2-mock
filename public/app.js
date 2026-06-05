// handle login button click
document
  .getElementById("loginBtn")
  .addEventListener("click", () => {

    // build the OAuth authorize URL params
    const params = new URLSearchParams({
      response_type: "code",
      client_id: "my-client-id",
      redirect_uri: "http://localhost:3000/callback.html",
      scope: "openid profile email",
      state: crypto.randomUUID() //random security value
    });

    // redirect user to OAuth server login page
    window.location.href =
      `http://localhost:8080/authorize?${params}`;
  });