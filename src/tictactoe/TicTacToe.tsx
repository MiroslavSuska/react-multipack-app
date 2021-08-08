import { Component } from 'react';
import { checkWinner } from './winningLogic';
import Board from './Board';
import styled from 'styled-components';
import theme from '../theme';

const SQUARE_GRID_SIZE = 10;

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
type player = 'X' | 'O';

type State = {
  player: player;
  prevPlayer: player;
  board: squareType[][];
};

type Props = {};
export default class TicTacToe extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      player: 'X',
      prevPlayer: 'O',
      board: this.setGrid(),
    };
  }

  initBoard = () => {
    this.setState({
      board: this.setGrid(),
    });
  };

  setGrid = () => {
    return Array.from({ length: SQUARE_GRID_SIZE }, () =>
      Array.from({ length: SQUARE_GRID_SIZE }, () => null)
    );
  };

  handleSquareClick = (index: string) => {
    let rowID = parseInt(index[0]);
    let columnID = parseInt(index[1]);

    if (this.state.board[rowID][columnID] === null) {
      this.setState(
        prevState => ({
          player: prevState.player === 'X' ? 'O' : 'X',
          prevPlayer: prevState.prevPlayer === 'O' ? 'X' : 'O',
          board: prevState.board.map((rowItem, rID) =>
            rowID === rID
              ? rowItem.map((columnItem, cID) => (cID === columnID ? prevState.player : columnItem))
              : rowItem
          ),
        }),
        () => this.checkBoard()
      );
    }
  };

  checkBoard = () => {
    if (checkWinner(this.state.board)) {
      alert('Winner is player ' + this.state.prevPlayer);
      this.initBoard();
    }

    if (this.state.board.every(row => row.every(column => column !== null))) {
      alert('All squares are filled, lets try new game again');
      this.initBoard();
    }
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
          <Button onClick={this.initBoard}>New game</Button>
        </div>
      </DivOuter>
    );
  }
}
