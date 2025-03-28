// DOM Elements
const locationSelector = document.querySelector('.location-selector');
const restaurantContainer = document.querySelector('.restaurant-listings');
const foodCategories = document.querySelector('.food-categories');

// Check if elements exist before proceeding
if (!locationSelector || !restaurantContainer || !foodCategories) {
    console.error('Required DOM elements not found');
    return;
}

// Sample Data (will be replaced with API calls later)
const sampleRestaurants = [
    {
        id: 1,
        name: "Burger King",
        image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/",
        cuisine: "Burgers, American",
        rating: 4.2,
        deliveryTime: "30-40 mins",
        price: "₹200 for two"
    },
    {
        id: 2,
        name: "Domino's Pizza",
        image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/",
        cuisine: "Pizza, Italian",
        rating: 4.0,
        deliveryTime: "25-35 mins",
        price: "₹150 for two"
    }
];

const sampleCategories = [
    { name: "Pizza", image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/" },
    { name: "Burgers", image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/" },
    { name: "Biryani", image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/" }
];

// Initialize the app
function init() {
    renderRestaurants();
    renderFoodCategories();
    setupEventListeners();
}

// Render restaurant cards
function renderRestaurants() {
    restaurantContainer.innerHTML = sampleRestaurants.map(restaurant => `
        <div class="restaurant-card">
            <img src="${restaurant.image}${restaurant.id}" alt="${restaurant.name}" class="restaurant-image">
            <div class="restaurant-details">
                <h3 class="restaurant-name">${restaurant.name}</h3>
                <p class="restaurant-cuisine">${restaurant.cuisine}</p>
                <div class="flex justify-between items-center">
                    <div class="restaurant-rating">
                        <span class="rating-badge">${restaurant.rating} ★</span>
                        <span>${restaurant.deliveryTime}</span>
                    </div>
                    <span>${restaurant.price}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Render food categories
function renderFoodCategories() {
    foodCategories.innerHTML = sampleCategories.map(category => `
        <div class="food-category">
            <img src="${category.image}${category.name.toLowerCase()}" alt="${category.name}">
            <p>${category.name}</p>
        </div>
    `).join('');
}

// Setup event listeners
function setupEventListeners() {
    // Location selector click handler
    locationSelector.addEventListener('click', () => {
        console.log('Location selector clicked');
        // Will implement location selection modal later
    });

    // Add more event listeners as needed
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);