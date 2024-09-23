// Menu link data
var menuLinks = [
  { text: 'about', href: '/about' },
  {
    text: 'catalog', href: '#', subLinks: [
      { text: 'all', href: '/catalog/all' },
      { text: 'top selling', href: '/catalog/top' },
      { text: 'search', href: '/catalog/search' },
    ]
  },
  {
    text: 'orders', href: '#', subLinks: [
      { text: 'new', href: '/orders/new' },
      { text: 'pending', href: '/orders/pending' },
      { text: 'history', href: '/orders/history' },
    ]
  },
  {
    text: 'account', href: '#', subLinks: [
      { text: 'profile', href: '/account/profile' },
      { text: 'sign out', href: '/account/signout' },
    ]
  },
];

//Part 1
//1.    Select and cache the <main> element in a variable named mainEl.
const mainEl = document.getElementsByTagName('main');
console.log(mainEl[0]);

// 2.   Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
// Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.
mainEl[0].style.backgroundColor = 'var(--main-bg)';

// 3.    Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do this; pick whichever one that you think works best in this situation.
mainEl[0].innerHTML = `<h1>DOM Manipulation</h1>`;

// 4.    Add a class of flex-ctr to mainEl.
// Hint: Use the Element.classList API.
mainEl[0].classList.add(`flex-ctr`);

//Part 2:
// 1.   Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
const topMenuEl = document.getElementById(`top-menu`);
console.log(topMenuEl);

// 2.   Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = `100%`;

// 3.   Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = `var(--top-menu-bg)`;

// 4.    Add a class of flex-around to topMenuEl.
topMenuEl.classList.add('flex-around');



//Part 3:
// 1.   Iterate over the entire menuLinks array and for each "link" object:
menuLinks.forEach((link) => {
  // 2.   Create an <a> element.
  let newLink = document.createElement('a')

  // 3.   On the new element, add an href attribute with its value set to the href property of the "link" object.
  newLink.setAttribute('href', link.href)

  // 4.   Set the new element's content to the value of the text property of the "link" object.
  newLink.textContent = link.text

  // 5.   Append the new element to the topMenuEl element.
  topMenuEl.appendChild(newLink)
})

// R-ALAB 316.3.1: 
// DOM Manipulation (Part Two)

// Part 3: Creating the Submenu

let subMenuEl = document.getElementById("sub-menu")
subMenuEl.style.height = '100%';

let rootStyles = getComputedStyle(document.documentElement);
let subMenuBg = rootStyles.getPropertyValue('--sub-menu-bg');
subMenuEl.style.backgroundColor = subMenuBg;

subMenuEl.classList.add('flex-around');

subMenuEl.style.position = 'absolute'
subMenuEl.style.top = '0'

topMenuEl.addEventListener('click', function (event) {
  // Prevent the default action (like link navigation)
  event.preventDefault();

  // Correct check for <a> tag
  if (event.target.tagName !== "A") {
    return;
  }


const topMenuLinks = topMenuEl.querySelectorAll('a');

topMenuLinks.forEach(link => {
  link.classList.remove('active')
}); 

const clickedLinks = menuLinks.find(link => link.text === event.target.textContent);

if (clickedLinks){
  if(clickedLinks.subLinks){
    subMenuEl.style.top ='100%'

    subMenu(clickedLinks.subLinks);
  }
  else{
    subMenuEl.style.top = '0%'  
  }

  
}

event.target.classList.add('active')
});

function subMenu (subLinks) {
    subMenuEl.innerHTML = ''

    subLinks.forEach(link => {
        const newlink = document.createElement('a');
        newLink.setAttribute('href', link.href)

        newLink.textContent = link.text
        subMenuEl.appendChild(newLink)

    });
    }



