document.getElementById('enter-button').addEventListener('click', () => {
    // Hide the landing page
    document.getElementById('landing').style.display = 'none';
    // Show the main page
    const main = document.getElementById('main');
    main.style.display = 'flex';

    // Add the background image dynamically
    setTimeout(() => {
        main.style.backgroundImage = "url('sl_031420_28950_10.jpg')";
    }, 500); // Add slight delay for smooth transition
});
