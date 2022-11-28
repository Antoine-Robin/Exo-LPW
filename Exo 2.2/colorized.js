const submit = document.getElementById("submit");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const input = document.getElementById("input").value;
  const colorized = document.getElementById("colorized");
  let j = 1;
  for (let i = 0; i < input.length; ++i) {
    const span = document.createElement("span");
    const char = document.createTextNode(input[i]);
    span.appendChild(char);
    span.classList.add("color" + j);
    ++j;
    if (j > 3) {
      j = 1;
    }
    colorized.appendChild(span);
  }
});
