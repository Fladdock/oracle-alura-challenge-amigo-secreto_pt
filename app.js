//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
// Função para adicionar um nome à lista
function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();
    if (nome === "") {
        alert("Por favor, insira um nome válido!");
        return;
    }
    if (amigos.includes(nome)) {
        alert("Este nome já foi adicionado!");
        return;
    }
       amigos.push(nome);
    input.value= "";
    atualizarLista();
    }
// Função para atualizar a lista na interface
function atualizarLista() {
    let listaAmigos = document.getElementById("listaAmigos"); // busca informações do HTML com o getElementById
    listaAmigos.innerHTML = ""; //limpar a lista de amigos
    for (i = 0; i < amigos.length; i++) {
        let item = document.createElement("li"); //cria um elemento do HTML com createelement
        item.textContent = amigos[i]; // agregar cada indíce incluído 
        listaAmigos.appendChild(item);
}
};    
// Função para sortear um amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista está vazia! Adicione amigos antes de sortear.");
        return;
    }
    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML =  sorteado;
    let limparLista = document.getElementById("listaAmigos");
    limparLista.innerHTML = ""; //limpar lista
    amigos = []; //chamar novamente para fazer outro sorteio
}


