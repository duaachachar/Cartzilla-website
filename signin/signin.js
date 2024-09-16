
document
  .getElementById("user-details")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    let userEmail = document.getElementById("user-email").value;
    let userPassword = document.getElementById("user-password").value;

    try {
      let UserApi = await fetch("https://fakestoreapi.com/users");
      let apiJson = await UserApi.json();

      console.log(apiJson);

      // Check if any user matches the email and password
      const setInputValue = apiJson.filter(
        user => user.email === userEmail && user.password === userPassword
      );

      console.log(setInputValue);

      // Check if the filtered result is not empty
      if (setInputValue.length > 0) {
        window.location.href = "../index.html"; // Redirect if user found
      } else {
        alert('Something went wrong. Please check your credentials.');
      } 
    } catch (error) {
      console.error("Error", error);
    }
  });
