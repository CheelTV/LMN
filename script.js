// --- Données des événements (DOIT CORRESPONDRE À CELLES DE VOTRE BOT !) ---
// Ces heures sont en UTC. Ajustez-les si vos événements ne sont pas en UTC.
const eventsData = {
    "jourdechasse": {
        "name": "Jour de Chasse",
        "type": "weekly",
        "start_day_of_week": 0,  // Lundi (0=Lundi, 6=Dimanche)
        "start_hour_utc": 0,     // 00:00 UTC
        "duration_hours": 24     // Dure 24h
    },
    "invasionhorde": {
        "name": "Invasion de la Horde",
        "type": "weekly",
        "start_day_of_week": 2,  // Mercredi
        "start_hour_utc": 13,    // 13:00 UTC
        "duration_hours": 2      // Dure 2 heures
    },
    "trap": {
        "name": "Piège",
        "type": "interval",
        // La date de référence doit être la MÊME que dans votre bot Python
        // et doit être en UTC. Ex: 21 juin 2025 à 19:00 UTC
        "reference_date_utc": new Date(Date.UTC(2025, 5, 21, 19, 0, 0)), // Mois sont 0-indexés (0=Jan, 5=Juin)
        "interval_days": 2,
        "start_hour_utc": 19,
        "duration_hours": 1
    }
};

// --- Fonctions de calcul des timers ---

function formatTimeRemaining(ms) {
    if (ms < 0) ms = 0; // Ne pas afficher de temps négatif
    const days = Math.floor(ms / (1000 * 60 * 60 * 24));
    ms %= (1000 * 60 * 60 * 24);
    const hours = Math.floor(ms / (1000 * 60 * 60));
    ms %= (1000 * 60 * 60);
    const minutes = Math.floor(ms / (1000 * 60));
    ms %= (1000 * 60);
    const seconds = Math.floor(ms / 1000);

    return `${days}j ${String(hours).padStart(2, '0')}h ${String(minutes).padStart(2, '0')}m ${String(seconds).padStart(2, '0')}s`;
}

function calculateNextEventTime(eventInfo) {
    const now = new Date(); // Date et heure locales
    const now_utc = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());

    let nextEventStartUtc;

    if (eventInfo.type === "weekly") {
        const targetDay = eventInfo.start_day_of_week;
        const targetHour = eventInfo.start_hour_utc;

        let daysUntilEvent = (targetDay - now_utc.getUTCDay() + 7) % 7;
        
        nextEventStartUtc = new Date(Date.UTC(now_utc.getUTCFullYear(), now_utc.getUTCMonth(), now_utc.getUTCDate() + daysUntilEvent, targetHour, 0, 0));

        // Si l'heure calculée est déjà passée cette semaine, avance d'une semaine
        if (nextEventStartUtc.getTime() < now_utc.getTime()) {
            nextEventStartUtc.setUTCDate(nextEventStartUtc.getUTCDate() + 7);
        }

    } else if (eventInfo.type === "interval") {
        const referenceDateUtc = eventInfo.reference_date_utc;
        const intervalMs = eventInfo.interval_days * 24 * 60 * 60 * 1000;
        const targetHour = eventInfo.start_hour_utc;

        // Assurez-vous que referenceDateUtc a l'heure cible pour le calcul
        const referenceDateAtTargetHourUtc = new Date(Date.UTC(referenceDateUtc.getUTCFullYear(), referenceDateUtc.getUTCMonth(), referenceDateUtc.getUTCDate(), targetHour, 0, 0));

        let diffFromReferenceMs = now_utc.getTime() - referenceDateAtTargetHourUtc.getTime();
        let numIntervalsPassed = Math.floor(diffFromReferenceMs / intervalMs);

        // Si la référence n'est pas encore atteinte, le prochain est la référence
        if (diffFromReferenceMs < 0) {
            numIntervalsPassed = -1;
        }

        nextEventStartUtc = new Date(referenceDateAtTargetHourUtc.getTime() + (numIntervalsPassed + 1) * intervalMs);

        // Assurer que le prochain événement est bien dans le futur
        while (nextEventStartUtc.getTime() < now_utc.getTime()) {
            nextEventStartUtc = new Date(nextEventStartUtc.getTime() + intervalMs);
        }

    } else {
        return null; // Type d'événement inconnu
    }

    // Convertir l'heure UTC de l'événement en date/heure locale pour l'affichage
    const nextEventStartLocal = new Date(nextEventStartUtc.getTime());
    const eventEndLocal = new Date(nextEventStartLocal.getTime() + eventInfo.duration_hours * 60 * 60 * 1000);

    return { nextEventStartLocal, eventEndLocal };
}

function updateTimers() {
    const timersContainer = document.getElementById('timers-container');
    timersContainer.innerHTML = ''; // Nettoyer les anciens timers

    for (const key in eventsData) {
        const eventInfo = eventsData[key];
        const times = calculateNextEventTime(eventInfo);

        if (!times) continue;

        const { nextEventStartLocal, eventEndLocal } = times;
        const nowLocal = new Date();

        let timerText;
        let eventStatus;

        if (nowLocal >= nextEventStartLocal && nowLocal < eventEndLocal) {
            // Événement en cours
            const remaining = eventEndLocal.getTime() - nowLocal.getTime();
            timerText = formatTimeRemaining(remaining);
            eventStatus = `Se termine dans : <span style="color: yellow;">${timerText}</span>`;
        } else {
            // Événement à venir
            const remaining = nextEventStartLocal.getTime() - nowLocal.getTime();
            timerText = formatTimeRemaining(remaining);
            eventStatus = `Prochain événement dans : ${timerText}`;
        }

        const timerDiv = document.createElement('div');
        timerDiv.classList.add('event-timer');
        timerDiv.innerHTML = `
            <h4>${eventInfo.name}</h4>
            <p>${eventStatus}</p>
        `;
        timersContainer.appendChild(timerDiv);
    }
}

// --- Logique des guides déroulants ---
document.addEventListener('DOMContentLoaded', () => {
    const guideToggles = document.querySelectorAll('.guide-toggle');

    guideToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const targetId = toggle.dataset.target;
            const targetContent = document.getElementById(targetId);

            if (targetContent) {
                // Fermer tous les autres guides ouverts (optionnel, mais plus propre)
                document.querySelectorAll('.guide-content.open').forEach(content => {
                    if (content.id !== targetId) {
                        content.classList.remove('open');
                        document.querySelector(`[data-target="${content.id}"]`).classList.remove('open');
                    }
                });

                // Basculer l'affichage du contenu
                targetContent.classList.toggle('open');
                toggle.classList.toggle('open'); // Pour changer la flèche
            }
        });
    });

    // Mettre à jour les timers toutes les secondes
    updateTimers();
    setInterval(updateTimers, 1000);
});