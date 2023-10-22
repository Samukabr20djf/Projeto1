const form = document.getElementById('form-agenda');
const NomeContato = [];
const NumeroTelefone = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    AdicionaLinha();
    atualizaTabela();

})

function AdicionaLinha() {

    const InputNomeContato = document.getElementById('nome-contato');
    const inputNumeroTelefone = document.getElementById('numero-telefone');

    if(NumeroTelefone.includes(inputNumeroTelefone.value)){
    
    alert(`o numero ${inputNumeroTelefone.value} já foi adicionado`);

    } else {
    
    NomeContato.push(InputNomeContato.value);
    NumeroTelefone.push(inputNumeroTelefone.value);

    let linha = '<tr>';
    linha += `<td> ${InputNomeContato.value}`;
    linha += `<td> ${inputNumeroTelefone.value}`;
    linha += '</tr>';

    linhas += linha;

    }

    InputNomeContato.value = '';
    inputNumeroTelefone.value = '';

}

function atualizaTabela(){

    const CorpoTabela = document.querySelector('tbody');
    CorpoTabela.innerHTML = linhas;
}
