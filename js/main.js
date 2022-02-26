var iniciarBotao = document.querySelector(".iniciar-botao");
var paragrafo = document.querySelector(".paragrafo")
var adicionarPalavra = document.querySelector(".adiciona-texto");
var adicionarPalavraBotao = document.querySelector(".adicionar");
var iniciarJogo = document.querySelector(".iniciar-botao");
var reiniciarJogo = document.querySelector(".reiniciar-jogo");
var divReiniciar = document.querySelector(".reiniciar");
var divAdicionar = document.querySelector("header");

reiniciarJogo.style.display = 'none';
divReiniciar.style.display = 'none';

var i = 0;
var palavras = ['amor', 'carro', 'casa', 'gato'];
var iniciar = false;

iniciarBotao.addEventListener("click", function click(e) {
  i++
  iniciar = true;
  desenhaLinha(palavraFinal);
  mensagemLetraRepetida("Bom jogo! Digite uma letra no teclado.")
  desenhaForca();
  adicionarPalavra.style.display = 'none';
  adicionarPalavraBotao.style.display = 'none';
  this.style.display = 'none';
  divAdicionar.style.display = 'none';
  paragrafo.style.display = 'none';
  divReiniciar.style.display = '';
  reiniciarJogo.style.display = '';
  iniciarBotao.removeEventListener('click', click);
});

adicionarPalavraBotao.addEventListener("click", function novaPalavra(){
  var adicionarNovaPalavra = adicionarPalavra.value;
  palavras.push(adicionarNovaPalavra);
  adicionarPalavra.value = '';
})
  

function randomizarPalavra(palavras){
  var aleatorio = Math.floor(Math.random()* palavras.length);
  var palavraAleatoria = palavras[aleatorio];
  return palavraAleatoria.split('');
}

var palavraFinal = randomizarPalavra(palavras);

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var letras = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var letrasErradas = [];
var letrasCertas = [];

function validacao(evento){
  if(iniciar == true){
    mensagemLetraRepetida(" ");

    for(e = 0; e < numeros.length; e++){
      if(evento.key == numeros[e] ){
        alert("Digite Somente Letras");
        }
      }if(palavraFinal.includes(evento.key)){
      adicionarElementoNaTela(evento.key);
      }
    for(i = 0; i < letras.length; i++){
      if(distanciaLetras > 1200){
        distanciaLetras = 350;
        yDistanciaLetras = yDistanciaLetras + 50;
      }else{
        if(evento.key == letras[i] && !palavraFinal.includes(evento.key)){
          if(letrasErradas.indexOf(evento.key) === -1){
            letrasErradas.push(evento.key);
            desenhaLetraRepetida(evento.key, distanciaLetras);
            distanciaLetras = distanciaLetras + 50;
            desenhaPersonagem(evento.key);
            }else{
              mensagemLetraRepetida(`Você já digitou a letra: ${evento.key.toUpperCase()}`);
            }
          }
        }
      }
  }
}
document.onkeydown = validacao;

function desenhaPersonagem(palavraFinal){
  if(letrasErradas.includes(palavraFinal)){
    if(letrasErradas.length == 1){
      desenhaCabeca();
    }if(letrasErradas.length == 2){
      desenhaCorpo();
    }if(letrasErradas.length == 3){
      desenhaMaoDireita();
    }if(letrasErradas.length == 4){
      desenhaMaoEsquerda();
    }if(letrasErradas.length == 5){
      desenhaPernaDireita();
    }if(letrasErradas.length == 6){
      desenhaPernaEsquerda();
    } if(letrasErradas.length == 6){
      desenhaPernaEsquerda();
      mensagemLetraRepetida("Você perdeu!")
      document.onkeydown = 'stop'
    }
  }
}
function reset(){
  letrasErradas =[];
  letrasCertas = [];
  distanciaLetras = 350;
  inicioLinha = 400;
  fimLinha = 450;
  espaco = 0;
  document.onkeydown = validacao;
  palavraFinal = randomizarPalavra(palavras);
  limparTela();
  console.log(palavraFinal);
  desenhaLinha(palavraFinal);
  mensagemLetraRepetida("Bom jogo! Digite uma letra no teclado.")
}


