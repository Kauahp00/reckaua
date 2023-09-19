

// Declara uma array vazia chamada cartItems para armazenar os itens do carrinho.
const cartItems = [];

// Declara uma variável cartTotal e a inicializa com o valor 0 para rastrear o valor total dos itens no carrinho.
let cartTotal = 0;

// Declara uma função chamada addToCart que aceita dois parâmetros: productName (nome do produto) e productPrice (preço do produto).
function addToCart(productName, productPrice) {
    // Adiciona um objeto com as informações do produto (nome e preço) à array cartItems.
    cartItems.push({ name: productName, price: productPrice });

    // Atualiza o valor total do carrinho, somando o preço do produto ao valor atual do carrinho.
    cartTotal += productPrice;

    // Chama a função updateCart() para atualizar a exibição do carrinho (provavelmente não mostrada aqui).
    updateCart();
}


// Define a função removeFromCart que recebe um índice como parâmetro, indicando qual item do carrinho deve ser removido.
function removeFromCart(index) {
    // Remove o item do carrinho com o índice especificado usando a função splice e armazena o item removido em removedItem.
    const removedItem = cartItems.splice(index, 1)[0];

    // Subtrai o preço do item removido do cartTotal.
    cartTotal -= removedItem.price;

    // Chama a função updateCart() para atualizar a exibição do carrinho.
    updateCart();
}

// Define a função updateCart que atualiza a exibição do carrinho.
function updateCart() {
    // Obtém referências aos elementos HTML que exibirão a lista de itens do carrinho e o valor total.
    const cartList = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');

    // Limpa a lista de itens do carrinho antes de atualizar para evitar duplicatas.
    cartList.innerHTML = '';

    // Itera sobre os itens no carrinho usando forEach.
    cartItems.forEach((item, index) => {
        // Cria um novo elemento de lista (li) para cada item do carrinho.
        const newItem = document.createElement('li');

        // Define o conteúdo do novo item da lista com o nome e o preço do item, bem como um botão "Remover" que chama a função removeFromCart.
        newItem.innerHTML = `${item.name} - R$ ${item.price.toFixed(2)} <button onclick="removeFromCart(${index})">Remover</button>`;

        // Adiciona o novo item à lista de itens do carrinho.
        cartList.appendChild(newItem);
    });

    // Atualiza o elemento HTML que exibe o valor total do carrinho com o valor atualizado (formatado com duas casas decimais).
    cartTotalElement.innerText = cartTotal.toFixed(2);
}




// Define um array de objetos chamado 'images', onde cada objeto possui um 'id' e uma 'url' da imagem.
const images = [
    { 'id': '1', 'url': 'https://s2-techtudo.glbimg.com/RbkxWLIWMD70MQQ1IWt9BiexRgA=/0x0:725x544/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/j/M/lXTV3MQIOw8E9lUowx2A/xiaomi13-pro-01.jpg' },
    { 'id': '2', 'url': 'https://img.band.uol.com.br/image/2023/07/10/celulares-flip-de-volta-ao-mercado-115448.jpg' },
    { 'id': '3', 'url': 'https://lojajonathancell.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/e/celular-xiaomi-redmi-note-10-128gb-branco01.jpg' },
    { 'id': '4', 'url': 'https://classic.exame.com/wp-content/uploads/2020/11/iphone12thiagolavado1-e1612006829724.jpg?quality=70&strip=info&w=1024' }
]

// Seleciona um elemento HTML com a classe 'container-items' (presumivelmente um contêiner onde as imagens serão exibidas).
const container = document.querySelector('.container-items');

// Itera sobre o array 'images' para criar elementos HTML para cada imagem e adicioná-los ao contêiner.
for (const image of images) {
    container.innerHTML += `
        <div class='item'>
            <img src='${image.url}'>
        </div>
    `;
}


// Seleciona todos os elementos HTML com a classe 'item' e armazena-os em uma NodeList chamada 'items'.
let items = document.querySelectorAll('.item');

