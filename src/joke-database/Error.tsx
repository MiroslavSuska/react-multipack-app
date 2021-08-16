import styled from 'styled-components';
import theme from '../theme';

const DivError = styled.div({
  margin: '20px auto',
  color: theme.redColor,
  fontWeight: 'bold',
});

type Props = {
  errorText: string;
};

export const Error = (props: Props) => {
  return <DivError>{props.errorText}</DivError>;
};
