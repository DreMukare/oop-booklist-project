// Book Constructor 
function Book(title, author, isbn){
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor 
function UI() {}

UI.prototype.addBookToList = function(book){
  const list = document.getElementById('book-list');

  const row = document.createElement('tr');

  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">x</a></td>
  `;

  list.appendChild(row);
}

UI.prototype.clearFields = function(){
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = ''; 
}

// Event Listeners
document.getElementById('book-form').addEventListener('submit', function(e){
  // Getting form values
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value

  // Instantiating book 
  const book = new Book(title, author, isbn);

  // Instantiating UI
  const ui = new UI();

  // Add book to list
  ui.addBookToList(book);

  ui.clearFields();
  
  e.preventDefault();
});