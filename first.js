const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const presult = document.querySelector('#result');

/* .addEventListener(), especifica que evento se tiene que hacer y 
que funcion va a mandar a llamar para que ejecute el código. */
form.addEventListener('submit', sumInputsValues);

/* Para formularios con boton de tipo button */
//btn.addEventListener('click', sumInputsValues);

/* Ya con esta función poniendo en el onclick="" del Html se `podrá visualizar el evento */
/* A esta funcion le vaos a dar de parametro un evento llamado event. */
function sumInputsValues(event) {

    //console.log({event});
    event.preventDefault();

    const sumaInputs = input1.value + input2.value;
    presult.innerText = "Resultado: " + sumaInputs;
}