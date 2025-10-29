// --- REUSABLE HTML COMPONENTS ---

// Function to generate the correct path based on the current page location
function getPath(filename) {
    // Check if the current page URL path includes the '/test/' subdirectory
    const isInsideTestFolder = window.location.pathname.includes('/test/');

    if (isInsideTestFolder) {
        // If inside the /test/ folder, go up one level (../) to find the main files.
        // We link to anchors on the home page via index.html
        if (filename.startsWith('#')) {
            return 'index.html' + filename;
        }
        // General link to parent folder files
        return '../' + filename;
    } else {
        // If in the root folder, link directly to the file in the current directory.
        return filename;
    }
}

// 1. Navigation Bar HTML (Header) - Uses getPath()
const headerHTML = `
    <nav class="navbar">
        <div class="nav-brand">
            <a href="${getPath('index.html')}" class="nav-item">Hattimatimtim 🏡</a>
        </div>
        <div class="nav-left" id="nav-links">
            <a href="${getPath('lessons.html')}" class="nav-item">Lessons</a>
            <a href="${getPath('mock_test.html')}" class="nav-item">Mock Test</a>
            <a href="${getPath('#games')}" class="nav-item">Play Zone</a>
            <a href="${getPath('#stories')}" class="nav-item">Story Time</a>
            <a href="${getPath('#about')}" class="nav-item">About Us</a>
        </div>
        <div class="nav-right">
            <a href="${getPath('#account')}" class="nav-item account-btn">My Account</a>
        </div>
        <!-- Hamburger menu icon for mobile -->
        <button class="menu-toggle" aria-label="Toggle Navigation">☰</button>
    </nav>
`;

// 2. Footer HTML - Uses getPath()
const footerHTML = `
    <footer class="main-footer">
        <div class="footer-links">
            <a href="${getPath('index.html#about')}">About Us</a> |
            <a href="${getPath('index.html#contribute')}">Contribute</a> |
            <a href="${getPath('index.html#feedback')}">Feedback</a> |
            <a href="${getPath('index.html#privacy')}">Privacy</a>
        </div>
        <p>© 2025 Hattimatimtim. All Rights Reserved. Made with fun and imagination!</p>
    </footer>
`;

// --- INJECTION FUNCTION (rest remains the same) ---

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
