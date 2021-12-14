const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

let itemsRepository = '';

for (let count = 0; count < items.length; count++) {

    itemsRepository +=
    `
    <div class="box-news">
        <img src="${items[count]}" alt="">
    </div>   
    `
}

const select = document.querySelector('.select');
select.innerHTML = itemsRepository;