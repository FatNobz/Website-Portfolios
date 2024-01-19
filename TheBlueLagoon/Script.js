function showOneWayForm() {
    document.getElementById('departureSection').style.display = 'block';
    document.getElementById('returnSection').style.display = 'none';
    document.getElementById('submitButton').style.display = 'block';

    // Make the "Return" button inactive
    document.getElementById('returnButton').style.opacity = '0.5';
    document.getElementById('oneWayButton').style.opacity = '1';
}

function showReturnForm() {
    document.getElementById('departureSection').style.display = 'none';
    document.getElementById('returnSection').style.display = 'block';
    document.getElementById('submitButton').style.display = 'block';

    // Make the "One Way" button inactive
    document.getElementById('oneWayButton').style.opacity = '0.5';
    document.getElementById('returnButton').style.opacity = '1';
}