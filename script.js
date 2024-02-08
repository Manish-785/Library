const myLibrary = [];
const ondisplay = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
};

const book1 = new Book('Moby Dick','Herman Melville',427,false);
const book2 = new Book('Midnight in the Garden of Good and Evil','John Berendt',416,true);
const book3 = new Book('Beloved','Toni Morrison',324,true);
const book4 = new Book('Atomic Habits','John Reaper',157,true);

myLibrary.push(book1,book2,book3,book4)

const container = document.querySelector('.container');
function display(book){
    const div = document.createElement('div');
    
    const name = document.createElement('div');
    name.textContent = book.title;
    name.style = "margin-bottom:15px; border-bottom:solid 1px; font-weight:bold; text-align:center; height:50px;"
    
    const author = document.createElement('div');
    author.textContent = `By ${book.author}`;
    author.style = 'height: 40px;'
    
    const pages = document.createElement('div');
    pages.textContent = `Pages: ${book.pages}`;
    
    const read = document.createElement('div');
    read.textContent = bookstatus(book.read,read);
    
    const toggle = document.createElement('button');
    toggle.textContent = 'Toggle';
    toggle.addEventListener('click',()=>{
        book.read = !book.read;
        read.textContent = bookstatus(book.read,read);
    })

    const remove = document.createElement('button')
    remove.textContent = 'Delete';
    remove.addEventListener('click',()=>{
        remove.parentElement.remove();
    })

    div.appendChild(name);
    div.appendChild(author);
    div.appendChild(pages);
    div.appendChild(read);
    div.appendChild(toggle);
    div.appendChild(remove);
    container.appendChild(div);
}

function bookstatus(hasread,read){
    if(hasread)
        read.textContent = `Already Read`;
    else
        read.textContent = `Not Yet Read`;
    return read.textContent;
}

myLibrary.forEach(book=>{
    display(book);
})

const dialog = document.querySelector('#addbook');
const addButton = document.querySelector('#addbutton');
addButton.addEventListener('click',()=>{
    dialog.showModal();
})
const closeButton = document.querySelector('#closebutton');
closeButton.addEventListener('click',()=>{
    dialog.close();
})

const bookinfo = document.querySelector('#bookinfo');
bookinfo.addEventListener('submit',(e)=>{
    e.preventDefault();

    let bookName = document.querySelector('#bookName').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    const read  = document.querySelector('#read').checked;
    
    const book = new Book(bookName,author,pages,read);
    myLibrary.push(book);
    display(book);
    dialog.close();
    bookinfo.reset();    
})

