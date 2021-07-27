import { Component } from 'react';
import TodoListItem from './TodoListItem';
import styled from 'styled-components';

const Ul = styled.ul({
  listStyleType: 'none',
  textAlign: 'center',
  margin: '30px auto',
  width: '600px',
  padding: '0',
  boxShadow: 'rgba(58, 58, 58, 0.2) 0px 7px 29px 0px',
});

type Props = {
  dataList: {
    id: number;
    text: string;
    isChecked: boolean;
  }[];
  handleDeleteItem: any;
  handleCheck: any;
  saveNewData: any;
};

export default class TodoList extends Component<Props, {}> {
  render() {
    var data = this.props.dataList;

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
