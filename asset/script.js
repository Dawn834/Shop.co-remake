// Event listener với SVG close-btn
document.querySelector('.close-svg').addEventListener('click', function () {
    document.getElementById('targetElement').style.display = 'none';
});

// Mobile Menu Functionality
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const closeMenuBtn = document.getElementById('closeMenuBtn');
const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
const mobileMenuPopup = document.getElementById('mobileMenuPopup');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');

// Mở mobile menu
function openMobileMenu() {
    mobileMenuBtn.classList.add('active');
    mobileMenuOverlay.classList.add('active');
    mobileMenuPopup.classList.add('active');
    document.body.style.overflow = 'hidden'; // Ngăn scroll background
}

// Đóng mobile menu
function closeMobileMenu() {
    mobileMenuBtn.classList.remove('active');
    mobileMenuOverlay.classList.remove('active');
    mobileMenuPopup.classList.remove('active');
    document.body.style.overflow = ''; // Cho phép scroll lại
}

// Event Listeners
mobileMenuBtn.addEventListener('click', openMobileMenu);
closeMenuBtn.addEventListener('click', closeMobileMenu);
mobileMenuOverlay.addEventListener('click', closeMobileMenu);

// Đóng menu khi click vào link
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

// Đóng menu khi nhấn phím ESC
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeMobileMenu();
    }
});
