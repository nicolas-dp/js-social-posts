/* Descrizione
Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:


//**** MILESTONE 1
Creiamo il nostro array di oggetti che rappresentano ciascun post. Ogni 
post dovrà avere le informazioni necessarie per stampare la relativa card:
id del post, 
numero progressivo da 1 a n
nome autore,
foto autore,
data in formato americano (mm-gg-yyyy),
testo del post,
immagine (non tutti i post devono avere una immagine),
numero di likes.
Non è necessario creare date casuali
Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>) */


//Creiamo il nostro array di oggetti che rappresentano ciascun post.
const posts = [
    {
        id_post: "first_post",
        n: 1,
        nome_autore: "Phil Mangione",
        image_avatar: `<img src="https://picsum.photos/70">`,
        data: "25/6/2021",
        paragraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
        image_post: `<img src=https://picsum.photos/id/237/200/300>`,
        n_of_like: 80,
    },

    {
        id_post: "second_post",
        n: 2,
        nome_autore: "Sofia Perlari",
        image_avatar: `<img src="https://picsum.photos/70">`,
        data: "3/9/2021",
        paragraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
        image_post: `<img src=https://picsum.photos/id/237/200/300>`,
        n_of_like: 120,
    },
]


/* MILESTONE 2
Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed. */

const elementoDom = document.querySelector(".card")



posts.forEach(element => {
    const createMarkup = `<div class="card_sup">
        ${element.image_avatar}
        <h5>${element.nome_autore}</h5>
        <em>${element.data}</em>
    </div>

    <div class="card_body">
        <p>${element.data}</p>
        ${element.image_post}
        <div class="like">Mi Piace</div>
        <div class="number_like">Piace a ${element.n_of_like} persone</div>
    </div>`
    elementoDom.insertAdjacentHTML("beforeend", createMarkup)

    console.log(createMarkup)

})