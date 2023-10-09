document.getElementById("remise").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        calculerTarif();
    }
});
function calculerTarif() {
    var nombreEmplacements = parseInt(document.getElementById("nombre_emplacements").value);
    var nombreEtoiles = parseInt(document.getElementById("nombre_etoiles").value);
    var typeAbonnement = document.getElementById("type_abonnement").value;
    var remise = parseInt(document.getElementById("remise").value);
    var tarifMensuel;
    var tarifAnnuelMensuel;
    var tarifAnnuelAnnuel;

    if (typeAbonnement === "Standard") {
        if (nombreEmplacements >= 1 && nombreEmplacements <= 100) {
            tarifMensuel = 39 + (nombreEtoiles * 10);
        } else if (nombreEmplacements >= 101 && nombreEmplacements <= 250) {
            tarifMensuel = 49 + (nombreEtoiles * 10);
        } else if (nombreEmplacements >= 251 && nombreEmplacements <= 500) {
            tarifMensuel = 59 + (nombreEtoiles * 10);
        } else {
            tarifMensuel = "Tarification personnalisée";
        }
    } else if (typeAbonnement === "Premium") {
        if (nombreEmplacements >= 1 && nombreEmplacements <= 100) {
            tarifMensuel = 249 + (nombreEtoiles * 10);
        } else if (nombreEmplacements >= 101 && nombreEmplacements <= 250) {
            tarifMensuel = 269 + (nombreEtoiles * 10);
        } else if (nombreEmplacements >= 251 && nombreEmplacements <= 500) {
            tarifMensuel = 289 + (nombreEtoiles * 10);
        } else {
            tarifMensuel = "Tarification personnalisée";
        }
    } else {
        tarifMensuel = "Type d'abonnement non valide";
    }

    tarifAnnuelMensuel = tarifMensuel * 12;
    tarifAnnuelAnnuel = tarifMensuel * 10;

    // Appliquer la remise
    tarifMensuel -= (tarifMensuel * remise / 100);
    tarifAnnuelMensuel -= (tarifAnnuelMensuel * remise / 100);
    tarifAnnuelAnnuel -= (tarifAnnuelAnnuel * remise / 100);

    document.getElementById("tarif_mensuel").textContent = tarifMensuel.toFixed(2);
    document.getElementById("tarif_annuel_mensuel").textContent = tarifAnnuelMensuel.toFixed(2);
    document.getElementById("tarif_annuel_annuel").textContent = tarifAnnuelAnnuel.toFixed(2);
}
