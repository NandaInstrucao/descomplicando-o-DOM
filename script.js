const techProducts = [
    {
        id: 1, // number
        name: 'computer', // string
        price: 2100, //number
    },
    {
        id: 2,
        name: 'mouse',
        price: 56,
    },
    {
        id: 3,
        name: 'monitor',
        price: 589,
    },
    {
        id: 4,
        name: 'keyboard',
        price: 78,
    },
    {
        id: 5,
        name: 'HD',
        price: 350,
    },
    {
        id: 6,
        name: 'webcam',
        price: 187,
    },
    {
        id: 7,
        name: 'mic',
        price: 69,
    },
    {
        id: 8,
        name: 'headset',
        price: 216,
    },
];

// HD - R$350

// Você é uma pessoa desenvolvedora que foi contratada para resolver o problema de uma loja de produtos de tecnologia. Nessa loja, a pessoa proprietária deseja ser capaz de pesquisar um equipamento através do id cadastrado.

// A pessoa proprietária contratou uma desenvolvedora front-end para criar uma interface na qual seja possível, através de um input, receber o id de um produto e obter o nome dele através de um alert.

// Seu desafio é manipular o DOM para executar a busca do nome do produto no array techProducts através do id digitado pela pessoa usuária no campo de input.

// DICA: você vai precisar utilizar eventos para conseguir associar a captura do valor do id ao click do botão.

let sendButton = document.querySelector('#search-button');

// let chooseButton = document.querySelector('#choose-products');
let products = document.querySelector('#products');

// function paintElement(event) {
//     if(event.target.classList.contains('green')) {
//         event.target.classList.remove('green');
//     } else {
//         event.target.classList.add('green');
//     }
// }

// chooseButton.addEventListener('click', function(event) {
//     event.preventDefault();
//     for (let index = 0; index < techProducts.length; index+=1) {
//         let createLi = document.createElement('li');
//         createLi.innerText = techProducts[index].name + ' - R$'  + techProducts[index].price; 
//         products.appendChild(createLi);
//         createLi.addEventListener('click', paintElement);
//     }
// })

function removeProduct(event) {
    event.target.remove();
}

function listProducts(bolinha) { 
    let createLi = document.createElement('li');
    createLi.innerText = bolinha.name + ' - R$'  + bolinha.price;
    products.appendChild(createLi);
    createLi.addEventListener('click', removeProduct);
}

sendButton.addEventListener('click', function (event) {
    event.preventDefault();
    let inputId = document.querySelector('#product-id').value;
    for (let index = 0; index < techProducts.length; index += 1) {
        let product = techProducts[index];
        if (parseInt(inputId) === product.id) {
           // alert(product.name);
            listProducts(product);
        }
    }
});


