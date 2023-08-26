let library = [];

const addBook = (ev) => {

    ev.preventDefault();
    let book = {
        title : document.getElementById('title').value,
        author : document.getElementById('author').value,
        pages : document.getElementById('pages').value,
        read : document.getElementById('read').checked
    }
    library.push(book)
    document.querySelector('form').reset()

    displayLibrary()

}

function displayLibrary (){ 
    
    let text = "";
    for (let i = 0; i < library.length; i++){
        text += '<div class="book">'
        text += "<span> Title: </span>" + library[i].title + " ";
        text += "<span> by </span> " + library[i].author + " ";
        text += "<span> Pages: </span>" + library[i].pages + " ";
        text += "<span> Read: </span><input type='checkbox'" + (library[i].read ? "checked" : "") + "> ";
        text += '<button class="remove-button" data-index="' + i + '">Remove</button>';
        text += "</div>"
        text += "<br>";
    }
    document.getElementById('display').innerHTML = text

    let removeButton = document.getElementsByClassName('remove-button');
    for (let i = 0; i < removeButton.length; i++) {
        removeButton[i].addEventListener('click', removeBook);
    }
}

function openForm(){
    document.getElementById('form').style.display = "block"
}

let form = document.getElementById('form')

window.onclick = function(event){
    if (event.target == form){
        form.style.display = "none"
    }
}

let cancel = document.getElementById('cl')

cancel.onclick = function(event){
    if (event.target == form){
        form.style.display = "none"
    }
}

const removeBook  =(ev) => {
    let index = ev.target.getAttribute('data-index')
    library.splice(index, 1)
    
    displayLibrary();
}

document.getElementById('btn').addEventListener('click', addBook);