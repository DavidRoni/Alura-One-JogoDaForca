var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');
var inicioLinha = 400;
var fimLinha = 450;
var espaco = 0;

function desenhaLinha(palavra){
    for(i = 0; i < palavra.length; i++){
      pincel.beginPath();
      pincel.moveTo(inicioLinha + espaco , 650);
      pincel.lineTo(fimLinha + espaco, 650);
      pincel.lineWidth = 2;
      pincel.stroke();
      espaco = espaco + 80;
    } 
}

var inicioLinhaLetras = 408;
var limpaTela = 400;

function adicionarElementoNaTela(palavraCerta){
    if(!letrasCertas.includes(palavraCerta) && palavraFinal.includes(palavraCerta)){
        if(palavraCerta == palavraFinal[0]){
          pincel.font = '45px serif';
          pincel.strokeText(palavraCerta.toUpperCase(), inicioLinhaLetras, 640);
          letrasCertas.push(palavraCerta);
        }if(palavraCerta == palavraFinal[1]){
          pincel.font = '45px serif';
          pincel.strokeText(palavraCerta.toUpperCase(), inicioLinhaLetras + 80, 640);
          letrasCertas.push(palavraCerta);
        }if(palavraCerta == palavraFinal[2]){
          pincel.font = '45px serif';
          pincel.strokeText(palavraCerta.toUpperCase(), inicioLinhaLetras + 160, 640);
          letrasCertas.push(palavraCerta);
        }if(palavraCerta == palavraFinal[3]){
          pincel.font = '45px serif';
          pincel.strokeText(palavraCerta.toUpperCase(), inicioLinhaLetras + 240, 640);
          letrasCertas.push(palavraCerta);
        }if(palavraCerta == palavraFinal[4]){
          pincel.font = '45px serif';
          pincel.strokeText(palavraCerta.toUpperCase(), inicioLinhaLetras + 320, 640);
          letrasCertas.push(palavraCerta);
        }if(palavraCerta == palavraFinal[5]){
          pincel.font = '45px serif';
          pincel.strokeText(palavraCerta.toUpperCase(), inicioLinhaLetras + 400, 640);
          letrasCertas.push(palavraCerta);
        }if(palavraCerta == palavraFinal[6]){
          pincel.font = '45px serif';
          pincel.strokeText(palavraCerta.toUpperCase(), inicioLinhaLetras + 480, 640);
          letrasCertas.push(palavraCerta);
        }if(palavraCerta == palavraFinal[7]){
          pincel.font = '45px serif';
          pincel.strokeText(palavraCerta.toUpperCase(), inicioLinhaLetras + 560, 640);
          letrasCertas.push(palavraCerta);
        }if(palavraCerta == palavraFinal[8]){
          pincel.font = '45px serif';
          pincel.strokeText(palavraCerta.toUpperCase(), inicioLinhaLetras + 640, 640);
          letrasCertas.push(palavraCerta);
        }if(palavraCerta == palavraFinal[9]){
          pincel.font = '45px serif';
          pincel.strokeText(palavraCerta.toUpperCase(), inicioLinhaLetras + 720, 640);
          letrasCertas.push(palavraCerta);
        }if(palavraCerta == palavraFinal[10]){
          pincel.font = '45px serif';
          pincel.strokeText(palavraCerta.toUpperCase(), inicioLinhaLetras + 800, 640);
          letrasCertas.push(palavraCerta);
        }if(palavraFinal.length == letrasCertas.length){
          mensagemLetraRepetida("Você ganhou!");
          document.onkeydown = 'stop';
        }   
    }
}

var distanciaLetras = 350;
var yDistanciaLetras = 200;

function desenhaLetraRepetida(letraCerta, distanciaLetras){
  pincel.fillStyle = 'red';
  pincel.font = '35px serif'
  pincel.fillText("Letras Erradas:", 500, 150);

  pincel.font = '35px serif'
  pincel.strokeText(letraCerta.toUpperCase(), distanciaLetras, yDistanciaLetras);

}

function mensagemLetraRepetida(mensagem,){
  pincel.fillStyle = 'saddleBrown';
  pincel.font = '35px serif'
  pincel.clearRect(400, 300, 750 , 200);
  pincel.fillText(mensagem, 500, 400);
}
function limparTela(){
  pincel.clearRect(300, 100, 1200, 745);
  pincel.clearRect(140, 260, 150, 350);
  

}
