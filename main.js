const form = document.getElementById('form-valido');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const campoA = document.getElementById('campo-a');
    const campoB = document.getElementById('campo-b');

    if(campoA.value < campoB.value)
    {
        alert('o campo B e maior');
    }
    else if(campoA.value == campoB.value)
    {
        alert('os campos sao iguais');
    }
    else 
    {
        alert('o campo a A e maior');
    }

})