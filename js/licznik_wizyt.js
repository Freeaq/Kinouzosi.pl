function incrementVisitCount() {

    if (!sessionStorage.getItem('isNewSession')) {

        let visitCount = parseInt(localStorage.getItem('visitCount')) || 0;
        localStorage.setItem('visitCount', visitCount + 1);

        sessionStorage.setItem('isNewSession', 'false');
    }

    document.getElementById('visit_count').textContent = localStorage.getItem('visitCount');
}


window.onload = incrementVisitCount;


if (!sessionStorage.getItem('sessionStartTime')) {

    sessionStorage.setItem('sessionStartTime', Date.now());
}

function updateTimeSpent() {

    const sessionStartTime = parseInt(sessionStorage.getItem('sessionStartTime'));

    timeSpent = Math.floor((Date.now() - sessionStartTime) / 1000);

    localStorage.setItem('timeSpent', timeSpent);

    document.getElementById('czas_ktory_uplynal').textContent = `${timeSpent} sekund`;
}

setInterval(updateTimeSpent, 1000);

updateTimeSpent();