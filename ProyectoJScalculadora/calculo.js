console.log('calculadora')
function sumar(){
    const forma = document.getElementById('formulario');
    let operandoa = forma['operandoa'];
    let operandob = forma['operandob'];
    let resultado = parseInt(operandoa.value) + parseInt(operandob.value);
    if(isNaN(resultado))
        resultado=' La operacion no incluye numeros'
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
    console.log(`Resultado:${resultado}`)
}

function restar(){
    const forma = document.getElementById('formulario');
    let operandoa = forma['operandoa'];
    let operandob = forma['operandob'];
    let resultado = parseInt(operandoa.value) - parseInt(operandob.value);
    if(isNaN(resultado))
        resultado=' La operacion no incluye numeros'
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
    console.log(`Resultado:${resultado}`)
}
function dividir(){
    const forma = document.getElementById('formulario');
    let operandoa = forma['operandoa'];
    let operandob = forma['operandob'];
    let resultado = parseInt(operandoa.value) / parseInt(operandob.value);
    if(isNaN(resultado))
        resultado=' La operacion no incluye numeros'
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
    console.log(`Resultado:${resultado}`)
}
function multiplicar(){
    const forma = document.getElementById('formulario');
    let operandoa = forma['operandoa'];
    let operandob = forma['operandob'];
    let resultado = parseInt(operandoa.value) * parseInt(operandob.value);
    if(isNaN(resultado))
        resultado=' La operacion no incluye numeros'
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
    console.log(`Resultado:${resultado}`)
}