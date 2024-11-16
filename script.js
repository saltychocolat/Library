myLibrary = {
    books:[{id:0,title:"Title",author:"Author",pages:234,hasRead:true}],
    init:function(){
        this.render();
        this.getDom["confirmButton"].addEventListener("click",addBook);
        this.getDom["newButton"].addEventListener("click",openDialog);
    },
    render:function(){
        for(let i=0;i<this.books.length;i++){
            book = this.books[i];
            this.createCard(book);
        }
    },
    createCard:function(book){
        getDom = this.getDom();
        card = document.createElement("div");
        card.classList.add("card");
        for(key in book){
            newDiv = this.createCategory(key,book);
            card.appendChild(newDiv);
        }
        getDom["dialog"].appendChild(card);;
        getDom["content"].appendChild(getDom["dialog"]);
        getDom["wrapper"].appendChild(getDom["content"]);
    },
    createCategory(key,book){
        div = document.createElement(key);
        div.textContent = book[key];
        return div;
    },  
    getDom:function(){
        content =document.querySelector(".content");
        wrapper = document.querySelector(".wrapper");
        dialog = document.querySelector("dialog");
        form = document.querySelector("form");
        newButton = document.querySelector("#new");
        confirmButton = document.querySelector("#confirmButton");
        return {content:content,wrapper:wrapper,dialog:dialog,form:form,newButton:newButton,confirmButton:confirmButton};
    },
    getInput:function(){
        title = document.querySelector("#title");
        author = document.querySelector("#author");
        pages = document.querySelector("#pages");
        return {content:content,wrapper:wrapper,dialog:dialog,form:form,newButton:newButton,confirmButton:confirmButton,title:title,author:author,pages:pages};
    },
    addBook:function(event){
        target = event.target;

        books.push
    },
    openDialog:function(){
        this.getDom["dialog"].show;
    },

}
myLibrary.init();

