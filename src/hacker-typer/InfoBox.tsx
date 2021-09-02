import { Component } from 'react';
import { theme } from '../theme';
import styled from 'styled-components';

type Props = {
  boxText: string;
};

export default class InfoBox extends Component<Props, {}> {
  render() {
    return (
      <DivBox
        style={{
          color: this.props.boxText === 'green' ? theme.greenColor : theme.hackerRedColor,
          borderColor:
            this.props.boxText === 'green' ? theme.hackerLightGreyColor : theme.hackerRedColor,
          backgroundColor:
            this.props.boxText === 'green' ? theme.hackerDarkGreyColor : theme.hackerDarkRedColor,
        }}
      >
        {this.props.boxText === 'green' ? 'access granted' : 'access denied'}
      </DivBox>
    );
  }
}

const DivBox = styled.div({
  position: 'fixed',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, 0)',
  color: theme.greenColor,
  border: `1px solid ${theme.hackerLightGreyColor}`,
  backgroundColor: theme.hackerDarkGreyColor,
  textAlign: 'center',
  width: '280px',
  padding: '20px',
  fontSize: '2.2rem',
  textTransform: 'uppercase',
  '@media all and (max-width: 700px)': {
    fontSize: '1.5rem',
  },
});
