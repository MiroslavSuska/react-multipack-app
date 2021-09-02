import { Component } from 'react';
import { theme } from '../theme';
import gitPic from './GitHub.png';
import styled from 'styled-components';

export default class Home extends Component<any, any> {
  render() {
    return (
      <DivContainer>
        <h1>Welcome</h1>
        <H3>
          In this multi-react application you can find several react projects created during ITA
          trainee program. Down below is a link to GitHub source code.{' '}
        </H3>

        <LinkGit href='https://github.com/MiroslavSuska/react-multipack-app'>
          <img src={gitPic} alt='GitHub' />
        </LinkGit>
      </DivContainer>
    );
  }
}

const Ul = styled.ul({
  listStyleType: 'none',
  textAlign: 'center',
  display: 'flex',
  flexWrap: 'wrap',
  li: {
    width: '50%',
    padding: '20px',
  },
  h2: {
    color: theme.whiteColor,
  },
  p: {
    fontWeight: 'bold',
    color: theme.whiteColor,
  },
  '@media all and (max-width: 600px)': {
    padding: 0,
    li: {
      width: '100%',
      padding: '5px',
    },
  },
  '@media all and (max-width: 500px)': {
    li: {
      padding: 0,
    },
  },
});

const DivContainer = styled.div({
  maxWidth: '900px',
  width: '100%',
  margin: 'auto',
});

const H3 = styled.h3({
  color: theme.secondaryDark,
  margin: '50px',
});

const LinkGit = styled.a({
  width: '100px',
  height: '120px',
});
