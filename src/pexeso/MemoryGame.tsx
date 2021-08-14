import { cards } from './cards';
import { useEffect, useState } from 'react';
import Card from './Card';
import styled from 'styled-components';
import theme from '../theme';

const DivOuter = styled.div({
  marginBottom: '50px',
});

const DivBoard = styled.div({
  maxWidth: '600px',
  display: 'flex',
  flexWrap: 'wrap',
  margin: 'auto',
  padding: '20px',
  justifyContent: 'center',
});

const Button = styled.button({
  color: theme.secondaryDark,
  backgroundColor: theme.whiteColor,
  borderColor: theme.secondaryDark,
  fontSize: '1.2rem',
  fontWeight: 'bold',
  padding: '0.7rem',
  borderRadius: '5px',
  boxShadow: 'none',
  maxWidth: '8rem',
  width: '100%',
  cursor: 'pointer',
  transition: 'all .3s ease',
  borderStyle: 'solid',
  ':hover': {
    color: theme.primaryBlue,
    borderColor: theme.primaryBlue,
    transition: 'all .3s ease',
  },
});

type card = {
  id: number;
  matched: boolean;
  turned: boolean;
  value: number;
  image: string;
};

/*
 * Well optimized shuffle
 * https://bost.ocks.org/mike/shuffle/
 */
const shuffleDeck = function <T>(cards: T[]) {
  let resultArray = [...cards];
  let remaining = resultArray.length;
  let pom1: T | number;
  let pom2: T | number;

  // While there remain elements to shuffle…
  while (remaining) {
    // Pick a remaining element…
    pom2 = Math.floor(Math.random() * remaining--);

    // And swap it with the current element.
    pom1 = resultArray[remaining];
    resultArray[remaining] = resultArray[pom2];
    resultArray[pom2] = pom1;
  }
  return resultArray;
};

export default function MemoryGame() {
  const [deck, setDeck] = useState(shuffleDeck(cards));
  const [chosenCards, setChosenCards] = useState<number[]>([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);

  const turnBack = () => {
    setDeck(prevCards =>
      prevCards.map(card => {
        return { ...card, turned: false };
      })
    );
  };

  const isMatched = (value: number) => {
    return matchedCards.includes(value);
  };

  const checkMatch = () => {
    const [cardA, cardB] = chosenCards;

    if (cardA === cardB) {
      setMatchedCards(prev => [...prev, cardA]);
      setChosenCards([]);
      return;
    } else {
      setChosenCards([]);
      turnBack();
    }
  };

  const handleClick = (clickedCard: { index: number; value: number }) => {
    if (chosenCards.length === 2) return;

    setDeck(prevCards =>
      prevCards.map(card => {
        return card.id === clickedCard.index ? { ...card, turned: !card.turned } : card;
      })
    );

    setChosenCards(prevCards => [...prevCards, clickedCard.value]);
  };

  const checkWin = () => {
    if (matchedCards.length === deck.length / 2) {
      alert('All cards done');
      newGame();
    }
  };

  const newGame = () => {
    setDeck(shuffleDeck(cards));
    setChosenCards([]);
    setMatchedCards([]);
  };

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (chosenCards.length === 2) {
      timeout = setTimeout(() => {
        checkMatch();
      }, 500);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [chosenCards]);

  useEffect(() => {
    checkWin();
  }, [matchedCards]);

  return (
    <DivOuter>
      <h1>Memory game</h1>
      <DivBoard>
        {deck.map(card => (
          <Card
            key={card.id}
            card={card}
            cardClicked={handleClick}
            matched={isMatched(card.value)}
          />
        ))}
      </DivBoard>
      <div>
        <Button onClick={newGame}>New game</Button>
      </div>
    </DivOuter>
  );
}
