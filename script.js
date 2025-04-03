// Sample JSON Data
let books = [
    { title: "The Great Adventure", author: "John Doe", year: 2015, genre: "Fiction" },
    { title: "Science Wonders", author: "Jane Smith", year: 2020, genre: "Science" },
    { title: "History Unfolded", author: "Alice Brown", year: 2018, genre: "History" }
];

// Function to Display Books in Table
function displayBooks() {
    let table = document.getElementById("bookTable");
    table.innerHTML = `<tr>
        <th>Title</th>
        <th>Author</th>
        <th>Year</th>
        <th>Genre</th>
        <th>Actions</th>
    </tr>`; 

    books.forEach((book, index) => {
        let row = table.insertRow();
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.year}</td>
            <td>${book.genre}</td>
            <td>
                <button onclick="editBook(${index})">Edit</button>
                <button onclick="deleteBook(${index})">Delete</button>
            </td>
        `;
    });
}

// Function to Add or Update a Book
function addOrUpdateBook() {
    let title = document.getElementById("title").value.trim();
    let author = document.getElementById("author").value.trim();
    let year = parseInt(document.getElementById("year").value);
    let genre = document.getElementById("genre").value.trim();

    if (!validateInput(title, author, year, genre)) return;

    let existingBookIndex = books.findIndex(book => book.title === title);
    
    if (existingBookIndex > -1) {
        books[existingBookIndex] = { title, author, year, genre };
        alert("Book Updated Successfully!");
    } else {
        books.push({ title, author, year, genre });
        alert("Book Added Successfully!");
    }

    displayBooks();
    document.getElementById("bookForm").reset();
}

// Function to Edit a Book
function editBook(index) {
    let book = books[index];
    document.getElementById("title").value = book.title;
    document.getElementById("author").value = book.author;
    document.getElementById("year").value = book.year;
    document.getElementById("genre").value = book.genre;
}

// Function to Delete a Book
function deleteBook(index) {
    books.splice(index, 1);
    displayBooks();
}

// Input Validation
function validateInput(title, author, year, genre) {
    if (title === "" || author === "" || genre === "") {
        alert("All fields are required!");
        return false;
    }
    if (isNaN(year) || year < 1000 || year > new Date().getFullYear()) {
        alert("Please enter a valid year.");
        return false;
    }
    return true;
}

// Load Books on Page Load
document.addEventListener("DOMContentLoaded", displayBooks);
