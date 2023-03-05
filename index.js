const tbody = document.querySelector("tbody");
const button = document.querySelector(".add");
const form = document.querySelector("form");
let inputTitle = document.getElementById("title");
let inputAuthor = document.getElementById("author");
let inputNumberOfPages = document.getElementById("numberOfPages");
let submitButton = document.getElementById("submit");
let checkIfRead = document.getElementById("read");
form.style.display = "none";
let library = [];
function book(title, author, numberOfPages, isRead) {
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.isRead = isRead;
}
book.prototype.info = function () {
  return `${this.title} ${this.author} ${this.numberOfPages}`;
};

function addBookToLibrary(Book) {
  library.push(Book);
  let bookRow = tbody.insertRow(0);
  let c1 = bookRow.insertCell(0);
  let c2 = bookRow.insertCell(1);
  let c3 = bookRow.insertCell(2);
  c1.innerText = Book.title;
  c2.innerText = Book.author;
  c3.innerText = Book.numberOfPages;
  let removeButton = document.createElement("button");
  removeButton.textContent = "remove";
  let readButton = document.createElement("button");

  if (Book.isRead === true) readButton.textContent = "Read";
  else readButton.textContent = "Not read";
  removeButton.addEventListener("click", () => {
    bookRow.remove();
    removeButton.remove();
  });
  readButton.addEventListener("click", () => {
    if (Book.isRead === true) {
      Book.isRead = false;
      readButton.textContent = "Not read";
    } else {
      Book.isRead = true;
      readButton.textContent = "Read";
    }
  });
  bookRow.appendChild(removeButton);
  bookRow.appendChild(readButton);
}
const hobbit = new book("The Hobbit", "JRR Tolkien", 300, false);
const lotr = new book("The Lord Of The Rings", "JRR Tolkien", 900, false);
const tgg = new book("The Great Gatsby", "F.Scott Fitzgerald", 200, false);
addBookToLibrary(hobbit);
addBookToLibrary(lotr);
addBookToLibrary(tgg);
button.addEventListener("click", () => {
  form.style.display = "block";
});
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (checkIfRead.checked) isRead = true;
  else isRead = false;
  let newBook = new book(
    inputTitle.value,
    inputAuthor.value,
    inputNumberOfPages.value,
    isRead
  );
  addBookToLibrary(newBook);
  form.style.display = "none";
  inputTitle.value = "";
  inputAuthor.value = "";
  inputNumberOfPages.value = "";
  checkIfRead.checked = false;
});
