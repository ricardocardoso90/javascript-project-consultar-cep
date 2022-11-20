import { ApiCep } from "./components/ApiCep/index.js";
import { Result } from "./components/Result/index.js";
import { ClearValue } from "./components/ClearValue/index.js";

const inputCep = document.querySelector('.input-cep');
const inputNumber = document.querySelector('.input-number');

const handleSubmit = document.querySelector('.handle-submit');
const handleClear = document.querySelector('.handle-clear');

window.addEventListener('change', (e) => {
    e.preventDefault();

    if (inputCep.value && inputNumber.value) {
        ApiCep();
    };
});

handleSubmit.addEventListener('click', (e) => {
    e.preventDefault();

    if (inputCep.value === '') {
        alert('Preencha os campos meu jovem!!');
    } else if (inputNumber.value === '') {
        alert('Preencha o campo do número da residência meu jovem!!');
    } else {
        Result();
        ClearValue();
    };

});

handleClear.addEventListener('click', ClearValue);