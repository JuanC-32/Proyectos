// sonido click
const sonido = new Audio("./sounds/click-frito.mp3");
document.querySelectorAll(".btn").forEach(boton => {
    boton.addEventListener("click", () => {
        sonido.currentTime = 0;
        sonido.play();
    });
});

// animación scroll con Intersection Observer
const items = document.querySelectorAll(".fade");
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationDelay = "0.2s";
            entry.target.classList.add("animate");
            observer.unobserve(entry.target);
    }
    });
}, { threshold: 0.2 });

items.forEach(el => observer.observe(el));
