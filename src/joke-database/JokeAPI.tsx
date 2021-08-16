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
  const [errors, setErrors] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchRandomJokes();
  }, []);

  const fetchRandomJokes = async () => {
    setLoading(true);
    let arrRandomJokes: joke[] = [];
    while (arrRandomJokes.length < NUMBER_OF_RANDOM_JOKES) {
      try {
        const response = await axios.get<joke>(randomJokeURL);
        const data = response.data;
        if (!arrRandomJokes.includes(data)) {
          arrRandomJokes.push(data);
        }
      } catch (fetchError) {
        setErrors([...errors, fetchError]);
      }
    }
    setRandomJokes(arrRandomJokes);
    setLoading(false);
  };
  return (
    <DivRandomJokes>
      <h1>Chuck Norris joke API </h1>
      <h2>Random jokes:</h2>

      {errors.length > 0 && errors.map((error, index) => <Error errorText={error} key={index} />)}
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
