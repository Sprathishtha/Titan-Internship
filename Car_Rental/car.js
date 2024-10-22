let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}
const sr = ScrollReveal({
    distance:'60px',
    duration:2500,
    delay:400,
    reset:true
})
sr.reveal('.text',{delay:200,origin:'top'})
sr.reveal('.form-container form',{delay:800,origin:'left'})
sr.reveal('.heading',{delay:800,origin:'top'})
sr.reveal('.ride-container .box',{delay:600,origin:'top'})
sr.reveal('.services-container .box',{delay:600,origin:'top'})
sr.reveal('.about-container .box',{delay:600,origin:'top'})
sr.reveal('.reviews-container',{delay:600,origin:'top'})
sr.reveal('.newsletter .box',{delay:400,origin:'bottom'})
function handleSubmit(event){
    event.preventDefault();
    alert("Account created successfully!");
    window.location.href = "signin.html"; 
    return false;
}
function handleLogin(event) {
    event.preventDefault(); 
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username && password) {
        alert("Login successful!");
        localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("username", username);
        window.location.href = "home.html"; 
    } else {
        alert("Please enter valid username and password.");
    }
}
window.onload = function() {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    document.getElementById('user-profile').style.display = 'none';
    document.getElementById('auth-buttons').style.display = 'block';
};
function handleLogin(event) {
    event.preventDefault(); 
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username && password) {
        alert("Login successful!");
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("username", username);
       window.location.href = "home.html";
    } else {
        alert("Please enter valid username and password.");
    }
}
window.onload = function() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const username = localStorage.getItem("username");
    if (isLoggedIn === "true") {
        document.getElementById('auth-buttons').style.display = 'none';
        const userProfile = document.getElementById('user-profile');
        userProfile.style.display = 'block';
        document.getElementById('profile-username').textContent = username;
        document.getElementById('profile-icon').onclick = function() {
            const dropdown = document.getElementById('dropdown');
            dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
        };
        document.getElementById('logout-btn').onclick = function() {
            localStorage.removeItem("isLoggedIn");
            localStorage.removeItem("username");
            window.location.href = "signin.html";
        };
    } else {
        document.getElementById('user-profile').style.display = 'none';
        document.getElementById('auth-buttons').style.display = 'block';
    }
};
function handleLogin(event) {
    event.preventDefault(); 
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username && password) {
        alert("Login successful!");
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("username", username);
        window.location.href = "home.html";
    } else {
        alert("Please enter valid username and password.");
    }
}
window.onload = function() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const username = localStorage.getItem("username");

    if (isLoggedIn === "true") {
        document.getElementById('auth-buttons').style.display = 'none';
        const userProfile = document.getElementById('user-profile');
        userProfile.style.display = 'block';
        document.getElementById('profile-username').textContent = username;
        document.getElementById('profile-icon').onclick = function() {
            const dropdown = document.getElementById('dropdown');
            dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
        };
        document.getElementById('logout-btn').onclick = function() {
            localStorage.removeItem("isLoggedIn");
            localStorage.removeItem("username");
            window.location.href = "signin.html";
        };
    } else {
        document.getElementById('user-profile').style.display = 'none';
        document.getElementById('auth-buttons').style.display = 'block';
    }
};
document.getElementById('profile-icon').onclick = function() {
    const dropdown = document.getElementById('dropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
};
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("car-rental-form");
    const storedLocation = localStorage.getItem("location");
    if (storedLocation) {
        document.getElementById("location").value = storedLocation;
    }

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 

        const location = document.getElementById("location").value;
        const pickupDate = new Date(document.getElementById("pickup-date").value);
        const returnDate = new Date(document.getElementById("return-date").value);
        localStorage.setItem("location", location);
        if (pickupDate >= returnDate) {
            alert("Please enter a valid pick-up date (it must be before the return date).");
            return;
        }
        window.location.href = "#services";
    });
});
