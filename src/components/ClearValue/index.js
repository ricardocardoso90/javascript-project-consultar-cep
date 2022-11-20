const inputCep = document.querySelector('.input-cep');
const inputStreet = document.querySelector('.input-street');
const inputCity = document.querySelector('.input-city');
const inputNumber = document.querySelector('.input-number');


export const ClearValue = () => {
    inputCep.value = '';
    inputStreet.value = '';
    inputCity.value = '';
    inputNumber.value = '';
};