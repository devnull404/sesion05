function fn1 () {
    alert("Holi uwu")
}

function fnc2() {
    document.getElementById("navigation").style.display = "none";
}

window.addEventListener("scroll", function(event) {
    if (document.scrollingElement.scrollTop > 108) {
        document.getElementById("navigation").style.visibility = "hidden";
        document.getElementsByTagName("header").item(0).style.visibility = "hidden";
    } else if (document.scrollingElement.scrollTop < 108) {
        document.getElementById("navigation").style.visibility = "visible";
        document.getElementsByTagName("header").item(0).style.visibility = "visible";
    }
});

function fnc_menu_over () {
    console.log("Oh! You are over me!")
    document.getElementById("products").style.display = "block";
}

function fnc_menu_out () {
    console.log("Oh, you are OUT of me!")
    document.getElementById("products").style.display = "none";
}