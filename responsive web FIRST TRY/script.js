// const hamburgerIcon = document.querySelector('#maki');
// const hamburgerLinks = document.querySelector('.hamburger-menu');

// hamburgerIcon.addEventListener('click', ()=> {
//     if(hamburgerIcon.classList.contains('active')){
//         hamburgerIcon.style.transform = 'rotate (-180 deg)';
//         hamburgerLinks.classList.remove('active');
//     }else {
//         hamburgerIcon.style.transform = 'rotate (180 deg)';
//         hamburgerLinks.classList.add('active'); 
//     }
    

// })
const hamburgerIcon = document.querySelector('#maki');
const hamburgerLinks = document.querySelector('.hamburger-menu');

hamburgerIcon.addEventListener('click', () => {
    const isActive = hamburgerLinks.classList.contains('active');

    hamburgerIcon.style.transform = isActive ? 'rotate(0deg)' : 'rotate(180deg)';
    hamburgerLinks.classList.toggle('active');
});

const miaImages = [
    {
        src : "images/mia1.jpg",
        alt : "Mia is busy right now",
        title : "Mia playing",
        author: "Mia + Kapucino"
    },
    {
        src : "images/mia2.avif",
        alt : "Mia is busy right now",
        title : "Mia playing",
        author: "Mia + Kapucino"
    },
    {
        src : "images/mia5.jpg",
        alt : "Mia is busy right now",
        title : "Mia playing",
        author: "Mia + Kapucino"
    },
    {
        src : "images/mia3.jpg",
        alt : "Mia is busy right now",
        title : "Mia playing",
        author: "Mia + Kapucino"
    },
    {
        src : "images/mia4.jpeg",
        alt : "Mia is busy right now",
        title : "Mia playing",
        author: "Mia + Kapucino"
    },
    {
        src : "images/mia1.jpg",
        alt : "Mia is busy right now",
        title : "Mia playing",
        author: "Mia + Kapucino"
    },
    {
        src : "images/mia2.avif",
        alt : "Mia is busy right now",
        title : "Mia playing",
        author: "Mia + Kapucino"
    },
    {
        src : "images/mia5.jpg",
        alt : "Mia is busy right now",
        title : "Mia playing",
        author: "Mia + Kapucino"
    },
    {
        src : "images/mia3.jpg",
        alt : "Mia is busy right now",
        title : "Mia playing",
        author: "Mia + Kapucino"
    },
    {
        src : "images/mia4.jpeg",
        alt : "Mia is busy right now",
        title : "Mia playing",
        author: "Mia + Kapucino"
    },
    {
        src : "images/mia1.jpg",
        alt : "Mia is busy right now",
        title : "Mia playing",
        author: "Mia + Kapucino"
    },
    {
        src : "images/mia2.avif",
        alt : "Mia is busy right now",
        title : "Mia playing",
        author: "Mia + Kapucino"
    },
    {
        src : "images/mia5.jpg",
        alt : "Mia is busy right now",
        title : "Mia playing",
        author: "Mia + Kapucino"
    },
    {
        src : "images/mia3.jpg",
        alt : "Mia is busy right now",
        title : "Mia playing",
        author: "Mia + Kapucino"
    },
    {
        src : "images/mia4.jpeg",
        alt : "Mia is busy right now",
        title : "Mia playing",
        author: "Mia + Kapucino"
    },
    {
        src : "images/mia1.jpg",
        alt : "Mia is busy right now",
        title : "Mia playing",
        author: "Mia + Kapucino"
    },
    {
        src : "images/mia2.avif",
        alt : "Mia is busy right now",
        title : "Mia playing",
        author: "Mia + Kapucino"
    },
    {
        src : "images/mia5.jpg",
        alt : "Mia is busy right now",
        title : "Mia playing",
        author: "Mia + Kapucino"
    },
    {
        src : "images/mia3.jpg",
        alt : "Mia is busy right now",
        title : "Mia playing",
        author: "Mia + Kapucino"
    },
    {
        src : "images/mia4.jpeg",
        alt : "Mia is busy right now",
        title : "Mia playing",
        author: "Mia + Kapucino"
    },
    {
        src : "images/mia1.jpg",
        alt : "Mia is busy right now",
        title : "Mia playing",
        author: "Mia + Kapucino"
    },
    {
        src : "images/mia2.avif",
        alt : "Mia is busy right now",
        title : "Mia playing",
        author: "Mia + Kapucino"
    },
    {
        src : "images/mia5.jpg",
        alt : "Mia is busy right now",
        title : "Mia playing",
        author: "Mia + Kapucino"
    },
    {
        src : "images/mia3.jpg",
        alt : "Mia is busy right now",
        title : "Mia playing",
        author: "Mia + Kapucino"
    },
    {
        src : "images/mia4.jpeg",
        alt : "Mia is busy right now",
        title : "Mia playing",
        author: "Mia + Kapucino"
    },
    {
        src : "images/mia1.jpg",
        alt : "Mia is busy right now",
        title : "Mia playing",
        author: "Mia + Kapucino"
    },
    {
        src : "images/mia2.avif",
        alt : "Mia is busy right now",
        title : "Mia playing",
        author: "Mia + Kapucino"
    },
    {
        src : "images/mia5.jpg",
        alt : "Mia is busy right now",
        title : "Mia playing",
        author: "Mia + Kapucino"
    },
    {
        src : "images/mia3.jpg",
        alt : "Mia is busy right now",
        title : "Mia playing",
        author: "Mia + Kapucino"
    },
    {
        src : "images/mia4.jpeg",
        alt : "Mia is busy right now",
        title : "Mia playing",
        author: "Mia + Kapucino"
    },
]

const cardContainer = document.querySelector('.card-container');

miaImages.forEach((image) => {
    const displaying = `
        <div class="try">
          <div class="mia-img-container">
            <img
              src="${image.src}"
              alt="${image.alt}" />
          </div>
          <div class="myText">
            <h1>KHALIFAAA</h1>
            <p>26.06.2023</p>
          </div>
          <div class="card-title">${image.title}</div>
          <div class="card-author">${image.author}</div>
        </div>
          `
    cardContainer.innerHTML += displaying;
})