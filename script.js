// Manipulare DOM
// Modificarea stilului unui element sau unui grup de elemente
var sections = document.querySelectorAll('form');
sections.forEach(section => {
  section.style.backgroundColor = 'lightgray';
});

//Creare si stergere elemente + clasa Date + eveniment Mouse
const sugestii = [
    {
      title: "First Love",
      short_description: "Set in the aftermath of the financial collapse of late 2008 during George Bush's second term, it follows one American family, the Albrights, as they try to survive and readjust to drastically reduced economic prospects.",    },
    {
      title: "Royalteen",
      short_description: "Royalteen is a love story about living with your mistakes, conquering your fears and breaking the internet.",
    },
    {
      title: 'The mother',
      short_description: "Mama este un thriller de acțiune american din 2023, regizat de Niki Caro, cu un scenariu de Misha Green, Andrea Berloff și Peter Craig, dintr-o poveste de Green. ",
    },
    {
        title: 'Vacanță criminală 2',
        short_description: "Murder Mystery 2 este un film american de comedie de acțiune din 2023, regizat de Jeremy Garelick și scris de James Vanderbilt. Este o continuare a filmului Murder Mystery din 2019 și îi are în distribuție pe Adam Sandler și Jennifer Aniston. Murder Mystery 2 a fost lansat de Netflix pe 31 martie 2023.",
    },
    {
        title: 'Ever After Happy',
        short_description: "As a shocking truth about a couple's families emerges, the two lovers discover they are not so different from each other. Tessa is no longer the sweet, simple, good girl she was when she met Hardin — any more than he is the cruel, moody boy she fell so hard for."
    }
];
  
  
let Idx = 0;
  
window.onload = () => {
  document.getElementById('add').onclick = addNews;
  document.getElementById('remove').onclick = removeNews;
}
  
function addNews() {
    const newsArticle = sugestii[Idx];
    const articleElement = document.createElement('div');
    articleElement.classList.add('news-article');
  
    const articleContent = document.createElement('div');
    articleContent.classList.add('content');
  
    const h1 = document.createElement('h1');
    h1.textContent = newsArticle.title;
  
    const p = document.createElement('p');
    p.textContent = newsArticle.short_description;
    const currentDate = new Date();
  
    articleContent.append(h1, p, currentDate);
    articleElement.append(articleContent);
    document.querySelector('#sugestii').append(articleElement);

    Idx = (Idx + 1) % sugestii.length;
  
}
  
function removeNews() {
    document.querySelector('#sugestii').lastChild?.remove();
}

//setInterval() si setTimeout() + Schimbarea aleatorie a unor proprietăți + clasa Math
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const title=document.querySelector('h2')
setInterval(() => {
    const randomColor = getRandomColor();
    title.style.color = randomColor;
    setTimeout(() => {
        title.style.fontSize = '32px';
    }, 2000);
    
    setTimeout(() => {
        title.style.fontSize = '12px';
    }, 1000);
}, 3000);

// Salvarea și preluarea datelor din LocalStorage + preventDefault() + stopPropagation()
const form = document.querySelector('#contact-form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    event.stopPropagation()
    //expresie regex
    let email = document.querySelector('#email').value;
    let regex = '/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/';
    if (!regex.test(email)) {
        alert('Invalid email address');
    }
    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const messageInput = document.querySelector('#message');

    const data = {
        name: nameInput.value,
        email: emailInput.value,
        message: messageInput.value
    };

    localStorage.setItem('formData', JSON.stringify(data));

    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
});

//Eveniment Tastatura
window.addEventListener('keydown', function(event) {
  console.log('Tasta apasata:', event.key);
});

// Eveniment target si currentTarget
document.addEventListener('click', function(event) {
  var elementClicked = event.target;
  var currentElement = event.currentTarget;
  
  console.log('Elementul pe care s-a produs click-ul:', elementClicked);
  console.log('Elementul la care s-a atașat ascultătorul de eveniment:', currentElement);
});

// Metodele getComputedStyle() și getBoundingClientRect()
document.addEventListener('click', function(event) {
  var clickedElement = event.target;
  var containerElement = event.currentTarget;

  if (clickedElement.classList.contains('box')) {
    clickedElement.style.backgroundColor = getRandomColor();

    var computedStyle = getComputedStyle(clickedElement);
    var width = computedStyle.width;
    var height = computedStyle.height;

    var boundingRect = clickedElement.getBoundingClientRect();
    var top = boundingRect.top;
    var left = boundingRect.left;

    console.log('Culoarea de fundal:', clickedElement.style.backgroundColor);
    console.log('Dimensiune:', width, height);
    console.log('Poziție:', top, left);
  }
});

