
const submit = document.getElementById("submit");

submit.addEventListener('click', () => {
    const input = document.getElementById("input").value;
    console.log(input);
    const tab = [];
    console.log(input.length);
    for (let i = 0; i < input.length; ++i) {
        tab[i] = input[i];
        console.log(tab[i] + " ");
    }

    for (let i = 0; i < tab.length; ++i) {
        const span = document.createElement(span)
        span.textcontent = tab[i];
        span.classList.add('color' + i);
    }

})
const input = document.getElementById("input").value;
console.log(input)
const spantext = document.createElement('span');
spantext.textContent = input;
const colorized = document.getElementById("colorized");
colorized.appendChild(spantext);