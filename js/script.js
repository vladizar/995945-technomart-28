// POPUP ADDED TO CART

// Store cart items number
let cartItemsNumber = 0;

// Find all needed DOM elements
const popupAddedToCart = document.querySelector('.popup-added-to-cart');
const popupAddedToCartOpenButtons = document.querySelectorAll('.button-buy');
const popupAddedToCartCloseButtons = popupAddedToCart.querySelectorAll('button');
const cartButton = document.querySelector('.cart');

for (const popupAddedToCartOpenButton of popupAddedToCartOpenButtons) 
{
    // When popup open button is pressed
    popupAddedToCartOpenButton.onclick = function (evt) 
    {
        // Stop browser from following the link
        evt.preventDefault();

        // Show popup
        popupAddedToCart.classList.remove('hidden'); 
        
        // Increase cart items number
        cartItemsNumber++;

        // Show user filled cart, and number of items
        cartButton.classList.add('filled');
        cartButton.textContent = 'Корзина: ' + cartItemsNumber;
    }
}

for (const popupAddedToCartCloseButton of popupAddedToCartCloseButtons) 
{
    // When popup close button is pressed
    popupAddedToCartCloseButton.onclick = function (evt) 
    {
        // Hide popup
        popupAddedToCart.classList.add('hidden');    
    }
}

// ALL POPUPS

// When users pressed the key on keyboard
window.onkeydown = function (evt)
{
    // If popup is now shown and user pressed Escape key
    if (!popupAddedToCart.classList.contains('hidden') && evt.key == 'Escape') 
    {
        // Hide popup
        popupAddedToCart.classList.add('hidden');  
    }   
}       

