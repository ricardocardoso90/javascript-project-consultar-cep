const inputCep = document.querySelector('.input-cep');
const inputStreet = document.querySelector('.input-street');
const inputCity = document.querySelector('.input-city');


// CEP´s:
// 01001000
// 75406161
// 75405360
// 75402700
// 75406054

export const ApiCep = async () => {
    const cep = inputCep.value;

    const result = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const json = await result.json();

    inputCity.value = `${json.localidade}/${json.uf}`;
    inputStreet.value = `${json.bairro} - ${json.logradouro}`;

};
