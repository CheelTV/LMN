document.addEventListener('DOMContentLoaded', () => {
    // Fonctionnalité de l'accordéon pour les guides
    document.querySelectorAll('.guide-toggle').forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.dataset.target; // Récupère l'ID de la section cible
            const targetContent = document.getElementById(targetId); // Récupère l'élément du contenu du guide

            if (targetContent) {
                // Ferme toutes les autres sections de guide ouvertes
                document.querySelectorAll('.guide-content.visible').forEach(openContent => {
                    if (openContent.id !== targetId) { // Si ce n'est pas la section sur laquelle on a cliqué
                        openContent.classList.remove('visible'); // La ferme
                        // Mettre à jour l'attribut aria-expanded et l'état du bouton si nécessaire
                        const correspondingButton = document.querySelector(`.guide-toggle[data-target="${openContent.id}"]`);
                        if (correspondingButton) {
                            correspondingButton.setAttribute('aria-expanded', 'false');
                        }
                    }
                });

                // Bascule la visibilité de la section cliquée
                targetContent.classList.toggle('visible');

                // Met à jour l'attribut aria-expanded pour l'accessibilité
                const isVisible = targetContent.classList.contains('visible');
                button.setAttribute('aria-expanded', isVisible);
            }
        });
    });

    // Fonctionnalité du bouton "Retour en haut"
    const backToTopButton = document.getElementById('back-to-top');

    // Affiche/masque le bouton au défilement
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) { // Apparaît après 300px de défilement
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // Fait défiler la page vers le haut au clic
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Défilement fluide
        });
    });

    // Basculement du menu hamburger (pour mobile)
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');

    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active'); // Ajoute/retire la classe 'active' pour afficher/masquer
    });

    // Ferme la barre latérale si on clique en dehors d'elle (sur mobile)
    document.addEventListener('click', (event) => {
        // Vérifie si la sidebar est ouverte et si le clic n'est ni sur la sidebar ni sur le bouton toggle
        if (sidebar.classList.contains('active') && !sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
            sidebar.classList.remove('active');
        }
    });

    // Menu déroulant pour les personnages dans la barre latérale
    const charactersDropdownToggle = document.getElementById('characters-dropdown-toggle');
    const charactersDropdownMenu = document.getElementById('characters-dropdown-menu');

    if (charactersDropdownToggle && charactersDropdownMenu) {
        charactersDropdownToggle.addEventListener('click', (e) => {
            e.preventDefault(); // Empêche le comportement par défaut du lien
            charactersDropdownMenu.classList.toggle('visible'); // Bascule la visibilité du menu
            charactersDropdownToggle.classList.toggle('active'); // Bascule la classe active sur le bouton (pour l'icône de flèche)
            // Met à jour l'attribut aria-expanded pour l'accessibilité
            const isVisible = charactersDropdownMenu.classList.contains('visible');
            charactersDropdownToggle.setAttribute('aria-expanded', isVisible);
        });

        // Ferme le menu déroulant si on clique en dehors
        document.addEventListener('click', (e) => {
            if (!charactersDropdownToggle.contains(e.target) && !charactersDropdownMenu.contains(e.target)) {
                charactersDropdownMenu.classList.remove('visible');
                charactersDropdownToggle.classList.remove('active');
                charactersDropdownToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // Placeholder pour les timers d'événements (vous intègreriez votre logique de timer réelle ici)
    const timersContainer = document.getElementById('timers-container');
    if (timersContainer) {
        // Simule un chargement asynchrone
        setTimeout(() => {
            timersContainer.innerHTML = `
                <div class="timer-item card">
                    <h4>⏰ Événement Quotidien : Chasse aux Infectés</h4>
                    <p>Prochainement dans : <span class="countdown" data-time="2025-06-24T18:00:00">Chargement...</span></p>
                </div>
                <div class="timer-item card">
                    <h4>🌟 Événement Hebdomadaire : Guerre d'Alliance</h4>
                    <p>Début dans : <span class="countdown" data-time="2025-06-26T10:00:00">Chargement...</span></p>
                </div>
                <div class="timer-item card">
                    <h4>🏆 Événement Spécial : Championnat des États</h4>
                    <p>Fin dans : <span class="countdown" data-time="2025-06-25T23:59:59">Chargement...</span></p>
                </div>
            `;
            // Appelle la fonction de mise à jour des comptes à rebours et la rafraîchit chaque seconde
            updateCountdowns();
            setInterval(updateCountdowns, 1000);
        }, 1500);
    }
});

// Fonction pour mettre à jour les comptes à rebours
function updateCountdowns() {
    document.querySelectorAll('.countdown').forEach(countdownElement => {
        const targetTime = new Date(countdownElement.dataset.time).getTime();
        const now = new Date().getTime(); // Heure actuelle du client
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
        countdownText += `${String(hours).padStart(2, '0')}h ${String(minutes).padStart(2, '0')}m ${String(seconds).padStart(2, '0')}s`;
        countdownElement.textContent = countdownText.trim();
    });
}
