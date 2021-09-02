import { Component } from 'react';
import { theme } from '../theme';
import styled from 'styled-components';

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

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ text: event.target.value });
  };

  handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
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
          <Input
            type='text'
            onChange={this.handleChange}
            value={this.state.text}
            autoFocus
            placeholder='Your todo note ...'
          />
        </form>
      </div>
    );
  }
}

const Input = styled.input({
  margin: '20px 0',
  width: '100%',
  height: '50px',
  fontSize: '1.2rem',
  padding: '5px 10px',
  borderRadius: '5px',
  border: `2px solid ${theme.secondaryDark}`,
  boxShadow: 'none',
  '@media all and (max-width: 700px)': {
    fontSize: '1rem',
    height: '45px',
  },
});
