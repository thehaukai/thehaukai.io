hide_required_warning();
function hide_required_warning() {
    if (document.getElementById("cu-name-r")) { document.getElementById("cu-name-r").style.display = "none"; }
    if (document.getElementById("cu-email-r")) { document.getElementById("cu-email-r").style.display = "none"; }
    if (document.getElementById("cu-message-r")) { document.getElementById("cu-message-r").style.display = "none"; }

    if (document.getElementById("r-fname-r")) { document.getElementById("r-fname-r").style.display = "none"; }
    if (document.getElementById("r-lname-r")) { document.getElementById("r-lname-r").style.display = "none"; }
    if (document.getElementById("r-address1-r")) { document.getElementById("r-address1-r").style.display = "none"; }
    if (document.getElementById("r-address2-r")) { document.getElementById("r-address2-r").style.display = "none"; }
    if (document.getElementById("r-phone-r")) { document.getElementById("r-phone-r").style.display = "none"; }
}

function check_required_inputs() {

    if (document.getElementById("cu-name") && !document.getElementById("cu-name").value) { 
        document.getElementById("cu-name-r").style.display = "block"; 
    }

    if (document.getElementById("cu-email") && !document.getElementById("cu-email").value) { 
        document.getElementById("cu-email-r").style.display = "block"; 
    }

    if (document.getElementById("cu-message") && !document.getElementById("cu-message").value) { 
        document.getElementById("cu-message-r").style.display = "block"; 
    }

    if (!document.getElementById("cu-message").value || !document.getElementById("cu-email").value || !document.getElementById("cu-name").value) {
        return;
    }

    hide_required_warning();
    document.getElementById("cu-name").value = "";
    document.getElementById("cu-email").value = "";
    document.getElementById("cu-message").value = "";
    alert("Thank you " + document.getElementById("cu-name").value + ", We will be in touch soon");

}


function check_required_inputs_register() {

    if (document.getElementById("r-fname") && !document.getElementById("r-fname").value) { 
        document.getElementById("r-fname-r").style.display = "block"; 
    }

    if (document.getElementById("r-lname") && !document.getElementById("r-lname").value) { 
        document.getElementById("r-lname-r").style.display = "block"; 
    }

    if (document.getElementById("r-address1") && !document.getElementById("r-address1").value) { 
        document.getElementById("r-address1-r").style.display = "block"; 
    }

    if (document.getElementById("r-address2") && !document.getElementById("r-address2").value && !document.getElementById("r-address1").value) { 
        document.getElementById("r-address2-r").style.display = "block"; 
    }

    if (document.getElementById("r-phone") && !document.getElementById("r-phone").value) { 
        document.getElementById("r-phone-r").style.display = "block"; 
    }

    if (!document.getElementById("r-fname").value || !document.getElementById("r-lname").value || !document.getElementById("r-address1").value || !document.getElementById("r-phone").value) {
        return;
    }

    let e = document.getElementById("r-email").value;

    if (e) {
        if (e.indexOf('@') < 0) {
            alert("Invalid Email Format")
            return;
        }
    }

    hide_required_warning();
    document.getElementById("r-fname").value = "";
    document.getElementById("r-lname").value = "";
    document.getElementById("r-address1").value = "";
    document.getElementById("r-address2").value = "";
    document.getElementById("r-phone").value = "";
    document.getElementById("r-email").value = "";
    alert("Thank you for registering " + document.getElementById("r-fname").value + ", We will be in touch soon");

}

/* DROP DOWN JAVASCRIPT */

function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdown-content");
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  }


/* VISITOR COUNTER */

// Function to update the visitor count on the page
function updateVisitorCount(count) {
  document.getElementById('visitorCount').innerText = count;
}

// Function to fetch the visitor count from the server
function fetchVisitorCount() {
  fetch('php/counter.php')
    .then(response => response.text())
    .then(count => updateVisitorCount(count))
    .catch(error => console.error('Error:', error));
}

// Function to increment the visitor count on the server
function incrementVisitorCount() {
  fetch('php/counter.php?action=increment')
    .then(response => response.text())
    .then(count => updateVisitorCount(count))
    .catch(error => console.error('Error:', error));
}

// Display the visitor count on the page
window.onload = function() {
  incrementVisitorCount(); // Increment the count on each page load
  fetchVisitorCount(); // Fetch and display the updated count from the server
};


/* TEST ADD HERE */

/* function login() {
    // Perform login logic (e.g., validate credentials, set session variables)
  
    // Redirect the user to the protected page
    window.location.href = "private/staff.html";
  }

function login2() {
    // Perform login logic (e.g., validate credentials, set session variables)
  
    // Redirect the user to the protected page
    window.location.href = "staff.html";
  }

function logout() {
    // Perform any necessary logout actions (e.g., destroy session, clear user info)
  
    // Redirect the user to the logout URL
    window.location.href = "logout.html";
  }

*/




