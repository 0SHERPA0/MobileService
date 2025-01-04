function showSearchPopup(event) {
    event.preventDefault();
    document.getElementById('search_popup').style.display = 'block';
    document.getElementById('blurr').style.display = 'block';
}

function hideSearchPopup() {
    document.getElementById('blurr').style.display = 'none';
    document.getElementById('search_popup').style.display = 'none';
}

function showDevicePopup(event) {
    event.preventDefault();
    document.getElementById('device_popup').style.display = 'block';
    document.getElementById('devblurr').style.display = 'block';
}

function hideDevicePopup() {
    document.getElementById('device_popup').style.display = 'none';
    document.getElementById('devblurr').style.display = 'none';
}