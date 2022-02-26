var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

function desenhaForca(){ 
  pincel.fillStyle = 'saddleBrown';
  pincel.fillRect(50, 150, 65, 500);

  pincel.fillStyle = 'saddleBrown';
  pincel.fillRect(30, 170, 200, 40);



  pincel.fillStyle = 'saddleBrown';
  pincel.beginPath();
  pincel.moveTo(115, 210);
  pincel.lineTo(115, 290);
  pincel.lineTo(170, 210);
  pincel.fill();

  pincel.fillStyle = 'white';
  pincel.beginPath();
  pincel.moveTo(115, 210);
  pincel.lineTo(115, 265);
  pincel.lineTo(150, 210);
  pincel.fill();

  pincel.fillStyle = 'black';
  pincel.fillRect(210, 210, 5, 50);
}


function desenhaCabeca(){
  pincel.fillStyle = "black"
  pincel.beginPath();
  pincel.arc(213, 300, 40, 0, 2 * Math.PI);
  pincel.fill();

  pincel.fillStyle = "white"
  pincel.beginPath();
  pincel.arc(213, 300, 34, 0, 2 * Math.PI);
  pincel.fill();
}
function desenhaCorpo(){
  pincel.fillStyle = "black";
  pincel.fillRect(213, 340, 5, 175);

}

function desenhaMaoEsquerda(){
  pincel.fillStyle = "black";
  pincel.fillRect(213, 360, -70, 5);
}

function desenhaMaoDireita(){
  pincel.fillStyle = "black";
  pincel.fillRect(213, 360, 70, 5);
}

function desenhaPernaDireita(){
  pincel.fillStyle='black';
  pincel.beginPath();
  pincel.moveTo(214, 510);
  pincel.lineTo(214, 550);
  pincel.lineTo(275, 550);
  pincel.fill();

  pincel.fillStyle='white';
  pincel.beginPath();
  pincel.moveTo(214, 515);
  pincel.lineTo(214, 550);
  pincel.lineTo(265, 550);
  pincel.fill();
}

function desenhaPernaEsquerda(){
  pincel.fillStyle='black';
  pincel.beginPath();
  pincel.moveTo(216, 510);
  pincel.lineTo(216, 550);
  pincel.lineTo(176, 550);
  pincel.fill();

  pincel.fillStyle='white';
  pincel.beginPath();
  pincel.moveTo(216, 515);
  pincel.lineTo(216, 550);
  pincel.lineTo(185, 550);
  pincel.fill();
}