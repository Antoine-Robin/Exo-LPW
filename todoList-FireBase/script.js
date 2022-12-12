import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
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

const writeList = function (item) {
  const isValidated = item.done ? "validated" : "";
  let div = document.createElement("div");

  div.innerHTML = `<div class="list-item"> <i onclick="validate()" class="fa-solid fa-check"></i> <span data-index="" class=" task-item ${isValidated}"> ${
    item.task
  } </span>
        <button class="delete" id="deleteItem">
        <i class="fa-regular fa-trash"></i> </button> <button ${
          item.done ? "disabled" : ""
        } onclick="editTask()" > <i class="fa-solid fa-pen-to-square"></i> </button> </div> `;

  document.getElementById("list").appendChild(div);

  div.querySelector(".delete").addEventListener("click", () => {
    const docRef = doc(db, "TodoList", item.id);
    deleteDoc(docRef)
      .then(() => {
        console.log("Entire Document has been deleted successfully.");
        displayALL();
      })
      .catch((error) => {
        console.log(error);
      });
  });
};

displayALL();

// ancien code avec localstorage:
// sumbit.addEventListener("click", () => {

//   const taskItem = {
//     content: task.value,
//     isValidated: false,
//   };
//   taskList.push(taskItem);
//   addToLocalStorage(taskList);
//   task.value = "";
// });

// getFromLocalStorage();

// function displayList(list, filter) {
//   let listTodo = [];
//   let listDone = [];

//   for (let i = 0; i < list.length; ++i) {
//     if (list[i].isValidated) {
//       listDone.push(list[i]);
//     } else {
//       listTodo.push(list[i]);
//     }
//   }

//   document.getElementById("list").innerHTML = "";

//   let loopArray = [];
//   if (filter == "done") {
//     loopArray = listDone;
//   } else if (filter == "todo") {
//     loopArray = listTodo;
//   } else {
//     loopArray = list;
//   }

//   for (let i = 0; i < loopArray.length; ++i) {
//     const isValidated = loopArray[i].isValidated ? "validated" : "";
//     document.getElementById(
//       "list"
//     ).innerHTML += ` <div class="list-item"> <i onclick="validate(${i})" class="fa-solid fa-check"></i> <span data-index="${i}" class=" task-item ${isValidated}"> ${
//       list[i].content
//     } </span>
//     <button onclick="deleteItem(${i})" class="delete">
//     <i class="fa-regular fa-trash"></i> </button> <button ${
//       loopArray[i].isValidated ? "disabled" : ""
//     } onclick="editTask(${i})" > <i class="fa-solid fa-pen-to-square"></i> </button> </div> `;
//   }
// }

// function getFromLocalStorage() {
//   const list = localStorage.getItem("todos");
//   if (list) {
//     taskList = JSON.parse(list);
//     displayList(taskList);
//   }
// }

// function addToLocalStorage(todos) {
//   localStorage.setItem("todos", JSON.stringify(todos));
//   displayList(todos);
// }

// function deleteItem(i) {
//   taskList.splice(i, 1);
//   addToLocalStorage(taskList);
// }

// function validate(i) {
//   taskList[i].isValidated = true;
//   const indexTo = 0;
//   const el = taskList.splice(i, 1)[0];
//   taskList.splice(indexTo, 0, el);
//   addToLocalStorage(taskList);
// }

// function editTask(i) {
//   if (!taskList[i].isValidated) {
//     const editedTask = document.querySelector(`[data-index="${i}"]`);
//     editedTask.innerHTML = `<input type="text" id="input-edit" value="${taskList[i].content}" > <button id="validEdit"> valider </button>`;
//     document.getElementById("validEdit").addEventListener("click", () => {
//       const edited = document.getElementById("input-edit").value;
//       taskList[i].content = edited;
//       addToLocalStorage(taskList);
//     });
//   }
// }

// function handleFilter() {
//   const select = document.getElementById("select");
//   let filter = select.options[select.selectedIndex].value;
//   localStorage.setItem("filtre", filter);
//   displayList(taskList, filter);
// }

// const filtre = localStorage.getItem("filtre");

// if (filtre) {
//   const select = document.getElementById("select");
//   select.value = localStorage.getItem("filtre");
//   displayList(taskList, filtre);
// }
