
document.addEventListener('DOMContentLoaded', function() {
    var navIcons = document.querySelectorAll('.nav_icon');
    var navBar = document.getElementById('nav_box');

    // Adding the "active_nav" class when a nav_icon link is clicked
    navIcons.forEach(function(navIcon) {
        navIcon.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default link behavior
            navBar.classList.add('active_nav');
        });
    });
});


onclick="nav_box.classList.add('active')"