// If on index.html page
if (!document.querySelector('.logo[href]')) 
{
    // INDEX.HTML

    // POPUP FEEDBACK  

    // Find all needed DOM elements
    const popupFeedback = document.querySelector('.popup-feedback');
    const popupFeedbackOpenButton = document.querySelector('.write-us');
    const popupFeedbackCloseButton = popupFeedback.querySelector('.button-close');
    const popupFeedbackForm = popupFeedback.querySelector('form');
    const popupFeedbackInputs = popupFeedbackForm.querySelectorAll('input');
    const popupFeedbackTextArea = popupFeedbackForm.querySelector('textarea');

    // Variables for autofill form fields
    let username = '';
    let email = '';
    let isStorageSupport = true;

    // Get variables values from local storage, if exists
    try
    {
        username = localStorage.getItem('username');
        email = localStorage.getItem('email');
    }
    catch (err)
    {
        isStorageSupport = false;
    }

    // When popup open button is pressed
    popupFeedbackOpenButton.onclick = function (evt) 
    {
        // Stop browser from following the link
        evt.preventDefault();

        // Show popup
        popupFeedback.classList.remove('hidden');   
        
        // Focus on first form field
        popupFeedbackInputs[0].focus();

        // If username value exists
        if (username) 
        {
            // Fill username field, focus on next
            popupFeedbackInputs[0].value = username;
            popupFeedbackInputs[1].focus();
        }
        
        // If email value exists
        if (email) 
        {
            // Fill email field, focus on next
            popupFeedbackInputs[1].value = email;
            popupFeedbackTextArea.focus();
        }
    }

    // When popup close button is pressed
    popupFeedbackCloseButton.onclick = function (evt) 
    {
        // Hide popup
        popupFeedback.classList.add('hidden');    
    }

    // When user submit form
    popupFeedbackForm.onsubmit = function (evt) 
    {
        // If it has empty fields
        if (!popupFeedbackInputs[0].value || !popupFeedbackInputs[1].value || !popupFeedbackTextArea.value) 
        {
            // Stop browser from sending form
            evt.preventDefault();

            // Shake popup
            popupFeedback.classList.remove('popup-error');
            void popupFeedback.offsetWidth;
            popupFeedback.classList.add('popup-error');
        }
        else
        {
            // If local storage is supported
            if (isStorageSupport) 
            {
                // Store user data
                localStorage.setItem('username', popupFeedbackInputs[0].value);
                localStorage.setItem('email', popupFeedbackInputs[1].value);
            }
        }
    }

    // POPUP MAP  

    // Find all needed DOM elements
    const popupMap = document.querySelector('.popup-map');
    const popupMapOpenButton = document.querySelector('.map');
    const popupMapCloseButton = popupMap.querySelector('.button-close');

    // When popup open button is pressed
    popupMapOpenButton.onclick = function (evt) 
    {
        // Stop browser from following the link
        evt.preventDefault();

        // Show popup
        popupMap.classList.remove('hidden');   
    }

    // When popup close button is pressed
    popupMapCloseButton.onclick = function (evt) 
    {
        // Hide popup
        popupMap.classList.add('hidden');    
    }

    // SERVICES SLIDER

    // Find all needed DOM elements
    const servicesList = document.querySelector('.services-list');
    const servicesDescription = document.querySelector('.services-description');
    const servicesListLinks = servicesList.querySelectorAll('a');
    const servicesListBlocks = servicesDescription.querySelectorAll('div');

    // Store current slider page number
    let servicesSliderCurrentIndex = 0;

    // Iterate over links in services list
    for (let i = 0; i < servicesListLinks.length; i++) 
    {
        // Store new link
        const servicesListLink = servicesListLinks[i];
    
        // When user clicks on it
        servicesListLink.onclick = function (evt) 
        {
            // Stop browser from following the link
            evt.preventDefault();

            // Hide current slider page
            servicesListLinks[servicesSliderCurrentIndex].classList.remove('active');
            servicesListLinks[servicesSliderCurrentIndex].href = '#';
            servicesListBlocks[servicesSliderCurrentIndex].classList.add('hidden');

            // Set current slider page number to new page number
            servicesSliderCurrentIndex = i;

            // Show new slider page
            servicesListLink.classList.add('active');
            servicesListLink.removeAttribute('href');
            servicesListBlocks[i].classList.remove('hidden');
        }
    }

    // PROMO BLOCK SLIDER

    // Find all needed DOM elements
    const promoSlider = document.querySelector('.slider');
    const promoSliderPages = promoSlider.querySelectorAll('article');
    const promoSliderNextButton = promoSlider.querySelector('.next-slide');
    const promoSliderPreviousButton = promoSlider.querySelector('.previous-slide');
    const promoSliderPageControls = promoSlider.querySelectorAll('.page-control');

    // Store current slider page number
    let promoSliderCurrentIndex = 1;

    // Iterate over page controls in slider
    for (let i = 0; i < promoSliderPageControls.length; i++) 
    {
        // Store new page control
        const promoSliderPageControl = promoSliderPageControls[i];
    
        // When user clicks on it
        promoSliderPageControl.onclick = function () 
        {
            // Hide current slider page
            promoSliderPageControls[promoSliderCurrentIndex].classList.remove('current');
            promoSliderPages[promoSliderCurrentIndex].classList.remove('current');

            // Set current slider page number to new page number
            promoSliderCurrentIndex = i;

            // Show new slider page
            promoSliderPageControl.classList.add('current');
            promoSliderPages[i].classList.add('current');
        }
    }

    // When user clicks on next page button
    promoSliderNextButton.onclick = function () 
    {
        // Hide current slider page
        promoSliderPageControls[promoSliderCurrentIndex].classList.remove('current');
        promoSliderPages[promoSliderCurrentIndex].classList.remove('current');  

        // Increase current slider number to next slider page number
        promoSliderCurrentIndex = (promoSliderCurrentIndex + 1) % promoSliderPageControls.length;

        // Show next slider page
        promoSliderPageControls[promoSliderCurrentIndex].classList.add('current');
        promoSliderPages[promoSliderCurrentIndex].classList.add('current');
    }

    // When user clicks on previous page button
    promoSliderPreviousButton.onclick = function () 
    {
        // Hide current slider page
        promoSliderPageControls[promoSliderCurrentIndex].classList.remove('current');
        promoSliderPages[promoSliderCurrentIndex].classList.remove('current');  

        // Set current slider page number to previous page number
        promoSliderCurrentIndex = Math.abs((promoSliderCurrentIndex - 1) % promoSliderPageControls.length);

        // Show previous slider page
        promoSliderPageControls[promoSliderCurrentIndex].classList.add('current');
        promoSliderPages[promoSliderCurrentIndex].classList.add('current');
    }

    // ALL POPUPS

    // When users pressed the key on keyboard
    window.onkeydown = function (evt)
    {
        // If popup feedback is now shown and user pressed Escape key
        if (!popupFeedback.classList.contains('hidden') && evt.key == 'Escape') 
        {
            // Hide popup
            popupFeedback.classList.add('hidden');  
        }    

        // If popup map is now shown and user pressed Escape key
        else if (!popupMap.classList.contains('hidden') && evt.key == 'Escape') 
        {
            // Hide popup
            popupMap.classList.add('hidden');  
        }    
    }
}