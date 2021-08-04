import { Component } from 'react';
import Square from './Square';
import styled from 'styled-components';
import theme from './theme';

const DivBoard = styled.div({
  width: theme.boardSize,
  height: theme.boardSize,
  display: 'flex',
  flexWrap: 'wrap',
  margin: 'auto',
});

type squareType = null | 'X' | 'O';

type Props = {
  squares: squareType[];
  squareClicked: (index: number) => void;
};

export default class Board extends Component<Props, {}> {
  render() {
    const squares = this.props.squares.map((square, index) => (
      <Square symbol={square} squareClicked={this.props.squareClicked} key={index} index={index} />
    ));
    return <DivBoard>{squares}</DivBoard>;
  }
}
