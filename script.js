function toggleDetails(id) {
  document.querySelectorAll(".service-details").forEach((el) => {
    if (el.id !== id) el.classList.remove("show");
  });

  document.getElementById(id).classList.toggle("show");
}
