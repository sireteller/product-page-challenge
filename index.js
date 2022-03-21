// ---OPEN/CLOSE MOBILE NAV---

const navHamburgerBtn = document.getElementById('nav__hamburger-btn');
const navLinks = document.getElementById('nav__links');
const navDarkOverlay = document.getElementById('nav__dark-overlay');
const navClose = document.getElementById('nav__close-btn');

navHamburgerBtn.onclick = () => {
    navLinks.classList.toggle('nav__links--open-hamburger');
    navDarkOverlay.style.display = 'block';
    setTimeout(() => {
        navDarkOverlay.style.opacity = '1';
    }, 10);
}

navClose.onclick = () => {
    navLinks.classList.toggle('nav__links--open-hamburger');
    navDarkOverlay.style.opacity = '0';
    setTimeout(() => {
        navDarkOverlay.style.display = 'none';
    }, 300);
}


// ---CART---

// -CHANGE QUANTITY AND ADD TO CART / DISPLAY QUANTITY AND PRICE IN CART-
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
        cartItem.style.display = 'none';
        cartCheckoutBtn.style.display = 'none';
        cartAltText.style.display = 'flex';
    } else {
        navItemCount.style.display = 'block';
        cartItem.style.display = 'block';
        cartCheckoutBtn.style.display = 'block';
        cartAltText.style.display = 'none';
    }
}

checkCartFullness();

// Choose number of sneakers and add to cart
quantityAddBtn.onclick = () => {
    if (quantitySelectionCurrent <= 99) {
        quantitySelectionCurrent += 1;
        quantitySelection.innerHTML = quantitySelectionCurrent;
        quantityRemoveBtn.classList.remove('quantity-btn--disabled');
        if (quantitySelectionCurrent === 100) {
            quantityAddBtn.classList.add('quantity-btn--disabled');
        }
    }
}

quantityRemoveBtn.onclick = () => {
    if (quantitySelectionCurrent >= 1) {
        quantitySelectionCurrent -= 1;
        quantitySelection.innerHTML = quantitySelectionCurrent;
        quantityAddBtn.classList.remove('quantity-btn--disabled');
        if (quantitySelectionCurrent === 0) {
            quantityRemoveBtn.classList.add('quantity-btn--disabled');
        }
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
        quantityRemoveBtn.classList.add('quantity-btn--disabled');
        quantityAddBtn.classList.remove('quantity-btn--disabled');
        checkCartFullness();
    } else {
        window.alert('This quantity would exceed your limit of sneakers per customer! (100 pairs)')
    }
}

// -OPEN/CLOSE CART-
const navCartIcon = document.getElementById('nav__cart');
const cart = document.getElementById('cart');
const cartContainer = document.getElementById('cart-container');

navCartIcon.onclick = () => {
    cart.classList.toggle('cart--closed');
    cartContainer.classList.toggle('cart-container--closed')
    checkCartFullness();
}

// -DELETE ITEM FROM CART-
const cartRemoveButton = document.getElementById('cart__remove-btn');

cartRemoveButton.onclick = () => {
    quantityInCart = 0;
    checkCartFullness();
}


// ---GALLERY AND LIGHTBOX---

// Gallery variables
const thumbnail1 = document.getElementById('section-product__thumbnail-1');
const thumbnail2 = document.getElementById('section-product__thumbnail-2');
const thumbnail3 = document.getElementById('section-product__thumbnail-3');
const thumbnail4 = document.getElementById('section-product__thumbnail-4');

const thumbnails = [thumbnail1, thumbnail2, thumbnail3, thumbnail4];

const imgLarge = document.getElementById('section-product__img-large');

const sectionProductPrevBtn = document.getElementById('section-product__prev-btn');
const sectionProductNextBtn = document.getElementById('section-product__next-btn');

// Lightbox variables
const lightbox = document.getElementById('lightbox');
const lightboxCloseBtn = document.getElementById('lightbox__close-btn');

const lightboxThumbnail1 = document.getElementById('lightbox__thumbnail-1');
const lightboxThumbnail2 = document.getElementById('lightbox__thumbnail-2');
const lightboxThumbnail3 = document.getElementById('lightbox__thumbnail-3');
const lightboxThumbnail4 = document.getElementById('lightbox__thumbnail-4');

