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
    turned: boolean;
    value: number;
  };
  matched: boolean;
  cardClicked: ({ index, value: number }) => void;
};
export default function Card(props: Props) {
  const handleClick = () => {
    if (props.card.turned === false && props.matched === false) {
      props.cardClicked({ index: props.card.id, value: props.card.value });
    }
  };

  return (
    <div onClick={handleClick}>
      {props.card.turned && !props.matched && <Img src={props.card.image} />}
      {!props.card.turned && !props.matched && <Img src={coverFrame} />}
      {props.matched && <DivEmpty />}
    </div>
  );
}
