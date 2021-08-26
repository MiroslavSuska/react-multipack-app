import { theme } from '../theme';
import styled from 'styled-components';

export const Loading = () => {
  return <DivLoading> Fetching data ... </DivLoading>;
};

const DivLoading = styled.div({
  margin: '20px auto',
  color: theme.whiteColor,
  fontWeight: 'bold',
});
