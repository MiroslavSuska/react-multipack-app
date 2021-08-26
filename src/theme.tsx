import styled from 'styled-components';

export const theme = {
  primaryBlue: 'rgb(29, 131, 161)',
  secondaryDark: '#1d1e1f',
  whiteColor: 'white',
  blackColor: 'black',
  redColor: 'red',
  hackerGreenColor: '#00FF00',
  hackerLightGreyColor: '#999',
  hackerDarkGreyColor: '#333',
  hackerRedColor: '#f00',
  hackerDarkRedColor: '#511',
  boxShadowColor: 'rgba(58, 58, 58, 0.2) 0px 7px 29px 0px',
  listBorderColor: '#757575',
  listColor: '#484848',
  transparent: 'transparent',
  boardSize: '500px',
  squareSize: '50px',
};

export const ButtonStyled = styled.button({
  color: theme.secondaryDark,
  backgroundColor: theme.whiteColor,
  borderColor: theme.secondaryDark,
  fontSize: '1.2rem',
  fontWeight: 'bold',
  padding: '0.7rem',
  borderRadius: '5px',
  boxShadow: 'none',
  maxWidth: '10rem',
  width: '100%',
  cursor: 'pointer',
  transition: 'all .3s ease',
  borderStyle: 'solid',
  margin: '2rem',
  ':hover': {
    color: theme.primaryBlue,
    borderColor: theme.primaryBlue,
    transition: 'all .3s ease',
  },
  '@media all and (max-width: 700px)': {
    fontSize: '1rem',
    padding: '0.6rem',
    margin: '1rem',
    maxWidth: '8rem',
  },
});
