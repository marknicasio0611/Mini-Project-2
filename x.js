// Get the search form and login form elements
const searchForm = document.querySelector('.search-form');
const loginForm = document.querySelector('.login-form-container');

// Toggle the search form when the search button is clicked
document.querySelector('#search-btn').onclick = () => {
  searchForm.classList.toggle('active');
};

// Toggle the login form when the login button is clicked
document.querySelector('#login-btn').onclick = () => {
  loginForm.classList.toggle('active');
};

// Close the login form when the close button is clicked
document.querySelector('#close-login-btn').onclick = () => {
  loginForm.classList.remove('active');
};

// Update the header styling when scrolling
window.onscroll = () => {
  searchForm.classList.remove('active');
  const header2 = document.querySelector('.header .header-2');
  if (window.scrollY > 80) {
    header2.classList.add('active');
  } else {
    header2.classList.remove('active');
  }
};

// Load the page and fade out the loader
window.onload = () => {
  const header2 = document.querySelector('.header .header-2');
  if (window.scrollY > 80) {
    header2.classList.add('active');
  } else {
    header2.classList.remove('active');
  }
  fadeOut();
};

// Define the loader and fadeOut functions
function loader() {
  document.querySelector('.loader-container').classList.add('active');
}

function fadeOut() {
  setTimeout(loader, 4000);
}

// Define a variable to hold the cart items
let cart = [];

// Get the add-to-cart button and add a click event listener
const addToCartButton = document.getElementById('add-to-cart');
addToCartButton.addEventListener('click', addToCart);

// Define the addToCart function
function addToCart() {
  // Get the book title, price, and quantity
  const title = document.querySelector('h3').textContent;
  const price = document.querySelector('.price').textContent;
  const quantity = 1;

  // Create a new item object and add it to the cart array
  const item = { title, price, quantity };
  cart.push(item);

  // Update the cart items and total in the HTML
  updateCartItems();
  updateCartTotal();
}

// Define the updateCartItems function
function updateCartItems() {
  // Get the cart items table body element
  const cartItemsTableBody = document.getElementById('cart-items');

  // Clear the table body and add each item to a new row
  cartItemsTableBody.innerHTML = '';
  cart.forEach(item => {
    const row = cartItemsTableBody.insertRow();
    const titleCell = row.insertCell();
    const quantityCell = row.insertCell();
    const priceCell = row.insertCell();
    const totalCell = row.insertCell();
    titleCell.innerHTML = item.title;
    quantityCell.innerHTML = item.quantity;
    priceCell.innerHTML = item.price;
    totalCell.innerHTML = item.quantity * item.price;
  });
}