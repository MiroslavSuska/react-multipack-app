import { Component } from 'react';
import { theme } from '../theme';
import Buttons from './Buttons';

type State = {
  counter: number;
};

export default class Counter extends Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  increment = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1,
    }));
  };

  decrement = () => {
    this.setState(prevState => ({
      counter: prevState.counter - 1,
    }));
  };

  render() {
    return (
      <div>
        <h1>Simple counter app</h1>
        <h1
          style={{
            color:
              this.state.counter > 0
                ? theme.greenColor
                : this.state.counter < 0
                ? theme.redColor
                : theme.secondaryDark,
          }}
        >
          {this.state.counter}
        </h1>
        <Buttons increment={this.increment} decrement={this.decrement} />
      </div>
    );
  }
}
