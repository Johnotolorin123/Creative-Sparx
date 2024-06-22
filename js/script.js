document.addEventListener("DOMContentLoaded", function() {
    var welcomePopup = document.getElementById("welcomePopup");
    var closePopupBtn = document.getElementById("closePopupBtn");

    // Display the popup after 2 seconds
    setTimeout(function() {
        welcomePopup.style.display = "block";
    }, 2000);

    closePopupBtn.addEventListener("click", function() {
        welcomePopup.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target == welcomePopup) {
            welcomePopup.style.display = "none";
        }
    });
});
