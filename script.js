// Toggle Hamburger Menu
function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');
    navbar.classList.toggle('active');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
}

// View Works Modal
const worksData = {
    "graphic-design": ["work1.jpg", "work2.jpg", "work3.jpg"],
    "branding": ["brand1.jpg", "brand2.jpg"],
    "motion-graphics": ["motion1.jpg", "motion2.jpg"],
    "web-development": ["web1.jpg", "web2.jpg"],
};

function viewWorks(service) {
    const modal = document.getElementById('works-display');
    const worksContainer = document.getElementById('works-container');
    const worksTitle = document.getElementById('works-title');

    worksTitle.innerText = service.replace("-", " ").toUpperCase();
    worksContainer.innerHTML = worksData[service]
        .map(image => `<img src="${image}" alt="${service} work" style="width: 100px; margin: 10px;">`)
        .join("");

    modal.style.display = 'flex';
}

// Close Modal
function closeWorks() {
    const modal = document.getElementById('works-display');
    modal.style.display = 'none';
}

// Contact Form Validation
document.getElementById('contactForm').addEventListener('submit', function (event) {
    const name = document.querySelector('[name="name"]').value.trim();
    const email = document.querySelector('[name="email"]').value.trim();
    const message = document.querySelector('[name="message"]').value.trim();

    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        event.preventDefault();
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        alert('Please enter a valid email address.');
        event.preventDefault();
    }
});

// Back to Top Button
const backToTopButton = document.getElementById('back-to-top');
window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});
backToTopButton.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Close Modal When Clicking Outside
window.addEventListener('click', function (event) {
    const modal = document.getElementById('works-display');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
