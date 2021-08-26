import { Component } from 'react';
import { theme } from '../theme';
import Square from './Square';
import styled from 'styled-components';

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

const DivBoard = styled.div({
  width: '500px',
  height: '500px',
  display: 'flex',
  flexWrap: 'wrap',
  margin: 'auto',
  '@media all and (max-width: 700px)': {
    width: '400px',
    height: '400px',
  },
});
