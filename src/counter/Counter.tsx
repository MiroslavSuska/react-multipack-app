import { Component } from 'react';
import Buttons from './Buttons';

type State = {
  counter: number;
};

export default class Counter extends Component<any, State> {
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
              this.state.counter > 0 ? 'rgb(16 90 16)' : this.state.counter < 0 ? 'red' : 'black',
          }}
        >
          {this.state.counter}
        </h1>
        <Buttons increment={this.increment} decrement={this.decrement} />
      </div>
    );
  }
}
