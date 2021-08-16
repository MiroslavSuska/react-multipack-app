import { randomJokeURL } from './configAPI';
import { useEffect, useState } from 'react';
import Error from './Error';
import JokeCategories from './JokeCategories';
import Loading from './Loading';
import axios from 'axios';
import styled from 'styled-components';
import theme from '../theme';

const DivRandomJokes = styled.div({
  marginBottom: '40px',
  position: 'relative',
});

const Ul = styled.ul({
  listStyleType: 'square',
  padding: '0',
  maxWidth: '1000px',
  margin: 'auto',
});

const LiJoke = styled.li({
  margin: '10px',
  textAlign: 'left',
});

type joke = {
  categories: string[];
  created_at: string;
  icon_url: string;
  id: string;
  updated_at: string;
  url: string;
  value: string;
};

const NUMBER_OF_RANDOM_JOKES = 20;

export default function JokeAPI() {
  const [randomJokes, setRandomJokes] = useState<joke[]>([]);
  const [error, setError] = useState(null as null | string);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchRandomJokes();
  }, []);

  const fetchRandomJokes = async () => {
    setLoading(true);
    let arrRandomJokes: joke[] = [];
    while (arrRandomJokes.length < NUMBER_OF_RANDOM_JOKES) {
      try {
        let response = await axios.get(randomJokeURL);
        let data = await response.data;
        if (!arrRandomJokes.includes(data)) {
          arrRandomJokes.push(data);
        }
      } catch (error) {
        setError(error);
      } finally {
        setError(null);
      }
    }
    setRandomJokes(arrRandomJokes);
    setLoading(false);
  };
  return (
    <DivRandomJokes>
      <h1>Chuck Norris joke API </h1>
      <h2>Random jokes:</h2>

      {error && <Error errorText={error} />}
      {loading && <Loading />}

      <Ul>
        {randomJokes.map((joke, index) => (
          <LiJoke key={index}>{joke.value}</LiJoke>
        ))}
      </Ul>

      <JokeCategories />
    </DivRandomJokes>
  );
}
