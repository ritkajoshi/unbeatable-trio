function nextturn(){
    //ai to make its turn
    let bestscore= -Infinity;
    let move;
    for(let i=0;i<3;i++){
       for(let j=0;j<3;j++){
           //is spot available
           if(board[i][j]==''){
               board[i][j]=ai;
               let score =maxmin(board,0,false);
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

// let scores= {
//     X:1,
//     O:-1,
//     tie:0
// };

function maxmin(board,depth,ismaximising){
     let result =checkWinner(board);
    if(result != null){
     if(result=='X'){
         return 1;
     }
     if(result=='O'){
         return -1;
     }   
     if(result=='tie'){
        return 0;
     } 
    }
    else{  
    if(ismaximising==true){
        let bestscore= -Infinity;
        for(let i=0;i<3;i++){
            for(let j=0;j<3;j++){
                ///is the spot avalable?
             if(board[i][j]=='')
              board[i][j]=ai;
              let score=maxmin(board,depth+1,false);
              board[i][j]='';
              if(score>bestscore){
                  bestscore=score;
              }
            }
        }
        return bestscore;
    }else{
        let bestscore= Infinity;
        for(let i=0;i<3;i++){
            for(let j=0;j<3;j++){
                ///is the spot avalable?
             if(board[i][j]=='')
              board[i][j]=human;
              let score=maxmin(board,depth+1,true);
              board[i][j]='';
              if(score<bestscore){
                  bestscore=score;
              }
            }
        }
        return bestscore; 
    }
}
return 1;
}