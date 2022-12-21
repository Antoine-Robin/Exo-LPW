//create XMLHttpRequest object
const xhr = new XMLHttpRequest();
const limit = 100;
let inputValue = "";
let dataList = [];
//open a get request with the remote server URL
xhr.open("GET", "https://pokeapi.co/api/v2/pokemon?limit=" + limit);
//send the Http request
xhr.send();

//EVENT HANDLERS
document.getElementById("input-text").addEventListener("input", () => {
  inputValue = document.getElementById("input-text").value;
  console.log(inputValue);
  print(inputValue);
});

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

function getPokemonInfo(index) {
  url = dataList[index].url;
  xhr.open("GET", url);
  xhr.send();

  xhr.onload = function () {
    if (xhr.status === 200) {
      //parse JSON
      let dataPokemon = JSON.parse(xhr.responseText);
      console.log(dataPokemon);
      showModal(dataPokemon);
    } else if (xhr.status === 404) {
      console.log("No records found");
    }
  };
}

function print(filter) {
  const list = document.getElementById("listPokedex");
  let div = document.createElement("div");
  div.classList.add("test");
  if (filter != "") {
    list.innerHTML = "";
  }
  for (let i = 0; i < dataList.length; ++i) {
    if (dataList[i].name.includes(filter, 0)) {
      div.innerHTML += `<span>${dataList[i].name} </span>  <button onclick="getPokemonInfo(${i})" id="btn-view" data-index="${dataList[i].name}" > Voir plus </button> <br />`;
    }
  }

  list.appendChild(div);
}

function showModal(pokemon) {
  var modal = document.getElementById("myModal");
  var span = document.getElementsByClassName("close")[0];
  modal.style.display = "block";
  span.onclick = function () {
    modal.style.display = "none";
  };

  document.querySelector(".pokemonName").innerHTML = pokemon.name;
  document.getElementById("taille").innerHTML = "sa taille: " + pokemon.height;
  document.getElementById("poid").innerHTML = "son poids: " + pokemon.weight;

  let type = "type : ";
  pokemon.types.forEach((pokemonType) => {
    type += pokemonType.type.name + " ";
  });

  document.getElementById("type").innerHTML = type;

  console.log(pokemon.sprites.other.artwork);

  document
    .getElementById("artwork")
    .setAttribute(
      "src",
      pokemon.sprites.other["official-artwork"].front_default
    );

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}
