// --- REUSABLE HTML COMPONENTS ---

// Function to generate the correct path based on the current page location
function getPath(filename) {
    // Determine the base path needed to reach the /website/ folder.
    const pathSegments = window.location.pathname.split('/').filter(segment => segment.length > 0);
    
    // If the path contains 'website' AND a second directory (e.g., 'website/test/'), we are in a subdirectory.
    // However, if the user is testing locally, pathSegments might be long and confusing (C:/...).
    // For a clean Git/Web deployment where all main files are in 'website/', we use a simple check:
    
    // Check if we are currently in the 'test' directory (assuming all test pages are 1 folder deep).
    const isInsideTestFolder = window.location.pathname.includes('/test/');

    if (isInsideTestFolder) {
        // If inside /website/test/, links need to go up one level (../) to reach the main files.
        return '../' + filename;
    } else {
        // If outside the /test/ folder (e.g., in /website/ or /), links are direct.
        // We will prepend 'website/' to ensure paths link correctly from the root index.html
        return 'website/' + filename; 
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
            <a href="${getPath('index.html')}#games" class="nav-item">Play Zone</a>
            <a href="${getPath('index.html')}#stories" class="nav-item">Story Time</a>
            <a href="${getPath('index.html')}#about" class="nav-item">About Us</a>
        </div>
        <div class="nav-right">
            <a href="${getPath('index.html')}#account" class="nav-item account-btn">My Account</a>
        </div>
        <button class="menu-toggle" aria-label="Toggle Navigation">☰</button>
    </nav>
`;

// 2. Footer HTML - Uses getPath()
const footerHTML = `
    <footer class="main-footer">
        <div class="footer-links">
            <a href="${getPath('index.html')}#about">About Us</a> |
            <a href="${getPath('index.html')}#contribute">Contribute</a> |
            <a href="${getPath('index.html')}#feedback">Feedback</a> |
            <a href="${getPath('index.html')}#privacy">Privacy</a>
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