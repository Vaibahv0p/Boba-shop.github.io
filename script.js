// Auto-Rotate for Offers

let currentOfferIndex = 0;

const offerSlider = document.querySelector('.offer-slider');

setInterval(() => {

    currentOfferIndex = (currentOfferIndex + 1) % 4; // 4 offers in total

    offerSlider.style.transform = `translateX(-${currentOfferIndex * 100}vw)`;

}, 5000);

// Add to Cart Functionality

let cart = {

    cup: null,

    flavor: null,

    topping: null

};

const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {

    button.addEventListener('click', () => {

        const optionType = button.dataset.option;

        const selectedOption = document.querySelector(`.${optionType}-options .selected`);

        

        if (selectedOption) {

            cart[optionType] = selectedOption.querySelector('p').textContent;

            updateOrderSummary();

        } else {

            alert(`Please select a ${optionType}.`);

        }

    });

});

// Select Options and Highlight them

const cupOptions = document.querySelectorAll('.cup-option');

cupOptions.forEach(option => {

    option.addEventListener('click', () => {

        resetSelection('cup');

        option.classList.add('selected');

    });

});

const flavorOptions = document.querySelectorAll('.flavor-option');

flavorOptions.forEach(option => {

    option.addEventListener('click', () => {

        resetSelection('flavor');

        option.classList.add('selected');

    });

});

const toppingOptions = document.querySelectorAll('.topping-option');

toppingOptions.forEach(option => {

    option.addEventListener('click', () => {

        resetSelection('topping');

        option.classList.add('selected');

    });

});

// Reset selection for each category

function resetSelection(optionType) {

    const options = document.querySelectorAll(`.${optionType}-option`);

    options.forEach(option => {

        option.classList.remove('selected');

    });

}

// Update Order Summary

function updateOrderSummary() {

    const orderSummary = document.getElementById('order-summary');

    

    if (cart.cup && cart.flavor && cart.topping) {

        orderSummary.textContent = `

            Cup: ${cart.cup}

            Flavor: ${cart.flavor}

            Topping: ${cart.topping}

        `;

    } else {

        orderSummary.textContent = 'No items selected.';

    }

}

// Buy Now Button Logic

const buyNowButton = document.querySelector('.buy-now');

const modal = document.getElementById('buy-modal');

const closeModalButton = document.querySelector('.close-modal');

const buyForm = document.getElementById('buy-form');

// Show Modal on Buy Now Click

buyNowButton.addEventListener('click', () => {

    if (cart.cup && cart.flavor && cart.topping) {

        modal.style.display = 'flex';

    } else {

        alert('Please complete your order before proceeding!');

    }

});

// Close Modal

closeModalButton.addEventListener('click', () => {

    modal.style.display = 'none';

});

// Form Submission

buyForm.addEventListener('submit', (event) => {

    event.preventDefault();

    const name = document.getElementById('name').value;

    const email = document.getElementById('email').value;

    const address = document.getElementById('address').value;

    

    // Here you can handle the form data (e.g., send it to a server)

    alert(`Order placed for ${name}!\nEmail: ${email}\nAddress: ${address}`);

    modal.style.display = 'none';

    resetCart();

});

// Reset Cart

function resetCart() {

    cart = {

        cup: null,

        flavor: null,

        topping: null

    };

    updateOrderSummary();

}