import { Component } from 'react';
import Square from './Square';
import styled from 'styled-components';
import theme from '../theme';

const DivBoard = styled.div({
  width: theme.boardSize,
  height: theme.boardSize,
  display: 'flex',
  flexWrap: 'wrap',
  margin: 'auto',
});

type squareType = null | 'X' | 'O';

type Props = {
  squares: squareType[][];
  squareClicked: (index: string) => void;
};

export default class Board extends Component<Props, {}> {
  render() {
    return (
      <DivBoard>
        {this.props.squares.map((row, rIndex) =>
          row.map((column, cIndex) => (
            <Square
              symbol={column}
              squareClicked={this.props.squareClicked}
              key={rIndex.toString() + cIndex.toString()}
              index={rIndex.toString() + cIndex.toString()}
            />
          ))
        )}
      </DivBoard>
    );
  }
}
