let myLibrary = [];
let id = 0;

const content =document.querySelector(".content");
const wrapper = document.querySelector(".wrapper");


const dialog = document.querySelector("dialog");
const form = document.querySelector("form");


const newButton = document.querySelector("#new");
const confirmButton = document.querySelector("#confirmButton");

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");


function empty(element) {
    element.innerHTML = ""; 
}

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function createBook(){
    empty(content)
    for(let y=0;y<myLibrary.length;y++){
        entry = myLibrary[y];

        const card = document.createElement("div") ;
        card.id =  entry.id;
        card.classList.add("card")
        
        const removeButton = document.createElement("button");
        removeButton.textContent = "Delete";
        removeButton.classList.add("removeButton");

        const title =document.createElement("div");
        title.textContent = "Title: " + entry.book.title;
    
        const author =document.createElement("div");
        author.textContent = "Author: " + entry.book.author;
        
        const pages =document.createElement("div");
        pages.textContent = "Pages: " + entry.book.pages;


        const hasRead =document.createElement("input");
        const label = document.createElement("laber");
        hasRead.setAttribute("type","checkbox");
        hasRead.checked = entry.book.read;
        label.textContent ="Read  ";

        label.appendChild(hasRead);


        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(label);
        card.appendChild(removeButton)
    
        content.appendChild(card);
        wrapper.appendChild(content);
        document.body.appendChild(wrapper);
    }



}

function addBookToLibrary(book) {
    myLibrary.push({id,book})
    createBook();
    id++;
}



newButton.addEventListener('click',function(){
    dialog.showModal();
})

confirmButton.addEventListener("click",function(event){
    event.preventDefault();
    let read = document.querySelector("#hasRead").checked;
    const book = new Book(title.value,author.value,pages.value,read);
    addBookToLibrary(book);

    form.reset();
    dialog.close()

})

document.addEventListener("click",function(event){
    target = event.target;
    if(target.className.includes("removeButton")){
        target = target.parentElement;
        for(let i=0;i<myLibrary.length;i++){
            if(myLibrary[i].id==target.id)
                myLibrary.splice(i,1);
        }
        createBook();
    }
})
