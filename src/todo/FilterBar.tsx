import { Component } from 'react';
import { theme } from '../theme';
import styled from 'styled-components';

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
          {this.props.dataLength} item
          {this.props.dataLength === 1 ? '' : 's'} left
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

const OuterDiv = styled.div({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
});

const DivItems = styled.div({
  fontSize: '18px',
  fontWeight: 'bold',
  color: theme.whiteColor,
});

const ClearLink = styled.a({
  textDecoration: 'none',
  fontWeight: 'bold',
  fontSize: '18px',
  color: theme.secondaryDark,
  transition: 'all .2s ease',
  ':hover': {
    color: theme.whiteColor,
    transition: 'all .2s ease',
  },
});
