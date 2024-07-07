document.addEventListener('DOMContentLoaded', () => {
    onInit();
});

const anuncios = [
    {
    img: 'imagenes/anuncio1.jpg',
    title: 'Casa de Lujo en el Lago',
    text: 'Casa en el lago con excelente vista, acabados de lujo a un excelente precio.',
    price: 'u$s350.000',
    wc: 3,
    car: 3,
    camas: 4
    },
    {
    img: 'imagenes/anuncio2.jpg',
    title: 'Casa Terminados de Lujo',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti molestiae at.',
    price: 'u$s275.000',
    wc: 3,
    car: 3,
    camas: 4
    },
    {
    img: 'imagenes/anuncio3.jpg',
    title: 'Casa con Pileta',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti molestiae at.',
    price: 'u$s250.000',
    wc: 3,
    car: 3,
    camas: 4
    }
];

function onInit() {
    cardsBlog();
    templeteAnuncios();
}

function templeteAnuncios() {
    const contenedor = document.getElementById('Anuncios');
    const template = document.getElementById('anuncios-template').content;

    anuncios.forEach(anuncio => {
    const clone = document.importNode(template, true);
    clone.querySelector(".imagen-casa").src = anuncio.img;
    clone.querySelector(".titulo-casa").textContent = anuncio.title;
    clone.querySelector(".text-casa").textContent = anuncio.text;
    clone.querySelector(".price-casa").textContent = anuncio.price;

    clone.querySelector(".wc-iconos").textContent = anuncio.wc;
    clone.querySelector(".car-iconos").textContent = anuncio.car;
    clone.querySelector(".camas-iconos").textContent = anuncio.camas;

    contenedor.appendChild(clone);
    });
}

function cardsBlog() {
    const cards = [
    {
        img: './Imagenes/blog1.jpg',
        title: 'Terraza en el techo de tu casa',
        escrito: '20/10/2019',
        por: "Admin",
        text: 'Consejos para construir una terraza en el techo de tu casa, con los mejores materiales y ahorrando dinero'
    },
    {
        img: './imagenes/anuncio3.jpg',
        title: 'Guia para la decoracion de hogar',
        escrito: '20/10/2019',
        por: "Admin",
        text: 'Maximiza el espacio en tu hogar con esta guía, aprende a combinar muebles y colores para darle vida a tu espacio'
    }
    ];

    const container = document.getElementById('nuestro-blog');
    container.innerHTML = '';

    cards.forEach(card => {
    const anuncioElement = document.createElement('div');
    anuncioElement.classList.add('casas-item');

    anuncioElement.innerHTML = 
    `<div class="row g-0">
        <div class="col-md-4">
            <img src="${card.img}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">${card.title}</h5>
                <p class="card-text">Escrito: ${card.escrito} por: ${card.por}</p>
                <p class="card-text">${card.text}</small></p>
            </div>
        </div>
    </div>`;
    container.appendChild(anuncioElement);
    });
}

function abrirPagina(link) {
    window.location.href = link;
}
