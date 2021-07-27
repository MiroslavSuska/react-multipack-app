import { Component } from 'react';
import FilterBar from './FilterBar';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

type State = {
  dataList: {
    id: number;
    text: string;
    isChecked: boolean;
  }[];
};

export default class Todo extends Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      dataList: [
        {
          id: 1,
          text: 'Hello note',
          isChecked: false,
        },
        {
          id: 2,
          text: 'Something here',
          isChecked: false,
        },
      ],
    };
  }

  handleFormCallback = (formData: string) => {
    this.setState(prevState => {
      const newListItem = {
        id: Math.max(...this.state.dataList.map(i => i.id)) + 1,
        text: formData,
        isChecked: false,
      };

      return {
        dataList: [...prevState.dataList, newListItem],
      };
    });
    //console.log(this.state.dataList);
  };

  handleDeleteItem = (id: number) => {
    this.setState({
      dataList: this.state.dataList.filter(item => {
        return item.id !== id;
      }),
    });
  };

  handleCheck = (id: number) => {
    const updatedData = this.state.dataList.map(item => {
      if (item.id === id) {
        item.isChecked = !item.isChecked;
      }
      return item;
    });
    this.setState({
      dataList: updatedData,
    });
  };

  saveNewData = (newData: { id: number; text: string }) => {
    const updatedData = this.state.dataList.map(item => {
      if (item.id === newData.id) {
        item.text = newData.text;
      }
      return item;
    });
    this.setState({
      dataList: updatedData,
    });
  };

  clearFilter = () => {
    this.setState({
      dataList: this.state.dataList.filter(item => {
        return item.isChecked === false;
      }),
    });
  };

  render() {
    return (
      <div>
        <h1>Todo app</h1>
        <TodoForm formCallback={this.handleFormCallback} />
        <TodoList
          dataList={this.state.dataList}
          handleDeleteItem={this.handleDeleteItem}
          handleCheck={this.handleCheck}
          saveNewData={this.saveNewData}
        />
        <FilterBar dataLength={this.state.dataList.length} clearFilter={this.clearFilter} />
      </div>
    );
  }
}
