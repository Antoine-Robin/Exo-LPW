//create XMLHttpRequest object
const xhr = new XMLHttpRequest();
const limit = 100;
const ofset = 0;
let inputValue = "";
let dataList = [];
//open a get request with the remote server URL
xhr.open("GET", "https://pokeapi.co/api/v2/pokemon?limit=" + limit);
//send the Http request
xhr.send();

//EVENT HANDLERS
document.getElementById("input-text").addEventListener("input", () => {
  inputValue = document.getElementById("input-text").value;
  print(inputValue);
});

console.log(document.querySelector("#btn-view"));

//triggered when the response is completed
xhr.onload = function () {
  if (xhr.status === 200) {
    //parse JSON
    data = JSON.parse(xhr.responseText);
    dataList = data.results;
    print(inputValue);
  } else if (xhr.status === 404) {
    console.log("No records found");
  }
};

function print(filter) {
  const list = document.getElementById("listPokedex");
  if (filter != "") {
    list.innerHTML = "";
  }
  for (let i = 0; i < dataList.length; ++i) {
    if (dataList[i].name.includes(filter, 0)) {
      list.innerHTML += `<span>${dataList[i].name} </span>  <button id="btn-view" data-index="${dataList[i].name}" > Voir plus </button> <br /><div id="myModal" class="modal">`;
    }
  }
}
