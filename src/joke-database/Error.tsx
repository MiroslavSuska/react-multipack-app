import styled from 'styled-components';
import theme from '../theme';

const DivError = styled.div({
  margin: '20px auto',
  color: theme.redColor,
  fontWeight: 'bold',
  //fontSize: '18px',
});

type Props = {
  errorText: string;
};

export default function Error(props: Props) {
  return <DivError>{props.errorText}</DivError>;
}
