import { randomJokeURL } from './configAPI';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Error from './Error';
import Loading from './Loading';
import axios from 'axios';
import styled from 'styled-components';
import theme from '../theme';

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

type params = {
  category: string;
};

type joke = {
  categories: string[];
  created_at: string;
  icon_url: string;
  id: string;
  updated_at: string;
  url: string;
  value: string;
};

const NUMBER_OF_SINGLE_CATEGORY_JOKES = 5;

export default function SpecificCategory() {
  const [categoryJokes, setCategoryJokes] = useState<joke[]>([]);
  const [error, setError] = useState(null as null | string);
  const [loading, setLoading] = useState(false);
  const { category } = useParams<params>();

  useEffect(() => {
    setCategoryJokes([]);
    fetchCategoryJokes();
  }, [category]);

  const fetchCategoryJokes = async () => {
    setLoading(true);

    let arrRandomJokes: joke[] = [];
    let fetchTime = 0;
    while (arrRandomJokes.length < NUMBER_OF_SINGLE_CATEGORY_JOKES) {
      fetchTime++;
      if (fetchTime > NUMBER_OF_SINGLE_CATEGORY_JOKES * 2) {
        break;
      }
      await axios
        .get(randomJokeURL + `?category=${category}`)
        .then(res => {
          if (!arrRandomJokes.includes(res.data.value)) {
            arrRandomJokes.push(res.data.value);
          } else return;
        })
        .catch(error => setError(error))
        .finally(() => {
          setError(null);
        });
    }

    setCategoryJokes(arrRandomJokes);
    setLoading(false);
  };

  return (
    <div>
      <h2>{category}</h2>

      {error && <Error errorText={error} />}
      {loading && <Loading />}

      <Ul>
        {categoryJokes.map((joke, index) => (
          <LiJoke key={index}>{joke}</LiJoke>
        ))}
      </Ul>
    </div>
  );
}
