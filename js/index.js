const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let nav                       = document.querySelector('nav');
let navLink                   = nav.querySelectorAll('a');
navLink[0].textContent        = siteContent['nav']['nav-item-1'];
navLink[1].textContent        = siteContent['nav']['nav-item-2'];
navLink[2].textContent        = siteContent['nav']['nav-item-3'];
navLink[3].textContent        = siteContent['nav']['nav-item-4'];
navLink[4].textContent        = siteContent['nav']['nav-item-5'];
navLink[5].textContent        = siteContent['nav']['nav-item-6'];
Array.from(navLink).forEach(link => link.style.color = 'green');
let navFirstChild             = document.createElement('a');
navFirstChild.textContent     = 'Home';
navFirstChild.href            = '#';
navFirstChild.style.color     = 'green';
nav.prepend(navFirstChild);
let navLastChild              = document.createElement('a');
navLastChild.textContent      = 'Last';
navLastChild.href             = '#';
navLastChild.style.color       = 'green';
nav.appendChild(navLastChild);

let logo                      = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let ctaInfo                   = document.querySelector('.cta .cta-text h1');
ctaInfo.innerText            = siteContent['cta']['h1'].replace(/ /g, '\n');
ctaInfo.style.width           = '241px';
let ctaButton                 = document.querySelector('.cta .cta-text button');
ctaButton.textContent         = siteContent['cta']['button'];
let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent['cta']['img-src']);

let topContent                = document.querySelectorAll('.main-content .top-content .text-content');
let firstTop                  = topContent[0];
let firstTopHead              = firstTop.querySelector('h4');
firstTopHead.textContent      = siteContent['main-content']['features-h4'];
let firstTopContent           = firstTop.querySelector('p');
firstTopContent.textContent   = siteContent['main-content']['features-content'];
let secondTop                 = topContent[1];
let secondTopHead             = secondTop.querySelector('h4');
secondTopHead.textContent     = siteContent['main-content']['about-h4'];
let secondTopContent          = secondTop.querySelector('p');
secondTopContent.textContent  = siteContent['main-content']['about-content'];

let midImg = document.getElementById('middle-img');
midImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

let bottomContent             = document.querySelectorAll('.main-content .bottom-content .text-content');
let firstBottom               = bottomContent[0];
let firstBottomHead           = firstBottom.querySelector('h4');
firstBottomHead.textContent   = siteContent['main-content']['services-h4'];
let firstBottomText           = firstBottom.querySelector('p');
firstBottomText.textContent   = siteContent['main-content']['services-content'];
let secondBottom              = bottomContent[1];
let secondBottomHead          = secondBottom.querySelector('h4');
secondBottomHead.textContent  = siteContent['main-content']['product-h4'];
let secondBottomText           = secondBottom.querySelector('p');
secondBottomText.textContent   = siteContent['main-content']['product-content'];
let thirdBottom               = bottomContent[2];
let thirdBottomHead           = thirdBottom.querySelector('h4');
thirdBottomHead.textContent   = siteContent['main-content']['vision-h4'];
let thirdBottomText           = thirdBottom.querySelector('p');
thirdBottomText.textContent   = siteContent['main-content']['vision-content'];

let contactInfo = document.querySelector('.contact h4');
contactInfo.textContent     = siteContent['contact']['contact-h4'];

let addressInfo = document.querySelectorAll('.contact p');
addressInfo[0].textContent  = siteContent['contact']['address'];
addressInfo[0].style.width  = '20%';
addressInfo[1].textContent  = siteContent['contact']['phone'];
addressInfo[2].textContent  = siteContent['contact']['email'];

let footer = document.querySelector('footer p');
footer.textContent          = siteContent['footer']['copyright'];