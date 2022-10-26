


const rotationDegreeMS = 360/60;
const rotationDegreeH = 360/12;


function startClock() {
    const date = new Date();
    const heures = date.getHours();
    const minutes = date.getMinutes();
    const secondes = date.getSeconds();

    let rotationH = (heures > 12) ? heures*rotationDegreeH : (heures*rotationDegreeH)/2;
    let rotationM = minutes*rotationDegreeMS;
    let rotationS = secondes*rotationDegreeMS;

    document.getElementById("heures").style.transform = `rotate(${rotationH}deg)`;
    document.getElementById("minutes").style.transform = `rotate(${rotationM}deg)`;;
    document.getElementById("secondes").style.transform = `rotate(${rotationS}deg)`;;
}

document.getElementById("button").addEventListener('click', () => {
    document.querySelector(".horloge-container").style.display = 'block';
    setInterval(startClock, 1000);
});


