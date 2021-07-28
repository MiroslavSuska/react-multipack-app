import { Component } from 'react';
import styled from 'styled-components';

const DivBox = styled.div({
  position: 'fixed',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, 0)',
  color: '#00FF00',
  border: '1px solid #999',
  backgroundColor: '#333',
  textAlign: 'center',
  width: '280px',
  padding: '20px',
  fontSize: '2.2rem',
  textTransform: 'uppercase',
});

type Props = {
  boxText: string;
};

export default class InfoBox extends Component<Props, {}> {
  render() {
    return (
      <DivBox
        style={{
          color: this.props.boxText === 'green' ? '#00FF00' : '#f00',
          borderColor: this.props.boxText === 'green' ? '#999' : '#f00',
          backgroundColor: this.props.boxText === 'green' ? '#333' : '#511',
        }}
      >
        {this.props.boxText === 'green' ? 'access granted' : 'access denied'}
      </DivBox>
    );
  }
}
