import { ButtonStyled } from '../theme';
import { Component } from 'react';

type Props = {
  increment: () => void;
  decrement: () => void;
};
export default class Buttons extends Component<Props, {}> {
  render() {
    return (
      <div>
        <Button onClick={this.props.increment}>PLUS</Button>
        <Button onClick={this.props.decrement}>MINUS</Button>
      </div>
    );
  }
}

const Button = ButtonStyled;
