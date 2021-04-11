//  FUNCTIONS -------------------------------------------------------------
let input = document.getElementById('wrapper');
let donw = document.querySelector('.group');
function deleteBook(event) {
	
  // 1- Check the event if raised on the button delete
  const buttonName = event.target.className;
 //  2  if yes, get the parent and remove it from the  bookList
 if (buttonName == "delete") {
  const delBtn = event.target.parentElement;
  delBtn.remove();
}
 
}

function addBook(event) {
  event.preventDefault();

  // 1- Get the book name from the input field
  let item = document.querySelector("#add-food-textfield ");
  let quality = document.getElementById('quality').value;
  let price = document.getElementById('price').value;
  let total = price*quality
  let date = document.getElementById('date').value;
  let nameOfItem = item.value;
  
  if (nameOfItem != "" && quality != 0 && price !="" && date !="") {
    // 2- Create a new spam bookName for the book name, class name = name
    let bookName = document.createElement("span");
    bookName.className = "name";
    bookName.textContent = date+" "+nameOfItem + " "+ quality+" Total = "+total+"$";
    // 3- Create a new spam deleteBtn for the button delete, class name = delete
    let deleteBtn = document.createElement("span");
    deleteBtn.className = "delete";
    deleteBtn.textContent = "remove"
    // 4- Create a new li
    let li = document.createElement("li");
    li.classList.add('box');

    // 5- Add bookName and deleteBtn to li and li to the  bookList UL
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    bookList.appendChild(li);
    input.style.display = 'none';
    donw.style.display = 'block';
    createBtn.style.display = 'block';
  } else {
    window.confirm("Please write the Name of food");
  }
  item.value = "";
}

let createBtn = document.getElementById('create');
createBtn.addEventListener('click', e =>{
  createBtn.style.display = 'none';
  donw.style.display = 'none';
  input.style.display = 'block';
})

function searchBook(event) {
  // 1- Get the search text
  let input = document.querySelector("#search-foods input");
  let filter = input.value.toUpperCase();
  let ul = document.querySelector("#food-list ul");
  let li = ul.getElementsByTagName("li");
  // 2- Loop on all LI
  for (i = 0; i < li.length; i++) {
    // Update the style of the LI (visible or hidden)
    let span = li[i].getElementsByTagName("span")[0];
    let txtValue = span.textContent || span.innerText;
    if (txtValue.toUpperCase().indexOf(filter) >= 0) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}



//  MAIN -------------------------------------------------------------
let bookList = document.querySelector("#food-list ul");
bookList.addEventListener("click", deleteBook);


let addForm = document.getElementById("add-food");
addForm.addEventListener("submit", addBook);

let searchBookInput = document
  .getElementById("search-foods")
  .querySelector("input");
searchBookInput.addEventListener("keyup", searchBook);







