const form = document.getElementById('form-valido');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const campoA = document.getElementById('campo-a');
    const campoB = document.getElementById('campo-b');

    const valorA = parseFloat(campoA.value);
    const valorB = parseFloat(campoB.value);

    if(valorA < valorB)
    {
        alert('o campo B e maior');
    }
    else if(valorA === valorB)
    {
        alert('os campos sao iguais');
    }
    else 
    {
        alert('o campo a A e maior');
    }

})
