const inputCity = document.querySelector('.input-city');
const inputStreet = document.querySelector('.input-street');
const inputNumber = document.querySelector('.input-number');
const inputCep = document.querySelector('.input-cep');

const boxResult = document.querySelector('.box-result');

export const Result = () => {

    const div = document.createElement('div');
    div.classList.add('box-result-container');

    const h3 = document.createElement('h3');
    h3.classList.add('box-city');
    h3.innerHTML = inputCity.value;
    div.appendChild(h3);

    const line = document.createElement('p');
    line.classList.add('box-street');
    line.innerHTML = `${inputStreet.value}, ${inputNumber.value}`;
    div.appendChild(line);

    const cep = document.createElement('p');
    cep.classList.add('box-cep');
    cep.innerHTML = inputCep.value;
    div.appendChild(cep);

    boxResult.appendChild(div);
};