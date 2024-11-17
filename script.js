myLibrary = {
    id:0,
    books:[{id:0,Title:"Title",Author:"Author",Pages:234,Read:true}],
    init:function(){
        this.render();
        this.getDom()["confirmButton"].addEventListener("click",this.addBook.bind(this));
        this.getDom()["newButton"].addEventListener("click",this.openDialog.bind(this));
    },

    render:function(){
        this.clearContent();
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
            if(key != "id"){
            newDiv = this.createCategory(key,book);
            card.appendChild(newDiv);
            }
        }
        removeButton = document.createElement("button");
        removeButton.classList.add("removeButton");
        removeButton.textContent = "Delete";
        removeButton.id = book["id"];
        removeButton.addEventListener("click",this.removeCard.bind(this));
        
        card.appendChild(removeButton);
        getDom["content"].appendChild(card);
        getDom["wrapper"].appendChild(getDom["content"]);
    },

    createCategory(key,book){
        if(key == "Read"){
            label = document.createElement("label");
            label.textContent = "Read";
            divContainer = document.createElement("input");
            divContainer.setAttribute("type","checkbox")
            divContainer.checked = book[key];
            label.appendChild(divContainer);
            divContainer=label;
        }
        else{
            divContainer = document.createElement("div");
            divContainer.textContent = `${key}: ${book[key]}`;
        }

        return divContainer;
    },  
    removeCard:function(event){
        target = event.target.id;
        console.log(this);
        for(let i = 0; i<this.books.length;i++){
            if(this.books[i].id == target)
                this.books.splice(i,1);
        }
        this.render();
    },
    clearContent:function(){
        this.getDom()["content"].innerHTML = "";
    },

    getDom:function(){
        content =document.querySelector(".content");
        wrapper = document.querySelector(".wrapper");
        dialog = document.querySelector("dialog");
        form = document.querySelector("form");
        newButton = document.querySelector("#new");
        confirmButton = document.querySelector("#confirmButton");
        removeButton = document.querySelector(".removeButton");
        return {removeButton:removeButton,content:content,wrapper:wrapper,dialog:dialog,form:form,newButton:newButton,confirmButton:confirmButton};
    },

    getInput:function(){
        this.id +=1;
        title = document.querySelector("#title").value;
        author = document.querySelector("#author").value;
        pages = document.querySelector("#pages").value;
        hasRead = document.querySelector("#hasRead").checked;
        return {id:this.id,Title:title,Author:author,Pages:pages,Read:hasRead};
    },

    clearInput:function(){
        title = document.querySelector("#title").value ="";
        author = document.querySelector("#author").value ="";
        pages = document.querySelector("#pages").value ="";
        hasRead = document.querySelector("#hasRead").checked = false;
    },

    addBook:function(){
        entry = this.getInput()
        this.books.push(entry);
        this.render();
        this.closeDialog();

    },

    openDialog:function(){  
        this.getDom()["dialog"].show();
    },

    closeDialog:function(){
        this.clearInput();
        this.getDom()['dialog'].close();

    }

}
myLibrary.init();

