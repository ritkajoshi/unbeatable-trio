function nextturn(){
    
    let bestscore= -Infinity;
    let move;
    for(let i=0;i<3;i++)
    {
       for(let j=0;j<3;j++)
        {
           //is spot available
           if(board[i][j]=='')
           {
               board[i][j]=ai;
               let score = maxmin(board,depth,false);
               board[i][j]='';
               if(score>bestscore)
               {
                   bestscore=score;
                   move={i,j};
               }
           }
       }
    }
    board[move.i][move.j]=ai;
    currentPlayer=human;
} 

function maxmin(board,depth,ismaximising)
{

    let result = checkWinner(board);
    if(result != null)
    {
        if(result=='X')
            return 1;
        if(result=='O')
            return -1;  
        if(result=='tie')
            return 0;
    }
    let bestscore;
    if(ismaximising==true){ //i.e human
        bestscore= -Infinity;
        for(let i=0;i<3;i++){
            for(let j=0;j<3;j++){

                if(board[i][j]=='')
                {
                    board[i][j]=ai;
                    let score=maxmin(board,depth-1,false);
                    board[i][j]='';
                    if(score>bestscore){
                        bestscore=score;
                    }
                }
            }
        }
        
    }
    else //isMaximising == false i.e minimising i.e AI
    {
        bestscore = Infinity;
        for(let i=0;i<3;i++){
            for(let j=0;j<3;j++){
                if(board[i][j]=='')
                {
                    board[i][j]=human;
                    let score=maxmin(board,depth-1,true);
                    board[i][j]='';
                    if(score<bestscore){
                        bestscore=score;
                    }
                }
            }
        }
    }
    return bestscore;
}