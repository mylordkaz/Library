
// function Book (title, author, pages, read){
    //     this.title = title
    //     this.author = author
    //     this.pages = pages
    //     this.read = read
    // }
    
    
let library = [];

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
    
    let text = ""
    for (let i = 0; i < library.length; i++){
        text += '<div class="book">'
        text += "Title: " + library[i].title + " ,";
        text += "by " + library[i].author + " ,";
        text += "Pages: " + library[i].pages + " ";
        text += "Read: " + library[i].read + " ";
        text += "</div>"
        text += "<br>";
    }
    
    document.getElementById('display').innerHTML = text
}
document.getElementById('btn').addEventListener('click', addBook)

function openForm(){
    document.getElementById('form').style.display = "block"
}

let form = document.getElementById('form')

window.onclick = function(event){
    if (event.target == form){
        form.style.display = "none"
    }
}