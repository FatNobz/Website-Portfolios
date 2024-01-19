function showOneWayForm() {
    document.getElementById('departureSection').style.display = 'block';
    document.getElementById('returnSection').style.display = 'none';
    document.getElementById('submitButton').style.display = 'block';
}

function showReturnForm() {
    document.getElementById('departureSection').style.display = 'none';
    document.getElementById('returnSection').style.display = 'block';
    document.getElementById('submitButton').style.display = 'block';
}