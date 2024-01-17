const openModalButton = document.querySelector('.header__button');
const closeModalButton = document.querySelector('.modal__closed');
const modal = document.querySelector('.modal');


openModalButton.addEventListener('click',()=>{
	modal.classList.add('modal--open');
})
closeModalButton.addEventListener('click',()=>{
	modal.classList.remove('modal--open');
})
