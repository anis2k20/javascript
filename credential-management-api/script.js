document.getElementById("login-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  alert("Logging in with username: " + username);

  //   STORE CREDENTIALS
  const credentials = new PasswordCredential({
    id: username,
    password: password,
  });

  try {
    await navigator.credentials.store(credentials);
    console.log("Credentials stored successfully");
  } catch (err) {
    console.error("Error storing credentials: ", err);
  }
});

document.getElementById("logout").addEventListener("click", async () => {
  try {
    await navigator.credentials.preventSilentAccess();
    alert("Logged out successfully");
  } catch (err) {
    console.error("Error logging out: ", err);
  }
});
