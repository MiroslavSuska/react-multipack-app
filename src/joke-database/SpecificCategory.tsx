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
  const [categoryJokes, setCategoryJokes] = useState<string[]>([]);
  const [errors, setErrors] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const { category } = useParams<params>();

  useEffect(() => {
    setCategoryJokes([]);
    fetchCategoryJokes();
  }, [category]);

  const fetchCategoryJokes = async () => {
    setLoading(true);
    try {
      let arrRandomJokes: string[] = [];
      let fetchTime = 0;
      while (arrRandomJokes.length < NUMBER_OF_SINGLE_CATEGORY_JOKES) {
        fetchTime++;

        if (fetchTime > NUMBER_OF_SINGLE_CATEGORY_JOKES * 2) {
          break;
        }

        const response = await axios.get<joke>(randomJokeURL + `?category=${category}`);
        const data = response.data;

        if (!arrRandomJokes.includes(data.value)) {
          arrRandomJokes.push(data.value);
          setCategoryJokes([...arrRandomJokes]);
        } else return;
      }
    } catch (fetchError) {
      setErrors([...errors, fetchError]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>{category}</h2>

      {errors.length > 0 && errors.map((error, index) => <Error errorText={error} key={index} />)}
      {loading && <Loading />}

      <Ul>
        {categoryJokes.map((joke, index) => (
          <LiJoke key={index}>{joke}</LiJoke>
        ))}
      </Ul>
    </div>
  );
}
