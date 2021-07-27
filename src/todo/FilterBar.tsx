import { Component } from 'react';
import styled from 'styled-components';

const OuterDiv = styled.div({
  width: '600px',
  margin: 'auto',
  display: 'flex',
  justifyContent: 'space-between',
});

const DivItems = styled.div({
  fontSize: '18px',
  fontWeight: 'bold',
});

const ClearLink = styled.a({
  textDecoration: 'none',
  fontWeight: 'bold',
  fontSize: '18px',
  color: '#1d1e1f',
  transition: 'all .2s ease',
  ':hover': {
    color: 'white',
    transition: 'all .2s ease',
  },
});

type Props = {
  dataLength: number;
  clearFilter: () => void;
};

export default class FilterBar extends Component<Props, {}> {
  clearFilter = () => {
    this.props.clearFilter();
  };

  render() {
    return (
      <OuterDiv>
        <DivItems>
          {`${this.props.dataLength} item${
            this.props.dataLength > 1 || this.props.dataLength < 1 ? 's' : ''
          } left`}
        </DivItems>
        <div>
          <ClearLink href='#' onClick={this.clearFilter}>
            Clear completed items
          </ClearLink>
        </div>
      </OuterDiv>
    );
  }
}
