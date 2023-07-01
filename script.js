let library = [];

// function Book (title, author, pages, read){
//     this.title = title
//     this.author = author
//     this.pages = pages
//     this.read = read
// }

const addBook = (ev) => {
    ev.preventDefault();
    let book = {
        title : document.getElementById('title').value,
        author : document.getElementById('author').value,
        pages : document.getElementById('pages').value,
        read : document.getElementById('read').value
    }
    library.push(book)
    document.querySelector('form').reset()
}
document.getElementById('btn').addEventListener('click', addBook)

// for (book of library){
//     return book
// }