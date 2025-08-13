document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header h1");

  // 🔹 Fade-In beim Laden
  header.style.opacity = 0;
  header.style.transform = "scale(0.8)";
  setTimeout(() => {
    header.style.transition = "all 1s ease";
    header.style.opacity = 1;
    header.style.transform = "scale(1)";
  }, 100);

  // 🔹 Pulsierende Animation
  const pulse = () => {
    header.classList.add("pulsing");
    setTimeout(() => {
      header.classList.remove("pulsing");
    }, 1500); // Dauer der Animation
  };

  // Erste Pulse nach Fade-In
  setTimeout(pulse, 1000);

  // Wiederhole alle 30 Sekunden
  setInterval(pulse, 30000);
});