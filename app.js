async function loadData(period) {
    try {
        const response = await fetch("data.json"); // JSON laden
        const data = await response.json(); // JSON zu JS-Objekt umwandeln

        data.forEach(item => {
            const card = document.querySelector(`.normalCard.${item.title.replace(" ", "-")}`); // Passende Karte finden
            
            if (card) {
                card.querySelector(".hours").textContent = `${item.timeframes[period].current}hrs`;
                card.querySelector(".comparison").textContent = `Last Week - ${item.timeframes[period].previous}hrs`;
            }
        });

    } catch (error) {
        console.error("Fehler beim Laden der Daten:", error);
    }
}

// Standardmäßig tägliche Werte laden
loadData("daily");
