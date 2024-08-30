function calculateEndTime() {
    const arrivalTime = document.getElementById("arrivalTime").value;
    const breakDuration = parseInt(document.getElementById("breakDuration").value, 10);
    const workingHours = parseFloat(document.getElementById("workingHours").value);

    if (arrivalTime && !isNaN(breakDuration) && !isNaN(workingHours)) {
        const [arrivalHours, arrivalMinutes] = arrivalTime.split(":").map(Number);

        const arrivalDate = new Date();
        arrivalDate.setHours(arrivalHours, arrivalMinutes, 0, 0);

        // Berechne die Arbeitszeit in Minuten
        const totalWorkingMinutes = workingHours * 60 + breakDuration;

        // Endzeit berechnen
        const endDate = new Date(arrivalDate.getTime() + totalWorkingMinutes * 60000);

        const endHours = endDate.getHours();
        const endMinutes = endDate.getMinutes();

        // Formatierung für die Ausgabe
        const formattedEndHours = endHours.toString().padStart(2, '0');
        const formattedEndMinutes = endMinutes.toString().padStart(2, '0');

        document.getElementById("result").textContent = `Endzeit: ${formattedEndHours}:${formattedEndMinutes}`;
    } else {
        document.getElementById("result").textContent = "Bitte alle Felder korrekt ausfüllen.";
    }
}
