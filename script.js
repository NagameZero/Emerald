function snowflake(){}

const navLinks = document.querySelectorAll('nav a');

// Add event listeners to each link
navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior

        const targetId = this.getAttribute('data-section'); // Get the ID of the section to show
        const sections = document.querySelectorAll('div[id]'); // Select all sections by their IDs

        sections.forEach(section => {
            section.classList.add('hidden');
        });
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.remove('hidden');
        }
    });
});