// Adiciona um evento de clique ao elemento HTML com o id 'next'.
document.querySelector('#next').addEventListener('click', () => {
    // Move o primeiro item (índice 0) para o final da lista, criando um efeito de rolagem para a próxima página de itens.
    container.appendChild(items[0]);

    // Atualiza a NodeList 'items' para incluir os itens após a mudança.
    items = document.querySelectorAll('.item');
});

// Adiciona um evento de clique ao elemento HTML com o id 'previous'.
document.querySelector('#previous').addEventListener('click', () => {
    // Obtém o último item na lista de 'items'.
    const lastItem = items[items.length - 1];

    // Insere o último item antes do primeiro item na lista, criando um efeito de rolagem para a página anterior de itens.
    container.insertBefore(lastItem, items[0]);

    // Atualiza a NodeList 'items' para incluir os itens após a mudança.
    items = document.querySelectorAll('.item');
});

// Define uma função chamada toggleMode para alternar entre os modos de luz e escuro.
function toggleMode() {
    // Obtém uma referência ao elemento raiz HTML.
    let html = document.documentElement;

    // Alterna a classe 'light' no elemento HTML para alternar entre os modos de luz e escuro.
    html.classList.toggle('light');
}


//TROCA DE IMAGEM LIKE

// Obtém uma referência ao elemento HTML com o id "imagem" e armazena-o na variável "imagem".
var imagem = document.getElementById("imagem");

// Define um array chamado "imagens" contendo os nomes de arquivo das duas imagens que serão alternadas.
var imagens = ["1.png", "2.png"];

// Define uma variável chamada "indiceAtual" que será usada para rastrear a imagem atualmente exibida.
var indiceAtual = 0;

// Define uma função chamada "toggleImagem" que será executada quando um evento (como um clique) for acionado.
function toggleImagem() {
    // Obtém novamente a referência ao elemento HTML com o id "imagem".
    var imagem = document.getElementById("imagem");

    // Verifica se o atributo "src" da imagem atualmente exibida termina com "1.png".
    if (imagem.src.endsWith("1.png")) {
        // Se a imagem atual é a "1.png", altera o atributo "src" e "alt" para exibir a "2.png" e definir um novo texto alternativo.
        imagem.src = "2.png";
        imagem.alt = "Imagem 2";
    } else {
        // Caso contrário, a imagem atual é "2.png", então altera o atributo "src" e "alt" para exibir a "1.png" e definir um novo texto alternativo.
        imagem.src = "1.png";
        imagem.alt = "Imagem 1";
    }
}

// é feito repetidamente para todas as divs abertas

function toggleImagem2() {
    var imagem = document.getElementById("imagem2");
    if (imagem.src.endsWith("1.png")) {
        imagem.src = "2.png";
        imagem.alt = "Imagem 2";
    } else {
        imagem.src = "1.png";
        imagem.alt = "Imagem 1";
    }
}

function toggleImagem3() {
    var imagem = document.getElementById("imagem3");
    if (imagem.src.endsWith("1.png")) {
        imagem.src = "2.png";
        imagem.alt = "Imagem 2";
    } else {
        imagem.src = "1.png";
        imagem.alt = "Imagem 1";
    }
}

function toggleImagem4() {
    var imagem = document.getElementById("imagem4");
    if (imagem.src.endsWith("1.png")) {
        imagem.src = "2.png";
        imagem.alt = "Imagem 2";
    } else {
        imagem.src = "1.png";
        imagem.alt = "Imagem 1";
    }
}

function toggleImagem5() {
    var imagem = document.getElementById("imagem5");
    if (imagem.src.endsWith("1.png")) {
        imagem.src = "2.png";
        imagem.alt = "Imagem 2";
    } else {
        imagem.src = "1.png";
        imagem.alt = "Imagem 1";
    }
}

function toggleImagem6() {
    var imagem = document.getElementById("imagem6");
    if (imagem.src.endsWith("1.png")) {
        imagem.src = "2.png";
        imagem.alt = "Imagem 2";
    } else {
        imagem.src = "1.png";
        imagem.alt = "Imagem 1";
    }
}


