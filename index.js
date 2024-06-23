// List of grocery items with their prices
const groceryItems = [
    { name: 'Bread', price: 1.5 },
    { name: 'Milk', price: 0.99 },
    { name: 'Butter', price: 2.5 },
    { name: 'Cheese', price: 3.0 },
    { name: 'Chicken', price: 5.0 },
    { name: 'Fish', price: 7.0 },
    { name: 'Rice', price: 1.2 },
    { name: 'Pasta', price: 1.0 },
    { name: 'Oil', price: 4.0 },
    { name: 'Salt', price: 0.5 }
];

// Function to populate the grocery items table
function populateGroceryTable() {
    const tbody = document.getElementById('grocery-items');
    groceryItems.forEach((item, index) => {
        const row = document.createElement('tr');
        
        const itemName = document.createElement('td');
        itemName.textContent = item.name;
        row.appendChild(itemName);
        
        const itemPrice = document.createElement('td');
        itemPrice.textContent = `$${item.price.toFixed(2)}`;
        row.appendChild(itemPrice);
        
        const itemQuantity = document.createElement('td');
        const quantityInput = document.createElement('input');
        quantityInput.type = 'number';
        quantityInput.min = '0';
        quantityInput.value = '0';
        quantityInput.className = 'input-quantity';
        quantityInput.id = `quantity-${index}`;
        row.appendChild(quantityInput);
        
        row.appendChild(itemQuantity);
        itemQuantity.appendChild(quantityInput);

        tbody.appendChild(row);
    });
}

// Function to populate the grocery prices table
function populateGroceryPrices() {
    const tbody = document.getElementById('grocery-prices');
    groceryItems.forEach(item => {
        const row = document.createElement('tr');
        
        const itemName = document.createElement('td');
        itemName.textContent = item.name;
        row.appendChild(itemName);
        
        const itemPrice = document.createElement('td');
        itemPrice.textContent = `$${item.price.toFixed(2)}`;
        row.appendChild(itemPrice);

        tbody.appendChild(row);
    });
}

// Function to calculate the total bill
function calculateTotal() {
    let totalBill = 0;
    groceryItems.forEach((item, index) => {
        const quantity = document.getElementById(`quantity-${index}`).value;
        totalBill += item.price * quantity;
    });
    document.getElementById('total-bill').textContent = `Total Bill: $${totalBill.toFixed(2)}`;
}

// Initialize the tables on page load
window.onload = function() {
    populateGroceryTable();
    populateGroceryPrices();
};
