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

function cardsBlog() {
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







// `<div class="row g-0">
//             <div class="col-md-4">
//             <img class="img-fluid rounded-start" src="${card.img}" alt="Anuncio" />
//             </div>
//             <div class="text-content col-md-8">
//                 <h3  class="">${card.title}</h3>
//                 <p>Escrito: ${card.escrito} por: ${card.por}<p>
//                 <p class="">${card.text}</p>
//             </div>
//         </div>`;



