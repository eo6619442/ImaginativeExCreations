// Sample works data
const worksData = {
    "graphic-design": [],
    "branding": [],
    "motion-graphics": [],
    "web-development": []
};

function viewWorks(service) {
    const worksModal = document.getElementById('works-display');
    const worksTitle = document.getElementById('works-title');
    const worksContainer = document.getElementById('works-container');

    worksTitle.textContent = service.replace("-", " ").toUpperCase();

    // Check if there are works available for the selected service
    if (worksData[service] && worksData[service].length > 0) {
        worksContainer.innerHTML = worksData[service]
            .map(work => `<img src="${work}" alt="${service} work">`)
            .join("");
    } else {
        worksContainer.innerHTML = `<p style="color: white; font-size: 1.2rem;">No works available at the moment.</p>`;
    }

    worksModal.style.display = "flex";
}

// Close the modal
function closeWorks() {
    const worksModal = document.getElementById('works-display');
    worksModal.style.display = "none";
}

// Close modal when clicking outside
window.addEventListener('click', function (e) {
    const worksModal = document.getElementById('works-display');
    if (e.target === worksModal) {
        worksModal.style.display = "none";
    }
});

// Get the hamburger menu and the navbar
const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar ul');

// Toggle the 'active' class to show or hide the menu
hamburger.addEventListener('click', () => {
  navbar.classList.toggle('active');
});