const lightboxThumbnails = [lightboxThumbnail1, lightboxThumbnail2, lightboxThumbnail3, lightboxThumbnail4];

const lightboxImgLarge = document.getElementById('lightbox__img-large');

const lightboxPrevBtn = document.getElementById('lightbox__prev-btn');
const lightboxNextBtn = document.getElementById('lightbox__next-btn');

// Common variables
const largeImgSrc1 = './images/image-product-1.jpg';
const largeImgSrc2 = './images/image-product-2.jpg';
const largeImgSrc3 = './images/image-product-3.jpg';
const largeImgSrc4 = './images/image-product-4.jpg';

const largeImgSrcs = [largeImgSrc1, largeImgSrc2, largeImgSrc3, largeImgSrc4];

const indexes = [0, 1, 2, 3];
let currentIndex = 0;

// -THUMBNAILS TO LARGE IMAGE-
const thumbnailsToLargeImg = (thumbnailsArr, imgLargeVar) => {
    thumbnailsArr.forEach((thumbnail, index) => {
        thumbnail.onclick = () => {
            imgLargeVar.src = largeImgSrcs[index];
            thumbnail.classList.add('thumbnail--selected');

            let unselectedIndexes = indexes.filter(number => index !== number);
            unselectedIndexes.forEach(number => {
                thumbnailsArr[number].classList.remove('thumbnail--selected');
            })
            currentIndex = index;
        }
    })
}

thumbnailsToLargeImg(thumbnails, imgLarge);
thumbnailsToLargeImg(lightboxThumbnails, lightboxImgLarge);

// -IMAGE SWITCH WITH ARROWS-

prevFunc = (thumbnailsArr, imgLargeVar) => {
    if (currentIndex === 0) {
        currentIndex = largeImgSrcs.length - 1;
    } else {
        currentIndex -= 1;
    }
    imgLargeVar.src = largeImgSrcs[currentIndex];
    thumbnailsArr[currentIndex].classList.add('thumbnail--selected');

    let unselectedIndexes = indexes.filter(number => currentIndex !== number);
    unselectedIndexes.forEach(number => {
        thumbnailsArr[number].classList.remove('thumbnail--selected');
    })
}

nextFunc = (thumbnailsArr, imgLargeVar) => {
    if (currentIndex === largeImgSrcs.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex += 1;
    }
    imgLargeVar.src = largeImgSrcs[currentIndex];
    thumbnailsArr[currentIndex].classList.add('thumbnail--selected');

    let unselectedIndexes = indexes.filter(number => currentIndex !== number);
    unselectedIndexes.forEach(number => {
        thumbnailsArr[number].classList.remove('thumbnail--selected');
    })
}

sectionProductPrevBtn.onclick = () => {
    prevFunc(thumbnails, imgLarge);
}

sectionProductNextBtn.onclick = () => {
    nextFunc(thumbnails, imgLarge);
}

lightboxPrevBtn.onclick = () => {
    prevFunc(lightboxThumbnails, lightboxImgLarge);
}

lightboxNextBtn.onclick = () => {
    nextFunc(lightboxThumbnails, lightboxImgLarge);
}

// -OPEN/CLOSE LIGHTBOX-
// Disable lightbox from mobile to tablet width
const mediaQuery = window.matchMedia('(max-width: 768px)');

const checkLightboxEligibility = (mediaQuery) => {
    if (mediaQuery.matches) {
        lightbox.style.display = 'none';

        imgLarge.onclick = () => {
            lightbox.style.display = 'none';
        }
    } else {
        imgLarge.onclick = () => {
            lightbox.style.display = 'flex';
            setTimeout(() => {
                lightbox.style.opacity = '1';
            }, 10);
        }
        
        lightboxCloseBtn.onclick = () => {
            lightbox.style.opacity = '0';
            setTimeout(() => {
                lightbox.style.display = 'none';
            }, 200);
        }
    }
}

checkLightboxEligibility(mediaQuery);

mediaQuery.addEventListener('change', checkLightboxEligibility)
