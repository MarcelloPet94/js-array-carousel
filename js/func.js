
const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];
// immagine grande
let mainImgRepository = '';

for (let count = 0; count < items.length; count++) {
    mainImgRepository +=
    `
    <img src="${items[count]}" alt="">   
    `
}
// immagini slider destra
const mainContent = document.querySelector('.mainContent');
mainContent.innerHTML = mainImgRepository;

let itemsRepository = '';

for (let count = 0; count < items.length; count++) {


    itemsRepository +=
    `
    <div class="box-news">
        <img src="${items[count]}" alt="">
    </div>   
    `

}
// freccie
const select = document.querySelector('.select');
select.innerHTML = itemsRepository;

const arrow = document.querySelector('.arrow');

arrow.addEventListener ('click', function() {
    console.log("slide top");
})