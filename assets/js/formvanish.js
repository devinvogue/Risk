// making the apointment form disapper with a click outside the box

var form = document.getElementById('form');


window.onclick = function(event) {
    if (event.target == form) {
        form.style.display = "none";
    }
};