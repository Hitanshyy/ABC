document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("signupForm");
    
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      const email = document.getElementById("email").value;
      alert(`Thank you for subscribing with ${email}!`);
      form.reset();
    });
  });
  