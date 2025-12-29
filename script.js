function toggleDetails(serviceId) {
  var serviceDetails = document.getElementById(serviceId);

  // Verifică dacă secțiunea este deja vizibilă
  if (serviceDetails.style.display === "block") {
    serviceDetails.style.display = "none"; // Ascunde detaliile
  } else {
    serviceDetails.style.display = "block"; // Afișează detaliile
  }
}
