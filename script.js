document.addEventListener('DOMContentLoaded', () => {
    // Toggle guide content visibility (accordion)
    document.querySelectorAll('.guide-toggle').forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.dataset.target;
            const targetContent = document.getElementById(targetId);

            if (targetContent) {
                // Close other open guide sections
                document.querySelectorAll('.guide-content.visible').forEach(openContent => {
                    if (openContent.id !== targetId) {
                        openContent.classList.remove('visible');
                    }
                });

                targetContent.classList.toggle('visible');
            }
        });
    });

    // Back to top button functionality
    const backToTopButton = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Hamburger menu toggle for mobile sidebar
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');

    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });

    // Close sidebar when clicking outside (on overlay effect) - for mobile
    document.addEventListener('click', (event) => {
        if (sidebar.classList.contains('active') && !sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
            sidebar.classList.remove('active');
        }
    });

    // Dropdown menu for characters
    const charactersDropdownToggle = document.getElementById('characters-dropdown-toggle');
    const charactersDropdownMenu = document.getElementById('characters-dropdown-menu');

    if (charactersDropdownToggle && charactersDropdownMenu) {
        charactersDropdownToggle.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default link behavior
            charactersDropdownMenu.classList.toggle('visible');
            charactersDropdownToggle.classList.toggle('active');
        });

        // Close dropdown if clicked outside
        document.addEventListener('click', (e) => {
            if (!charactersDropdownToggle.contains(e.target) && !charactersDropdownMenu.contains(e.target)) {
                charactersDropdownMenu.classList.remove('visible');
                charactersDropdownToggle.classList.remove('active');
            }
        });
    }


    // Placeholder for event timers (you would integrate your actual timer logic here)
    const timersContainer = document.getElementById('timers-container');
    if (timersContainer) {
        // Simulate loading
        setTimeout(() => {
            timersContainer.innerHTML = `
                <div class="timer-item card">
                    <h4>⏰ Événement Quotidien : Chasse aux Infectés</h4>
                    <p>Prochainement dans : <span class="countdown" data-time="2025-06-24T18:00:00">02h 30m 15s</span></p>
                </div>
                <div class="timer-item card">
                    <h4>🌟 Événement Hebdomadaire : Guerre d'Alliance</h4>
                    <p>Début dans : <span class="countdown" data-time="2025-06-26T10:00:00">1j 05h 45m</span></p>
                </div>
                <div class="timer-item card">
                    <h4>🏆 Événement Spécial : Championnat des États</h4>
                    <p>Fin dans : <span class="countdown" data-time="2025-06-25T23:59:59">12h 00m 00s</span></p>
                </div>
            `;
            // For a real-time countdown, you would call a function here and set an interval:
            // updateCountdowns();
            // setInterval(updateCountdowns, 1000);
        }, 1500);
    }
});

// Example updateCountdowns function (needs proper date handling for production)
function updateCountdowns() {
    document.querySelectorAll('.countdown').forEach(countdownElement => {
        const targetTime = new Date(countdownElement.dataset.time).getTime();
        const now = new Date().getTime();
        const distance = targetTime - now;

        if (distance < 0) {
            countdownElement.textContent = 'Terminé !';
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        let countdownText = '';
        if (days > 0) countdownText += `${days}j `;
        countdownText += `${hours}h ${minutes}m ${seconds}s`;
        countdownElement.textContent = countdownText.trim();
    });
}
