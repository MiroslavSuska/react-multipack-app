import { Component } from 'react';
import styled from 'styled-components';

const Input = styled.input({
  margin: '20px',
  width: '600px',
  height: '50px',
  fontSize: '20px',
  padding: '5px 10px',
  borderRadius: '5px',
  border: '2px solid #1d1e1f',
  boxShadow: 'none',
});

type Props = {
  formCallback: (formData: string) => void;
};

type State = {
  text: string;
};

export default class TodoForm extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  handleChange = (event: any) => {
    this.setState({ text: event.target.value });
  };

  handleSubmit = (event: any) => {
    event.preventDefault();
    if (this.state.text) {
      this.props.formCallback(this.state.text);
      this.resetForm();
    }
  };

  resetForm = () => {
    this.setState({
      text: '',
    });
  };

  render() {
    return (
      <div>
        <form action='' onSubmit={this.handleSubmit}>
          <Input type='text' onChange={this.handleChange} value={this.state.text} autoFocus />
        </form>
      </div>
    );
  }
}
