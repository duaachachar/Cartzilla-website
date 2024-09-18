

document.getElementById('user-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting

  const email = document.getElementById('user-email').value.trim();
  const password = document.getElementById('user-password').value.trim();
  const errorMessage = document.getElementById('error-message');

  if (!email || !password) {
    errorMessage.textContent = "Both email and password are required.";
  } else {
    
    window.location.href = '../signup/signup.html'; // Redirect to signup page (simple path)
  }
});
