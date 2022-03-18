// ---MOBILE NAV OPEN/CLOSE---

const navHamburgerIcon = document.getElementById('nav__hamburger-icon');
const navLinks = document.getElementById('nav__links');
const navDarkOverlay = document.getElementById('nav__dark-overlay');
const navClose = document.getElementById('nav__close');

navHamburgerIcon.onclick = () => {
    navLinks.classList.toggle('nav__links--open-hamburger');
    navDarkOverlay.style.display = 'block';
    setTimeout(() => {
        navDarkOverlay.style.opacity = '1';
    }, 100);
}

navClose.onclick = () => {
    navLinks.classList.toggle('nav__links--open-hamburger');
    navDarkOverlay.style.opacity = '0';
    setTimeout(() => {
        navDarkOverlay.style.display = 'none';
    }, 400);
}

// ---CART---
// --CHANGE QUANTITY AND ADD TO CART--
// --DISPLAY QUANTITY AND PRICE IN CART--
const quantityAddBtn = document.getElementById('section-product__quantity-add-btn');
const quantityRemoveBtn = document.getElementById('section-product__quantity-remove-btn');
const quantitySelection = document.getElementById('section-product__current-quantity');
let quantitySelectionCurrent = Number(quantitySelection.innerHTML);
const addToCartBtn = document.getElementById('section-product__add-to-cart-btn');
const navItemCount = document.getElementById('nav__item-count');
let quantityInCart = Number(navItemCount.innerHTML);
const cartItemCount= document.getElementById('cart__item-amount');
const cartTotalPrice = document.getElementById('cart__total-price');
const cartItem = document.getElementById('cart__item');
const cartCheckoutBtn = document.getElementById('cart__checkout-btn');
const cartAltText = document.getElementById('cart__alt-text');


// Check if there's anything in the cart and render elements related to the cart accordingly
const checkCartFullness = () => {
    if (quantityInCart <= 0) {
        navItemCount.style.display = 'none';
        cartItem.classList.add('cart__item--empty-cart');
        cartCheckoutBtn.classList.add('cart__checkout-btn--empty-cart');
        cartAltText.classList.remove('cart__alt-text--full-cart');
    } else {
        navItemCount.style.display = 'block';
        cartItem.classList.remove('cart__item--empty-cart');
        cartCheckoutBtn.classList.remove('cart__checkout-btn--empty-cart');
        cartAltText.classList.add('cart__alt-text--full-cart');
    }
}

checkCartFullness();

// Add chosen number of sneakers into cart
quantityAddBtn.onclick = () => {
    if (quantitySelectionCurrent <= 99) {
        quantitySelectionCurrent += 1;
        quantitySelection.innerHTML = quantitySelectionCurrent;
    }
}

quantityRemoveBtn.onclick = () => {
    if (quantitySelectionCurrent >= 1) {
        quantitySelectionCurrent -= 1;
        quantitySelection.innerHTML = quantitySelectionCurrent;
    }
}

addToCartBtn.onclick = () => {
    if (quantityInCart + quantitySelectionCurrent <= 100) {
        quantityInCart += quantitySelectionCurrent;
        navItemCount.innerHTML = quantityInCart;
        cartItemCount.innerHTML = quantityInCart;
        cartTotalPrice.innerHTML = `$${125 * quantityInCart}.00`;
        quantitySelectionCurrent = 0;
        quantitySelection.innerHTML = quantitySelectionCurrent;
        checkCartFullness();
    } else {
        window.alert('This quantity would exceed your limit of sneakers per customer! (100 pairs)')
    }
}

// --VIEW CART--
const navCartIcon = document.getElementById('nav__cart');
const cart = document.getElementById('cart');

navCartIcon.onclick = () => {
    cart.classList.toggle('cart--closed');
    checkCartFullness();
}

// --DELETE ITEM FROM CART--
const cartRemoveButton = document.getElementById('cart__remove-btn');

cartRemoveButton.onclick = () => {
    quantityInCart = 0;
    checkCartFullness();
}