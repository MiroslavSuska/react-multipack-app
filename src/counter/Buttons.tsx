import { Component } from 'react';
import styled from 'styled-components';

type Props = {
  increment: () => void;
  decrement: () => void;
};

const ButtonStyled = styled.button({
  color: '#1d1e1f',
  fontSize: '1.2rem',
  fontWeight: 'bold',
  padding: '0.7rem',
  backgroundColor: 'white',
  borderRadius: '5px',
  borderColor: '#1d1e1f',
  boxShadow: 'none',
  margin: '0.8rem',
  maxWidth: '8rem',
  width: '100%',
  cursor: 'pointer',
  transition: 'all .3s ease',
  borderImage: 'none',
  borderStyle: 'solid',
  ':hover': {
    color: 'rgb(29, 131, 161)',
    borderColor: 'rgb(29, 131, 161)',
    transition: 'all .3s ease',
  },
});

export default class Buttons extends Component<Props, any> {
  render() {
    return (
      <div>
        <ButtonStyled onClick={this.props.increment}>PLUS</ButtonStyled>
        <ButtonStyled onClick={this.props.decrement}>MINUS</ButtonStyled>
      </div>
    );
  }
}
