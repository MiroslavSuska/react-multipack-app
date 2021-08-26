import { theme } from '../theme';
import styled from 'styled-components';

type Props = {
  errorText: string;
};

export const Error = (props: Props) => {
  return <DivError>{props.errorText}</DivError>;
};

const DivError = styled.div({
  margin: '20px auto',
  color: theme.redColor,
  fontWeight: 'bold',
});
