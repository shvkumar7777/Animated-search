const inputBut = document.querySelector('.input');
const searchBut = document.querySelector('.button');
const searchContainer = document.querySelector('.search');

searchBut.addEventListener('click', () => {
    searchContainer.classList.toggle('active');
    inputBut.focus();
    // searchContainer.classList.add('active');
    // if (searchContainer.classList.contains('active')) {
    // }

})