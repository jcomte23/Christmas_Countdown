document.addEventListener("DOMContentLoaded", function () {

    // Temporizador
    const countDownDate = new Date("Dec 25, 2023 00:00:00").getTime();
    const x = setInterval(function () {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("timer").innerHTML = "¡Feliz Navidad!";
        }
    }, 1000);

    //carga de nieve
    const snowflakesContainer = document.querySelector(".snowflakes");
    const cantidadNieve=100

    for (let i = 0; i < cantidadNieve; i++) {
        const snowflake = document.createElement("div");
        snowflake.className = "snowflake";
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.animationDuration = `${Math.random() * 2 + 1}s`;
        snowflake.style.animationDelay = `${Math.random()}s`;
        snowflakesContainer.appendChild(snowflake);
    }
});



