
let board = [
    ['', '', '','','',''],
    ['', '', '','','',''],
    ['', '', '','','',''],
    ['', '', '','','',''],
    ['', '', '','','',''],
    ['', '', '','','','']
  ];
  var canvas;
  let w;
  let h;
  let human1='X';
  let human2='O';  
  let currentPlayer;
  function X()
  {
    currentPlayer = human1;
  }
  function O()
  {
    currentPlayer = human2;
  }
  function setup() {
   canvas= createCanvas(400,400);
  //  canvas.position(0,0);
   canvas.position(windowWidth/2-200,windowHeight/2-200);   
    frameRate(30);
    w=width/6;
    h=height/6;
  }
  
  function mousePressed() {
    let i=Math.floor(mouseX /w);
    let j= Math.floor(mouseY /h);
    //if valid
    if(board[i][j]==''){
      if(currentPlayer == human1)
      {  
          board[i][j]='X';
          currentPlayer=human2;
      }
      else{
          board[i][j]='O';
          currentPlayer=human1;
      }
    } 
  }  
  
  function checkWinner(board) {
    let winner = null;      
    
    for (let i = 0; i < 6; i++) { // horizontal
      if (equals3(board[i][0], board[i][1], board[i][2],board[i][3], board[i][4], board[i][5])) {
        winner = board[i][0];
      }
    } 
    
    for (let i = 0; i < 6; i++) { // Vertical
      if (equals3(board[0][i], board[1][i], board[2][i],board[3][i], board[4][i], board[5][i])) {
        winner = board[0][i];
      }
    }  
   
    if (equals3(board[0][0], board[1][1], board[2][2],board[3][3], board[4][4], board[5][5])) {  // Diagonal
      winner = board[0][0];
    }
    if (equals3(board[5][0], board[4][1], board[3][2],board[2][3], board[1][4], board[0][5])) {  // Diagonal
      winner = board[5][0];
    }
    let openspots=0;
    for(let i=0;i<6;i++){
      for(let j=0;j<6;j++){
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
  
  function equals3(a, b, c,d,e,f) {
    return a == b && b == c && c==d&&d==e&&e==f&&a != '';
  }
  
  function draw() {
    width=400;
    height=400;
    w = width / 6;
    h = height/ 6;
    strokeWeight(4);  
    line(w, 0, w, height);
    line(w * 2, 0, w * 2, height);
    line(w * 3,0,w * 3,height);
    line(w * 4,0,w * 4,height);
    line(w * 5,0,w * 5,height);
    line(0, h, width, h);
    line(0, h * 2, width, h * 2);
    line(0, h * 3, width, h * 3);
    line(0, h * 4, width, h * 4);
    line(0, h * 5, width, h * 5);
  
    for (let j = 0; j < 6; j++) {
      for (let i = 0; i < 6; i++) {
        let x = w * i + w / 2;
        let y = h * j + h / 2;
        let spot = board[i][j];
        textSize(32);
        let r = w / 8;
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
      if(currentPlayer==human1){
        currentPlayer=human1;
      }else{
        currentPlayer=human2;
      }
    }
  }
  