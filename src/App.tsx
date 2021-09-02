import { theme } from './theme';
import styled from 'styled-components';

import { Navigation } from './Navigation';

export default function App() {
  return (
    <DivBody>
      <Navigation />
    </DivBody>
  );
}

const DivBody = styled.div({
  minHeight: '100vh',
  backgroundColor: theme.primaryBlue,
  color: '#1d1e1f',
  padding: '10px',
  fontSize: '18px',
  margin: 0,
  textAlign: 'center',
  h1: {
    color: theme.secondaryDark,
    fontWeight: 'bold',
    marginBottom: '25px',
  },
  h2: {
    color: theme.secondaryDark,
    marginBottom: '20px',
    fontSize: '2.5rem',
  },
  h3: {
    color: theme.secondaryDark,
  },

  ' *, :after, :before': {
    boxSizing: 'border-box',
  },
  '@media all and (max-width: 700px)': {
    h1: {
      fontSize: '1.5rem',
    },

    h2: {
      fontSize: '1.2rem',
    },

    h3: {
      fontSize: '1rem',
    },
  },
});
