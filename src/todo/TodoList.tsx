import { Component } from 'react';
import { theme } from '../theme';
import TodoListItem from './TodoListItem';
import styled from 'styled-components';

type Props = {
  dataList: {
    id: number;
    text: string;
    isChecked: boolean;
  }[];
  handleDeleteItem: (id: number) => void;
  handleCheck: (id: number) => void;
  saveNewData: ({ id: number, text: string }) => void;
};

export default class TodoList extends Component<Props, {}> {
  render() {
    const data = this.props.dataList;

    const listItems = data.map(item => (
      <TodoListItem
        listItem={item}
        key={item.id}
        handleDeleteItem={this.props.handleDeleteItem}
        handleCheck={this.props.handleCheck}
        saveNewData={this.props.saveNewData}
      />
    ));

    return (
      <div>
        <Ul>{listItems}</Ul>
      </div>
    );
  }
}

const Ul = styled.ul({
  listStyleType: 'none',
  textAlign: 'center',
  margin: '30px auto',
  width: '100%',
  padding: '0',
  boxShadow: theme.boxShadowColor,
});
