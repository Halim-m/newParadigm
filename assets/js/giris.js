var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate() {


    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var s = document.getElementById('jobs');
    var jobs = s.options[s.selectedIndex].value;
    if (username == "Formget" && password == "formget#123" && jobs == "doktor") {
        alert("Login successfully");
        window.location = "doktor.html"
        return false;
    }
    else if ((username == "Formget" && password == "formget#125" && jobs == "Dagıtımcı")) {
        alert("Login successfully");
        window.location = "Dagıtımcı.html"
        return false;
    }
    else {
        attempt--;// Decrementing by one.
        alert("You have left " + attempt + " attempt;");
        // Disabling fields after 3 attempts.
        if (attempt == 0) {
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}




