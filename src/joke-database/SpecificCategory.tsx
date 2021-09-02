import { Error } from './Error';
import { Loading } from './Loading';
import { theme } from '../theme';
import { urls } from './configAPI';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

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

export const SpecificCategory = () => {
  const [categoryJokes, setCategoryJokes] = useState<joke[]>([]);
  const [errors, setErrors] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const { category } = useParams<params>();

  useEffect(() => {
    setCategoryJokes([]);

    const fetchCategoryJokes = async () => {
      setLoading(true);
      try {
        const arrRandomJokes: joke[] = [];
        let fetchTime = 0;
        while (arrRandomJokes.length < NUMBER_OF_SINGLE_CATEGORY_JOKES) {
          fetchTime++;

          if (fetchTime > NUMBER_OF_SINGLE_CATEGORY_JOKES * 2) {
            break;
          }

          const response = await axios.get<joke>(urls.randomJokeFromCategoryURL(category));
          const data = response.data;

          if (!arrRandomJokes.includes(data)) {
            arrRandomJokes.push(data);
            setCategoryJokes(prev => [...prev, data]);
          }
        }
      } catch (fetchError) {
        setErrors(prev => [...prev, fetchError]);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryJokes();
  }, [category]);

  return (
    <div>
      <h2>{category}</h2>

      {errors.length > 0 && errors.map((error, index) => <Error errorText={error} key={index} />)}
      {loading && <Loading />}

      <Ul>
        {categoryJokes.map((joke, index) => (
          <LiJoke key={index}>{joke.value}</LiJoke>
        ))}
      </Ul>
    </div>
  );
};

const Ul = styled.ul({
  listStyleType: 'square',
  padding: '0',
  maxWidth: '1000px',
  margin: 'auto',
});

const LiJoke = styled.li({
  margin: '10px',
  textAlign: 'left',
  color: theme.whiteColor,
});
