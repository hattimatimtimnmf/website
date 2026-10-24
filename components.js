// Shared header and footer. Makes no external requests.
(function () {
    'use strict';

    const inTestFolder = window.location.pathname.includes('/test/');

    function getPath(target) {
        if (target.startsWith('#')) {
            return (inTestFolder ? '../index.html' : 'index.html') + target;
        }
        return (inTestFolder ? '../' : './') + target;
    }

    const headerHTML = `
        <nav class="navbar">
            <div class="nav-brand">
                <a href="${getPath('index.html')}">Hattimatimtim</a>
            </div>
            <div class="nav-left" id="nav-links">
                <a href="${getPath('lessons.html')}" class="nav-item">Lessons</a>
                <a href="${getPath('test/mock_test.html')}" class="nav-item">Mock Test</a>
                <a href="${getPath('#games')}" class="nav-item">Play Zone</a>
                <a href="${getPath('#stories')}" class="nav-item">Story Time</a>
                <a href="${getPath('#about')}" class="nav-item">About Us</a>
            </div>
            <div class="nav-right">
                <a href="${getPath('#account')}" class="nav-item account-btn">My Account</a>
            </div>
            <button type="button" class="menu-toggle" aria-label="Toggle navigation"
                    aria-controls="nav-links" aria-expanded="false">☰</button>
        </nav>
    `;

    const footerHTML = `
        <footer class="main-footer">
            <div class="footer-links">
                <a href="${getPath('index.html#about')}">About Us</a> |
                <a href="${getPath('index.html#contribute')}">Contribute</a> |
                <a href="${getPath('index.html#feedback')}">Feedback</a> |
                <a href="${getPath('index.html#privacy')}">Privacy</a>
            </div>
            <p>© ${new Date().getFullYear()} Hattimatimtim. All rights reserved.</p>
        </footer>
    `;

    const header = document.getElementById('header-placeholder');
    const footer = document.getElementById('footer-placeholder');
    if (header) header.innerHTML = headerHTML;
    if (footer) footer.innerHTML = footerHTML;

    const toggle = document.querySelector('.menu-toggle');
    const panels = document.querySelectorAll('.nav-left, .nav-right');

    if (toggle) {
        toggle.addEventListener('click', () => {
            const open = toggle.getAttribute('aria-expanded') !== 'true';
            toggle.setAttribute('aria-expanded', String(open));
            panels.forEach(p => p.classList.toggle('active', open));
        });
    }
})();