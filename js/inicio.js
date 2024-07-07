// import { cardsBLog } from './blog';

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
    camas: 4,
    link: 'enlace1.html'
  },
  {
    img: 'imagenes/anuncio2.jpg',
    title: 'Casa Terminados de Lujo',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti molestiae at.',
    price: 'u$s275.000',
    wc: 3,
    car: 3,
    camas: 4,
    link: 'enlace2.html'
  },
  {
    img: 'imagenes/anuncio3.jpg',
    title: 'Casa con Pileta',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti molestiae at.',
    price: 'u$s250.000',
    wc: 3,
    car: 3,
    camas: 4,
    link: 'enlace3.html'
  }
];

function onInit()
{
  cardsBlog();
  templeteAnuncios();
}

function crearAnuncios() {
  const container = document.getElementById('anuncios-container');
  anuncios.forEach(anuncio => {
      const anuncioElement = document.createElement('div');
      anuncioElement.classList.add('anuncios');
      
      anuncioElement.innerHTML = 
      `<img src="${anuncio.img}" onclick="abrirPagina('${anuncio.link}')">
          <h3>${anuncio.title}</h3>
          <p>${anuncio.text}</p>
          <b>${anuncio.price}</b>
          <div class="anuncios_iconos ">
              <img src="./Imagenes/icono_wc.svg">
              <h4>${anuncio.wc}</h4>
              <img src="./Imagenes/icono_estacionamiento.svg">
              <h4>${anuncio.estacionamiento}</h4>
              <img src="./Imagenes/icono_dormitorio.svg">
              <h4>${anuncio.dormitorios}</h4>
          </div>
          <button onclick="abrirPagina('${anuncio.link}')" type="button">Ver propiedad</button>`;
      container.appendChild(anuncioElement);
  });
}


function templeteAnuncios()
{
  const anuncios = [
    {
      img: './Imagenes/anuncio1.jpg',
      title: 'Casa de Lujo en el Lago',
      text: 'Casa en el lago con excelente vista, acabados de lujo a un excelente precio.',
      price: 'u$s350.000',
      wc: 3,
      car: 3,
      camas: 4,
      link: 'enlace1.html'
    },
    {
      img: '/Imagenes/anuncio2.jpg',
      title: 'Casa Terminados de Lujo',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti molestiae at.',
      price: 'u$s275.000',
      wc: 3,
      car: 3,
      camas: 4,
      link: 'enlace2.html'
    },
    {
      img: '/Imagenes/anuncio3.jpg',
      title: 'Casa con Pileta',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti molestiae at.',
      price: 'u$s250.000',
      wc: 3,
      car: 3,
      camas: 4,
      link: 'enlace3.html'
    }
  ];


  const contenedor = document.getElementById('Anuncios');
  const templete = document.getElementById('anuncios-container');

  anuncios.forEach(anuncio =>
    {
      const clone = document.importNode(templete, true);
      clone.querySelector(".imagen-casa").src = anuncio.img;
      clone.querySelector(".titulo-casa").h3 = anuncio.title;
      clone.querySelector(".text-casa").textContent = anuncio.text;
      clone.querySelector(".price-casa").b = anuncio.price;

      clone.querySelector(".wc-iconos").h4 = anuncio.wc;
      clone.querySelector(".car-iconos").h4 = anuncio.car;
      clone.querySelector(".camas-iconos").h4 = anuncio.camas;

      contenedor.appendChild(clone);
    }
  )

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


// document.addEventListener('DOMContentLoaded', crearAnuncios);
