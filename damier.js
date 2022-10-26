
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const size = urlParams.get('taille');


createDamier(size);

if (size == 8) {
    placerPions();
}

// fonction pour crer le damier
function createDamier(size) {
    document.write(`<div style="grid-template-columns: repeat(${size}, 75px);" class="grid-container" id="grid" >`);

    const grid = document.getElementById("grid")
    let k = 1;
    for (let i = 0; i < size; ++i) {
        for (let j = 0; j < size; ++j) {
            const block = `<div class="grid-item grid-${k}"> </div>`;
            grid.innerHTML += block;
            (k == 1) ? k = 2 : k = 1;
        }
        if (size % 2 == 0) {
            (k == 1) ? k = 2 : k = 1;
        }
    }

    document.write('</div>');
}






// fonction pour placer les pions
function placerPions() {
    const cases = document.querySelectorAll('.grid-item');
    console.log({ cases });
    for (let i = 0; i < cases.length; ++i) {
        let color = (cases[i].classList[1] == "grid-1") ? 'white' : 'black'
        // placement de pions: 
        if ((i > size - 1 && i < 2 * size) || (i > size * 6 - 1 && i < 7 * size)) {
            const pion = `<span style="color:${color}">  &#9823; </span>`;
            cases[i].innerHTML = pion;
        }
        // placement des tours: 
        if (i == 0 || i == size - 1 || i == (size * 7) || i == (size * size) - 1) {
            const tour = `<span style="color:${color}"> &#9820; </span>`;
            cases[i].innerHTML = tour;
        }

         // placement des cavaliers: 
         if (i == 1 || i == size - 2 || i == (size * 7) + 1 || i == (size * size) - 2) {
            const cavalier = `<span style="color:${color}"> &#9822; </span>`;
            cases[i].innerHTML = cavalier;
        }

          // placement des fous: 
          if (i == 2 || i == size - 3 || i == (size * 7) + 2 || i == (size * size) - 3) {
            const fou = `<span style="color:${color}"> &#9821; </span>`;
            cases[i].innerHTML = fou;
        }

           // placement de la dame: 
           if (i == 3  || i == (size * size) - 5) {
            const fou = `<span style="color:${color}"> 	&#9819; </span>`;
            cases[i].innerHTML = fou;
        }

          // placement du roi: 
          if (i == 4  || i == (size * size) - 4) {
            const fou = `<span style="color:${color}"> 	&#9818; </span>`;
            cases[i].innerHTML = fou;
        }
    }
}

