// Toggle background color
function toggleBackgroundColor() {
    const currentColor = document.body.style.backgroundColor;
    document.body.style.backgroundColor = currentColor === 'lightblue' ? 'lightgreen' : 'lightblue';
  }
  
  // Adjust text size using slider
  function adjustTextSize() {
    const slider = document.getElementById("textSizeSlider");
    const textContent = document.getElementById("textContent");
    textContent.style.fontSize = slider.value + "px";
  }
  
  // Modal functions
  function openModal() {
    document.getElementById("modal").style.display = "flex";
  }
  
  function closeModal() {
    document.getElementById("modal").style.display = "none";
  }
  
  document.getElementById("openModalButton").addEventListener("click", openModal);
  
  // Form validation
  function validateForm(event) {
    let errors = [];
  
    const name = document.getElementById("name").value;
    if (name.length < 3) {
      errors.push("Name must be at least 3 characters long.");
    }
  
    const email = document.getElementById("email").value;
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      errors.push("Please enter a valid email address.");
    }
  
    const password = document.getElementById("password").value;
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!password.match(passwordPattern)) {
      errors.push("Password must be at least 8 characters long, with at least one uppercase letter and one number.");
    }
  
    const formErrors = document.getElementById("formErrors");
    formErrors.innerHTML = errors.join("<br>");
  
    // Prevent form submission if errors exist
    if (errors.length > 0) {
      event.preventDefault();
      return false;
    }
    return true;
  }
  
  // Dropdown change event
  function displayDropdownMessage() {
    const dropdown = document.getElementById("dropdown");
    const message = document.getElementById("dropdownMessage");
    
    const selectedValue = dropdown.value;
    if (selectedValue) {
      message.textContent = `You selected: ${selectedValue}`;
    } else {
      message.textContent = "";
    }
  }
  