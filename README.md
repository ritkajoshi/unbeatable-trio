# unbeatable-trio
Description of game:
This is a two player game which offers one player as an AI agent.
How to play the game :
Tic tac toe is essentially a M X N board game where the winner gets K in a row. Our project supports 3x3,4x4 and 6x6 boards. In the 3x3 board, the winner gets either 3 Xs or Os horizontally,vertically or diagonally. Similarly in 4x4, the winner gets 4 Xs or Os horizontally,vertically or digonally and in 6x6, the winner gets 6 Xs or Os horizontally,vertically or digonally. 

The game offers 4 game modes which are as follows:

1)HUMAN VS AI - Human player can play with an AI agent.
2)HUMAN VS HUMAN 3X3 - 2 Human players play against each other in a 3X3 board.
3)HUMAN VS HUMAN 4X4 - 2 Human players play against each other in a 4X4 board.
4)HUMAN VS HUMAN 6X6 - 2 Human players play against each other in a 6X6 board.

The algorithms used in the game are:
In the HUMAN VS AI part of the game, we have used the alpha beta pruning so that the minimax algorithm can be made more efficient.
The algorithm evaluates the moves that lead to a terminal state based on the player's turn. It will choose the move with maximum score when it is the AI’s turn and choose the move with the minimum score when it is the human player’s turn. Using this strategy, minimax avoids losing to the human player.
In the other components of the game which are two human player game , no algorithms were required as they are human specific games.

