import { Component } from 'react';
import React from 'react';
import styled from 'styled-components';

const Li = styled.li({
  display: 'flex',
  alignContent: 'center',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: 'whitesmoke',
  borderBottom: '1px solid #757575',
  padding: '0 8px',
  textAlign: 'center',
  height: '50px',
  color: '#484848',
  fontSize: '18px',
});

const InputCheckbox = styled.input({
  borderRadius: '50%',
  width: '30px',
  height: '30px',
  cursor: 'pointer',
});

const Button = styled.button({
  width: '30px',
  height: '30px',
  cursor: 'pointer',
  fontWeight: 'bold',
});

const DivText = styled.div({
  width: '80%',
  height: '94%',
  display: 'flex',
  alignItems: 'center',
  padding: '2px 0',
});

type Props = {
  listItem: {
    id: number;
    text: string;
    isChecked: boolean;
  };
  handleDeleteItem: (id: number) => void;
  handleCheck: (id: number) => void;
  saveNewData: ({ id: number, text: string }) => void;
};

type State = {
  isEditing: boolean;
};

export default class TodoListItem extends Component<Props, State> {
  textRef: React.RefObject<HTMLInputElement>;

  constructor(props: Props) {
    super(props);
    this.state = {
      isEditing: false,
    };
    this.textRef = React.createRef();
  }

  handleCheckbox = () => {
    // this.setState(prevState => ({
    //   isChecked: !prevState.isChecked,
    // }));
    this.props.handleCheck(this.props.listItem.id);
  };

  handleDeleteItem = () => {
    this.props.handleDeleteItem(this.props.listItem.id);
  };

  startEditing = () => {
    this.setState({
      isEditing: true,
    });
    if (this.textRef.current !== null) {
      this.textRef.current.contentEditable = 'true';
      this.textRef.current.focus();
    }
  };

  handleKeyDown = (event: any) => {
    if (this.state.isEditing === true) {
      if (event.key === 'Enter') {
        event.preventDefault();
        this.submitText();
      }
      if (event.key === 'Escape') {
        this.escapeText();
      }
    }
  };

  submitText = () => {
    if (this.textRef.current !== null && this.textRef.current.textContent) {
      this.props.saveNewData({
        id: this.props.listItem.id,
        text: this.textRef.current.textContent,
      });

      this.textRef.current.contentEditable = 'false';
      this.setState({
        isEditing: false,
      });
    }
  };

  escapeText = () => {
    if (this.textRef.current !== null) {
      this.textRef.current.textContent = this.props.listItem.text;

      this.textRef.current.contentEditable = 'false';
      this.setState({
        isEditing: false,
      });
    }
  };

  render() {
    return (
      <Li>
        <InputCheckbox type='checkbox' onClick={this.handleCheckbox} />
        <DivText
          ref={this.textRef}
          style={{
            textDecoration: this.props.listItem.isChecked ? 'line-through' : 'none',
          }}
          onDoubleClick={this.startEditing}
          onKeyDown={this.handleKeyDown}
        >
          {this.props.listItem.text}
        </DivText>
        <Button onClick={this.handleDeleteItem}>X</Button>
      </Li>
    );
  }
}
