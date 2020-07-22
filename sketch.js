
let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  var canvas;
  let w;
  let h;
  let ai='X';
  let human='O';  
  let currentPlayer;
  let depth; /////////////////////////////////////////////
  function humanPlayer(){
    currentPlayer = human;
  }
  function computerPlayer(){
    currentPlayer = ai;
  }
  function dumb(){
    depth = 1
  }
  function intelligent()
  {
      depth = -1;
  }
  // function windowResized(){
  //   resizeCanvas(windowWidth,windowHeight);
  // }
  function setup() {
   canvas= createCanvas(400,400);
  //  canvas.position(0,0);
   canvas.position(windowWidth/2-200,windowHeight/2-100);   
    frameRate(30);
    w=width/3;
    h=height/3;
  }

  function mousePressed() {
    if(currentPlayer==human){  
      //human turn
      let i=Math.floor(mouseX /w);
      let j= Math.floor(mouseY /h);
      //if valid
      if(board[i][j]==''){
        board[i][j]='O';
        currentPlayer=ai;
        nextturn();
      }
    }
  }  
 
  function checkWinner(board) {
    let winner = null;      
    
    for (let i = 0; i < 3; i++) { // horizontal
      if (equals3(board[i][0], board[i][1], board[i][2])) {
        winner = board[i][0];
      }
    } 
    
    for (let i = 0; i < 3; i++) { // Vertical
      if (equals3(board[0][i], board[1][i], board[2][i])) {
        winner = board[0][i];
      }
    }  
   
    if (equals3(board[0][0], board[1][1], board[2][2])) {  // Diagonal
      winner = board[0][0];
    }
    if (equals3(board[2][0], board[1][1], board[0][2])) {  // Diagonal
      winner = board[2][0];
    }
    let openspots=0;
    for(let i=0;i<3;i++){
      for(let j=0;j<3;j++){
        if(board[i][j]==''){
          openspots++;
        }
      }
    }      
    if (winner == null && openspots==0) 
      return 'tie';
    else 
      return winner;
  }

  function equals3(a, b, c) {
    return a == b && b == c && a != '';
  }
  
  function draw() {
    width=400;
    height=400;
    w = width / 3;
    h = height/ 3;
    strokeWeight(4);  
    line(w, 0, w, height);
    line(w * 2, 0, w * 2, height);
    line(0, h, width, h);
    line(0, h * 2, width, h * 2);
  
    for (let j = 0; j < 3; j++) {
      for (let i = 0; i < 3; i++) {
        let x = w * i + w / 2;
        let y = h * j + h / 2;
        let spot = board[i][j];
        textSize(32);
        let r = w / 4;
        if (spot == 'O') {
          noFill();
          ellipse(x, y, r * 2);
        } else if (spot == 'X') {
          line(x - r, y - r, x + r, y + r);
          line(x + r, y - r, x - r, y + r);
        }
      }
    }  
    let result = checkWinner(board);
    if (result != null) {
      noLoop();
      let resultP = createP('');
      resultP.style('font-size', '32pt');
      if (result == 'tie') {
        resultP.html('Tie!');
      } else {
        resultP.html(`${result} wins!`);
      }
    }else {
      if(currentPlayer==ai){
      nextturn();
      }else{
        currentPlayer = human;
      }
    }
  }
  