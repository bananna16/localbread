function showPass() {
    var x = document.getElementById("pw");
    var y = document.getElementById("confirmpw");
    if (x.type === "password") {
        x.type = "text";
        y.type = "text";
    }
    else {
        x.type = "password";
        y.type = "password";
    }
}