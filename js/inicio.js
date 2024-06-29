function abrirPagina(url) {
  window.open(url, '_blank');
}

const anuncios = [
  {
      img: 'imagenes/anuncio1.jpg',
      title: 'Casa de Lujo en el Lago',
      text: 'Casa en el lago con excelente vista, acabados de lujo a un excelente precio.',
      price: 'u$s350.000',
      wc: 3,
      estacionamiento: 3,
      dormitorios: 4
  },
  {
      img: 'imagenes/anuncio2.jpg',
      title: 'Casa Terminados de Lujo',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti molestiae at.',
      price: 'u$s275.000',
      wc: 3,
      estacionamiento: 3,
      dormitorios: 4
      
  },
  {
      img: 'imagenes/anuncio3.jpg',
      title: 'Casa con Pileta',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti molestiae at.',
      price: 'u$s250.000',
      wc: 3,
      estacionamiento: 3,
      dormitorios: 4
  }
];

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

document.addEventListener('DOMContentLoaded', crearAnuncios);