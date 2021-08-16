import styled from 'styled-components';
import theme from '../theme';

const DivLoading = styled.div({
  margin: '20px auto',
  color: theme.whiteColor,
  fontWeight: 'bold',
});

export const Loading = () => {
  return <DivLoading> Fetching data ... </DivLoading>;
};
