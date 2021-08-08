import { Component } from 'react';
import styled from 'styled-components';
import theme from './theme';

const DivSquare = styled.div({
  width: theme.squareSize,
  height: theme.squareSize,
  lineHeight: theme.squareSize,
  backgroundColor: theme.whiteColor,
  color: theme.primaryBlue,
  textAlign: 'center',
  boxSizing: 'border-box',
  border: '2px solid black',
  fontSize: '18px',
  fontWeight: 'bold',
  cursor: 'pointer',
});

type Props = {
  symbol: null | 'X' | 'O';
  index: string;
  squareClicked: (index: string) => void;
};

export default class Square extends Component<Props, {}> {
  handleClick = () => {
    this.props.squareClicked(this.props.index);
  };

  render() {
    return <DivSquare onClick={this.handleClick}>{this.props.symbol}</DivSquare>;
  }
}
