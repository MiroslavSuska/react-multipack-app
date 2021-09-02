import { Component } from 'react';
import { theme } from '../theme';
import React from 'react';
import styled from 'styled-components';

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

  handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
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
        <ButtonDelete onClick={this.handleDeleteItem}>X</ButtonDelete>
      </Li>
    );
  }
}

const Li = styled.li({
  display: 'flex',
  alignContent: 'center',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: 'whitesmoke',
  borderBottom: `1px solid ${theme.listBorderColor}`,
  padding: '0 8px',
  textAlign: 'center',
  minHeight: '50px',
  color: theme.listColor,
  fontSize: '18px',
});

const InputCheckbox = styled.input({
  borderRadius: '50%',
  width: '30px',
  height: '30px',
  cursor: 'pointer',
});

const ButtonDelete = styled.button({
  width: '30px',
  height: '30px',
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  cursor: 'pointer',
  fontWeight: 'bold',
  outline: 'none',
  transition: 'all .3s ease',
  border: `1px solid ${theme.primaryBlue}`,
  color: theme.secondaryDark,
  backgroundColor: theme.primaryBlue,
  ':hover': {
    color: theme.primaryBlue,
    backgroundColor: theme.whiteColor,
    borderColor: theme.primaryBlue,
    transition: 'all .3s ease',
  },
});

const DivText = styled.div({
  width: '80%',
  height: '94%',
  display: 'flex',
  alignItems: 'center',
  padding: '2px 0',
  color: theme.primaryBlue,
  fontWeight: 'bold',
  textAlign: 'left',
});
