//Worked by Luis Martinez & Marco Guzman

const siteContent = {
    "nav": {
        "nav-item-1": "Services",
        "nav-item-2": "Product",
        "nav-item-3": "Vision",
        "nav-item-4": "Features",
        "nav-item-5": "Contact",
        "img-src": "img/logo.png"
    },
    "cta": {
        "h1": "DOM Is Awesome",
        "button": "Get Started",
        "img-src": "img/header-img.png"
    },
    "main-content": {
        "features-h4": "Features",
        "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "about-h4": "About",
        "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "middle-img-src": "img/mid-page-accent.jpg",
        "services-h4": "Services",
        "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "product-h4": "Product",
        "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "vision-h4": "Vision",
        "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    },
    "contact": {
        "contact-h4": "Contact",
        "address": "123 Way 456 Street Somewhere, USA",
        "phone": "1 (888) 888-8888",
        "email": "sales@greatidea.io",
    },
    "footer": {
        "copyright": "Copyright Great Idea! 2018"
    },
};




// Example: Update the img src for the logo

let logo = document.getElementById("logo-img");
logo.setAttribute('alt', 'This is company logo');
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Started working here
let theNav = document.querySelector('nav');
let textNode = document.createTextNode('The CEO');
theNav.appendChild(textNode);
theNav.style.color = 'green';
theNav.prepend('Hello User');


let theHead = document.querySelectorAll('a');
theHead.forEach(Element => {
    return (Element.style.color = 'green');
});
//console.log(theHead);
theHead[0].innerHTML = 'Services';
//theHead[0].style.color = 'green';
theHead[1].innerHTML = 'Product';
//theHead[1].style.color = 'green';
theHead[2].innerHTML = 'Vision';
//theHead[2].style.color = 'green';
theHead[3].innerHTML = 'Features';
//theHead[3].style.color = 'green';
theHead[4].innerHTML = 'About';
//theHead[4].style.color = 'green';
theHead[5].innerHTML = 'Contacts';
//theHead[5].style.color = 'green';

//let textNode = document.createTextNode('The CEO');
//theHead[5].appendChild(textNode);

let ctaImage = document.getElementById('cta-img');
ctaImage.setAttribute('alt', 'Image of a code snippet.');
ctaImage.setAttribute('src', siteContent['cta']['img-src']);

let middleImage = document.getElementById('middle-img');
middleImage.setAttribute('alt', 'An image of code snippets across the screen');
middleImage.setAttribute('src', siteContent['main-content']['img-src'])

let ctaText = document.getElementsByTagName('h1');
ctaText[0].innerHTML = 'Dom is Awesome';

let buttons = document.getElementsByTagName('button');
 buttons[0].innerHTML = 'Get Started';
buttons[0].addEventListerner('click', () => {
    console.log("click");
}

// let body = document.querySelector('body');
// body.addEventListener('click', () => {

//     buttons.style.backgroundColor = 'red';
//     buttons.style.color = 'white';
//     body.style.backgroundColor = 'pink';
    
// });

// buttons.addEventListener('mouseover', () => {
//     console.log("By the Power of DOM");
// });

// 

let headers = document.querySelectorAll('h4');
headers[0].innerHTML = 'Features';
headers[1].innerHTML = 'About';
headers[2].innerHTML = 'Services';
headers[3].innerHTML = 'Product';
headers[4].innerHTML = 'Vision';
headers[5].innerHTML = 'Contact';

let paragraphs = document.querySelectorAll('p');
paragraphs[0].innerHTML = siteContent['main-content']['feature-content'];
'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
paragraphs[1].innerHTML =
    'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
paragraphs[2].innerHTML =
    'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
paragraphs[3].innerHTML =
    'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
paragraphs[4].innerHTML =
    'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
paragraphs[5].innerHTML = '123 Way 456 Street Somewhere, USA';
paragraphs[6].innerHTML = '1 (888) 888-8888';
paragraphs[7].innerHTML = 'sales@greatidea.io';
// paragraphs[8].innerHTML = 'Copyright Great Idea! 2018';


// //footer

let footer = document.querySelectorAll('footer');
footer[0].innerHTML = 'Copyright Great Idea! 2018';


// window.addEventListener("optimizedResize", () => {
//     console.log("Resize me Yall");
// };