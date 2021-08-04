import { Component } from 'react';
import Board from './Board';
import styled from 'styled-components';
import theme from './theme';

const DivOuter = styled.div({
  marginBottom: '50px',
});

const DivBoardWrapper = styled.div({
  padding: '20px',
});

const DivPlayer = styled.div({
  fontSize: '20px',
  fontWeight: 'bold',
  marginBottom: '20px',
});

const Button = styled.button({
  color: theme.secondaryDark,
  backgroundColor: theme.whiteColor,
  borderColor: theme.secondaryDark,
  fontSize: '1.2rem',
  fontWeight: 'bold',
  padding: '0.7rem',
  borderRadius: '5px',
  boxShadow: 'none',
  maxWidth: '8rem',
  width: '100%',
  cursor: 'pointer',
  transition: 'all .3s ease',
  borderStyle: 'solid',
  ':hover': {
    color: theme.primaryBlue,
    borderColor: theme.primaryBlue,
    transition: 'all .3s ease',
  },
});

type squareType = null | 'X' | 'O';

type State = {
  player: 'X' | 'O';
  numOfSquares: number;
  board: squareType[];
};

const NUM_OF_SQUARES = 100;

export default class TicTacToe extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      player: 'X',
      numOfSquares: 100,
      board: [],
    };
  }

  componentDidMount() {
    this.setState({
      board: Array.from({ length: NUM_OF_SQUARES }, () => null),
    });
  }

  handleSquareClick = (index: number) => {
    let playerSymbol = this.state.player;
    let board = this.state.board;

    if (board[index] === null) {
      board[index] = playerSymbol;
      playerSymbol = playerSymbol === 'X' ? 'O' : 'X';
    }

    this.setState({
      player: playerSymbol,
      board: board,
    });

    this.checkBoard();
  };

  checkBoard = () => {
    if (this.state.board.every(square => square !== null)) {
      alert('All squares are filled, lets try new game again');
      this.newGame();
    }
  };

  newGame = () => {
    let clearedBoard = this.state.board.map(e => null);

    this.setState({
      board: clearedBoard,
    });
  };

  render() {
    return (
      <DivOuter>
        <h1>Tic tac toe game</h1>
        <DivBoardWrapper>
          <Board squares={this.state.board} squareClicked={this.handleSquareClick} />
        </DivBoardWrapper>
        <div>
          <DivPlayer>Player turn: {this.state.player}</DivPlayer>
          <Button onClick={this.newGame}>New game</Button>
        </div>
      </DivOuter>
    );
  }
}
