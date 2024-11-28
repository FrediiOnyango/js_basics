const wmf = document.querySelector("#book-list li:nth-child(2) .name");

// console.log(wmf)

var books = document.querySelector("#book-list li .name");
// console.log(books);

var books = document.querySelectorAll("#book-list li .name");
// console.log(books)

Array.from(books).forEach(function (book) {
  // console.log(book)
});

Array.from(books).forEach(function (book) {
  //   console.log(book.textContent);
});

Array.from(books).forEach(function (book) {
  book.textContent += " (book title)";
});

// const bookList = document.querySelector("#book-list");
// console.log(bookList.innerHTML);

// const bookList = document.querySelector("#book-list");
// bookList.innerHTML = '<h2>Books and more books...<h2>'

// const bookList = document.querySelector("#book-list");
// bookList.innerHTML = "<h2>Books and more books..<h2>";
// bookList.innerHTML += "<p>This is how you add HTML<p>";

const banner = document.querySelector("#page-banner");

console.log("#page-banner node type is:", banner.nodeType);
console.log("#page-banner node type is:", banner.nodeName);
console.log("#page-banner has child nodes:", banner.hasChildNodes());

const clonedBanner = banner.cloneNode(true);
console.log(clonedBanner);
