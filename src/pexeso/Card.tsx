import { useEffect, useState } from 'react';
import coverFrame from './img/cover.jpg';
import styled from 'styled-components';
import theme from '../theme';

const Img = styled.img({
  width: '120px',
  height: '120px',
  boxSizing: 'border-box',
  border: `4px solid ${theme.blackColor}`,
  cursor: 'pointer',
  margin: '4px',
});

const DivEmpty = styled.div({
  width: '120px',
  height: '120px',
  margin: '4px',
  backgroundColor: theme.transparent,
});

type Props = {
  card: {
    id: number;
    image: string;
    matched: boolean;
    value: number;
  };
  shouldTurnBack: boolean;
  disabled: boolean;
  matched: boolean;
  cardClicked: ({ index, value: number, turned: boolean }) => void;
};
export default function Card(props: Props) {
  const [turned, setTurned] = useState(false);
  const handleClick = () => {
    if (turned === false && props.disabled === false) {
      setTurned(true);
      props.cardClicked({ index: props.card.id, value: props.card.value, turned });
    }
  };

  useEffect(() => {
    setTurned(false);
  }, [props.shouldTurnBack]);

  return (
    <div onClick={handleClick}>
      {turned && !props.matched && <Img src={props.card.image} />}
      {!turned && !props.matched && <Img src={coverFrame} />}
      {props.matched && <DivEmpty />}
    </div>
  );
}
