function showformPopup(event) {
        // Prevent the default button behavior
        event.preventDefault();
        // Show the payment popup
        document.getElementById('overlay').style.display = 'block';
        document.getElementById('form-popup').style.display = 'block';
    }

    // Function to hide payment popup
    function hideformPopup() {
        document.getElementById('overlay').style.display = 'none';
        document.getElementById('form-popup').style.display = 'none';
    }

   
    

