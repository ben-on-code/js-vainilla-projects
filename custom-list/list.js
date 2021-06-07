const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');
const listTitle = document.querySelector('.title');

    
document.addEventListener("DOMContentLoaded", function(event) {
    let name = prompt('Name your list');
    listTitle.textContent = `${name} list`;
});

// We need an array to hold our states
let items = [];

// Take items from the input
function handleSubmit(e) {
    e.preventDefault();
    
    const name = e.currentTarget.item.value;
    if(!name) return;

    // Catch any item;
    const item = {
        name,
        id: Date.now(),
        complete: false,
    };

    // Push te items into our states
    items.push(item);
    console.log(`There is now ${items.length} ${items.length == 1 ? 'item' : 'items'} in your state`);

    // Clear the form
    e.target.reset();

    // Fire off a custom event that will tell anyone who cares that
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

// Display Items 
function displayItems() {
    const html = items.map(
        item => `<li class="shopping-item">
        <input
            value="${item.id}" 
            type="checkbox"
            ${item.complete ? 'checked' : ''}
        >
        <span class="itemName">${item.name}<span>
        <button
        aria-label="Remove ${item.name}"
        value="${item.id}"
        >&times;
        </button>
        </li>`
        ).join('');
        
    list.innerHTML = html;
}

function mirrorToLocalStorage() {
    localStorage.setItem('items', JSON.stringify(items));
    // Pull the items from LS
}

function restoreFromLocalStorage(){
    const lsItems = JSON.parse(localStorage.getItem('items'));
    if(lsItems.length) {
        items.push(...lsItems);
        list.dispatchEvent(new CustomEvent('itemsUpdated'));
    }
}

function deleteItem(id) {
    console.log("Deleting item", id);
    items = items.filter(item => item. id !== id);
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function markAsComplete(id) {
    console.log("marking as complete", id);
    const itemRef = items.find(item => item.id === id);
    itemRef.complete = !itemRef.complete;
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
}


// Call the events
shoppingForm.addEventListener('submit', handleSubmit);
list.addEventListener('itemsUpdated', displayItems);
list.addEventListener('itemsUpdate', mirrorToLocalStorage);

// Event delegation: we listen for the click on the list <ul> but then delegate to the item
list.addEventListener('click', function(e) {
    const id = parseInt(e.target.value);
    
    if(e.target.matches('button')) {
        deleteItem(id);
    }
    
    if(e.target.matches('input[type="checkbox"]')){
        markAsComplete(id);
    }
})

restoreFromLocalStorage();