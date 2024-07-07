let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
  body.classList.add('active');
});

closeShopping.addEventListener('click', () => {
  body.classList.remove('active');
});

let products = [
    {
      id: 1,
      name: 'PRODUCT NAME 1',
      image: '1.PNG',
      price: 120000
    },
    {
      id: 2,
      name: 'PRODUCT NAME 2',
      image: '2.PNG',
      price: 130000
    },
    {
      id: 3,
      name: 'PRODUCT NAME 3',
      image: '3.PNG',
      price: 220000
    },
    {
      id: 4,
      name: 'PRODUCT NAME 4',
      image: '4.PNG',
      price: 125000
    },
    {
        id: 5,
        name: 'PRODUCT NAME 4',
        image: '1.PNG',
        price: 150000
      },
      {
        id: 6,
        name: 'PRODUCT NAME 4',
        image: '2.PNG',
        price: 160000
      }
  ];


let listCards = [];

function initApp() {
  products.forEach((value, key) => {
    let newDiv = document.createElement('div');
    newDiv.classList.add('item');
    newDiv.innerHTML = `
      <img src="image/${value.image}" />
      <div class="title">${value.name}</div>
      <div class="price">${value.price.toLocaleString()}</div>
      <button onclick="addToCard(${key})">Add To Cart</button>
    `;
    list.appendChild(newDiv);
  });
}

initApp();


function addtoCard(key){
    if(listCards[key] == null){
        listCards[key] = products[key];
        listcards[key].quantity = 1;
    }
    reloadCard();
}


function reloadCard(){
    listCard.innerHTML='';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value,key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
      
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
            <div><img src="image/${value.image}" /></div>
            <div>${value.name}</div>
            <div>${value.price.toLocalString()}</div>
            <div>${value.quantity}</div>
            <div>
       <button onclick="changeQuatity(${key}, ${value.quantity - 1})">+</button>
        <div class="count">${value.quantity}</div>
            </div>
            `;
            listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}

  