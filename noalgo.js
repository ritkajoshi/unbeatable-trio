function nextturn(){
    let bestscore= -Infinity;
    let move;
    for(let i=0;i<3;i++){
       for(let j=0;j<3;j++){
           if(board[i][j]==''){
            board[i][j]=ai;
            let score=maxmin();
            board[i][j]='';
            if(score>bestscore){
                bestscore=score;
                move={i,j};
            }   
           }
       }
    }
    board[move.i][move.j]=ai;
    currentPlayer=human;
}

function maxmin(){
   return 1;
}