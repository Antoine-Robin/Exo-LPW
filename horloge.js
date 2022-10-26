


function leadingZeros(input) {
    if (input < 10) {
        input = input.toString().padStart(2, "0");
    }

    return input
}


function startClock() {
    const date = new Date();
    const heures = date.getHours();
    const minutes = date.getMinutes();
    const secondes = date.getSeconds();
    document.getElementById("heures").innerHTML = leadingZeros(heures) + ':';
    document.getElementById("minutes").innerHTML = leadingZeros(minutes) + ':';
    document.getElementById("secondes").innerHTML = leadingZeros(secondes);
    console.log(secondes);
}

document.getElementById("button").addEventListener('click', () => {
    setInterval(startClock, 1000);
});


