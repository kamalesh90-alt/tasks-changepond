function checkAll() {
    let ufname = document.getElementById("fn").value;
    let regfname = /^[a-zA-Z]{3,15}$/;
    if (ufname.trim() === "") {
        window.alert("First name is required");
        return false;
    }
    if (!ufname.trim().match(regfname)) {
        window.alert("First name must contain only characters and be 3 to 15 characters long");
        return false;
    }

    let ulname = document.getElementById("ln").value;
    let reglname = /^[a-zA-Z]{1,15}$/;
    if (ulname.trim() === "") {
        window.alert("Last name is required");
        return false;
    }
    if (!ulname.trim().match(reglname)) {
        window.alert("Last name must contain only characters and be 1 to 15 characters long");
        return false;
    }

    let email = document.getElementById("email").value;
    let regemail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email.trim() === "") {
        window.alert("Email is required");
        return false;
    }
    if (!email.trim().match(regemail)) {
        window.alert("Please enter a valid email address");
        return false;
    }

    let password = document.getElementById("password").value;
    let regpassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/; 
    if (password.trim() === "") {
        window.alert("Password is required");
        return false;
    }
    if (!password.trim().match(regpassword)) {
        window.alert("Password must be at least 8 characters long and contain at least one letter and one number");
        return false;
    }

    return true;
}
