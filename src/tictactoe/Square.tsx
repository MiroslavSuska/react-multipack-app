import { Component } from 'react';
import { theme } from '../theme';
import styled from 'styled-components';

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

const DivSquare = styled.div({
  width: '50px',
  height: '50px',
  lineHeight: '50px',
  backgroundColor: theme.whiteColor,
  color: theme.primaryBlue,
  textAlign: 'center',
  boxSizing: 'border-box',
  border: `2px solid ${theme.blackColor}`,
  fontSize: '18px',
  fontWeight: 'bold',
  cursor: 'pointer',
  '@media all and (max-width: 700px)': {
    width: '40px',
    height: '40px',
    lineHeight: '40px',
  },
});
