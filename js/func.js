
const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

// immagine grande
let mainImgRepository = '';

for (let count = 0; count < items.length; count++) {
    mainImgRepository +=
    `
    <div class="box boxImg-${count}">
        <img src="${items[count]}" alt="">  
    </div>    
    <div class="textBox">
        <h2>Paese</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div> 
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