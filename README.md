# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

## Built with

Vanilla HTML, CSS and JavaScript

## What I learned

Working with .svg was a brand new experience for me (so far I had only worked with fontawesome for icons). I learned that there are multiple different ways of implementing them in HTML, I personally used the ``<svg>`` element and added color to them with ``fill`` and ``stroke`` attributes on the ``<path>`` element.

I also took my first shot at implementing BEM-based classes. I really hope that I understood the conventions correctly from the articles I read. Do point me in the right direction if you think I took a wrong turn somewhere.

Fun fact I learned during this project: Intl.NumberFormat() is a feature in JavaScript that can format a number to a currency.

Not a fun fact I learned during this project: Firefox won't let (half)transparent borders just be transparent. It adds the color of the div underneath to it.

Something I was really happy with discovering was how to make a smooth animation for an appearing border, like in the navigation when you hover over categories. It's likely nothing new or particularly exciting in general, all I did was apply an invisible border to the initial state, a colored one for the hover state and a css transition, but it felt so satisfying to figure it out for myself, to go from a janky jumping element to a smooth experience.

Overall, I had loads of fun coding this challenge and watching it come together to be like the reference images (with the addition of neat little css transitions for that extra polished feel). There's nothing more satisfying than making a page pretty and functional, and of course learning new things along the way.
