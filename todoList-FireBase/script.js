import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGoDYeIijaAg2d-k7oGa2uEXpNvwwKXxY",
  authDomain: "todolist-9cd66.firebaseapp.com",
  projectId: "todolist-9cd66",
  storageBucket: "todolist-9cd66.appspot.com",
  messagingSenderId: "734592459853",
  appId: "1:734592459853:web:beb3cd8d14e7cbe00d2804",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
<<<<<<< HEAD
=======
// const deleteTask = (id) => {
//   const docRef = doc(db, "TodoList", id);
//   deleteDoc(docRef)
//     .then(() => {
//       console.log("Entire Document has been deleted successfully.");
//       displayALL();
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };
>>>>>>> 28042e670af13e83bca51f24b3d37bc0728247e5

const sumbit = document.getElementById("submit");
sumbit.addEventListener("click", async (e) => {
  let task = document.getElementById("task");
  const payload = Object.assign({}, { task: task.value, done: false });
  try {
    const docRef = await addDoc(collection(db, "TodoList"), payload, {});
    console.log("Document written with ID: ", docRef.id);
    window.location.reload();
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  task.value = "";
});

const querySnapshot = await getDocs(collection(db, "TodoList"));
function displayALL() {
  document.getElementById("list").innerHTML = "";
  querySnapshot.forEach((doc, index) => {
    const item = Object.assign({ id: doc.id }, doc.data());
    console.log(index);
    writeList(item);
  });
}

const writeList = async function (item) {
  const isValidated = item.done ? "validated" : "";
<<<<<<< HEAD

  console.log(isValidated);
  let div = document.createElement("div");

  div.innerHTML = `<div class="list-item"> <i id="validate" class="fa-solid fa-check"></i> <span data-index="" class=" task-item ${isValidated}"> ${
    item.task
  } </span>
        <button class="delete" id="deleteItem">
        <i  class="fa-regular fa-trash"></i> </button> <button ${
          item.done ? "disabled" : ""
        } id="edit-btn"  > <i class="fa-solid fa-pen-to-square"></i> </button> </div> `;

  document.getElementById("list").appendChild(div);

  // handle delete
=======
  let div = document.createElement("div");

  div.innerHTML = `<div class="list-item"> <i onclick="validate()" class="fa-solid fa-check"></i> <span data-index="" class=" task-item ${isValidated}"> ${
    item.task
  } </span>
        <button class="delete" id="deleteItem">
        <i class="fa-regular fa-trash"></i> </button> <button ${
          item.done ? "disabled" : ""
        } onclick="editTask()" > <i class="fa-solid fa-pen-to-square"></i> </button> </div> `;

  document.getElementById("list").appendChild(div);

>>>>>>> 28042e670af13e83bca51f24b3d37bc0728247e5
  div.querySelector(".delete").addEventListener("click", () => {
    const docRef = doc(db, "TodoList", item.id);
    deleteDoc(docRef)
      .then(() => {
        console.log("Entire Document has been deleted successfully.");
<<<<<<< HEAD
        div.style.display = "none";
=======
        displayALL();
>>>>>>> 28042e670af13e83bca51f24b3d37bc0728247e5
      })
      .catch((error) => {
        console.log(error);
      });
  });
<<<<<<< HEAD

  // handle validation:

  async function validate() {
    const taskRef = doc(db, "TodoList", item.id);

    // Set the "capital" field of the city 'DC'
    await updateDoc(taskRef, {
      done: true,
    });

    div.querySelector(".task-item").classList.add("validated");
    div.querySelector("#edit-btn").disabled = true;
  }

  div.querySelector("#validate").addEventListener("click", validate);

  // handle edition:

  div.querySelector("#edit-btn").addEventListener("click", async () => {
    div.querySelector(
      ".task-item"
    ).innerHTML = `<input type="text" id="input-edit" value="${item.task}" > <button id="validEdit"> valider </button>`;
    document.getElementById("validEdit").addEventListener("click", async () => {
      console.log("ici");
      const taskRef = doc(db, "TodoList", item.id);
      let editedTask = document.getElementById("input-edit").value;
      await updateDoc(taskRef, {
        task: editedTask,
      });
      div.querySelector(
        ".task-item"
      ).innerHTML = `<span data-index="" class=" task-item ${isValidated}"> ${editedTask} </span>`;
    });
  });
=======
>>>>>>> 28042e670af13e83bca51f24b3d37bc0728247e5
};

displayALL();
