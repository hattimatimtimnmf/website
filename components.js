// --- REUSABLE HTML COMPONENTS ---

// 1. Navigation Bar HTML (Header) - ALL HREFs ARE NOW ROOT-RELATIVE
const headerHTML = `
    <nav class="navbar">
        <div class="nav-brand">
            <a href="website/index.html" class="nav-item">Hattimatimtim 🏡</a>
        </div>
        <div class="nav-left" id="nav-links">
            <a href="../lessons.html" class="nav-item">Lessons</a>
            <a href="../mock_test.html" class="nav-item">Mock Test</a>
            <a href="../#games" class="nav-item">Play Zone</a>
            <a href="../#stories" class="nav-item">Story Time</a>
            <a href="../#about" class="nav-item">About Us</a>
        </div>
        <div class="nav-right">
            <a href="/#account" class="nav-item account-btn">My Account</a>
        </div>
        <button class="menu-toggle" aria-label="Toggle Navigation">☰</button>
    </nav>
`;

// 2. Footer HTML - ALL HREFS ARE NOW ROOT-RELATIVE
const footerHTML = `
    <footer class="main-footer">
        <div class="footer-links">
            <a href="../index.html#about">About Us</a> |
            <a href="../index.html#contribute">Contribute</a> |
            <a href="../index.html#feedback">Feedback</a> |
            <a href="../index.html#privacy">Privacy</a>
        </div>
        <p>© 2025 Hattimatimtim. All Rights Reserved. Made with fun and imagination!</p>
    </footer>
`;

// --- INJECTION FUNCTION ---

function loadGlobalComponents() {
    // Inject Header
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = headerHTML;
    }

    // Inject Footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerHTML;
    }

    // --- Add Mobile Menu Toggle Logic (Needed on all pages) ---
    document.addEventListener('DOMContentLoaded', () => {
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.getElementById('nav-links');
        const navRight = document.querySelector('.nav-right');

        if (menuToggle && navLinks && navRight) {
            menuToggle.addEventListener('click', function() {
                navLinks.classList.toggle('active');
                navRight.classList.toggle('active');
            });
        }
    });
}

// Call the function immediately to load components
loadGlobalComponents();