import { Component } from 'react';
import { checkWinner } from './winningLogic';
import Board from './Board';
import styled from 'styled-components';
import theme from './theme';

/* GRID INFO 
  Grid will be GRID_SIZE x GRID_SIZE
*/
const GRID_SIZE = 10;

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
export default class TicTacToe extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      player: 'X',
      prevPlayer: 'O',
      board: Array.from({ length: GRID_SIZE }, () => Array.from({ length: GRID_SIZE }, () => null)),
    };
  }

  initBoard = () => {
    this.setState({
      board: Array.from({ length: GRID_SIZE }, () => Array.from({ length: GRID_SIZE }, () => null)),
    });
  };

  componentDidUpdate() {
    setTimeout(this.checkBoard, 1000);
  }

  handleSquareClick = (index: string) => {
    let copyBoard = [...this.state.board];
    let rowID = parseInt(index[0]);
    let columnID = parseInt(index[1]);

    if (copyBoard[rowID][columnID] === null) {
      this.setState(prevState => ({
        player: prevState.player === 'X' ? 'O' : 'X',
        prevPlayer: prevState.prevPlayer === 'O' ? 'X' : 'O',
        board: prevState.board.map((rowItem, rID) =>
          rowItem.map((columnItem, cID) =>
            rID === rowID && cID === columnID ? prevState.player : columnItem
          )
        ),
      }));
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
