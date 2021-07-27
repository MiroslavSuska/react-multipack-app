import { Component } from 'react';
import React from 'react';
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
  formRef: React.RefObject<HTMLInputElement>;
  constructor(props: Props) {
    super(props);
    this.state = {
      text: '',
    };
    this.formRef = React.createRef();
  }

  handleChange = (event: any) => {
    this.setState({ text: event.target.value });
  };

  handleSubmit = (event: any) => {
    event.preventDefault();
    if (this.formRef.current !== null && this.formRef.current.value) {
      this.props.formCallback(this.state.text);
      this.resetForm();
    }
  };

  resetForm = () => {
    this.setState({
      text: '',
    });
    if (this.formRef.current !== null) {
      this.formRef.current.value = '';
    }
  };

  render() {
    return (
      <div>
        <form action='' onSubmit={this.handleSubmit}>
          <Input type='text' onChange={this.handleChange} ref={this.formRef} autoFocus />
        </form>
      </div>
    );
  }
}
