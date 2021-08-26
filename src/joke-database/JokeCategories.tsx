import { Error } from './Error';
import { Link, Route, BrowserRouter as Router, Switch, useRouteMatch } from 'react-router-dom';
import { Loading } from './Loading';
import { SpecificCategory } from './SpecificCategory';
import { theme } from '../theme';
import { urls } from './configAPI';
import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

type category = {
  categoryName: string;
};

export const JokeCategories = () => {
  const [categories, setCategories] = useState<category[]>([]);
  const [error, setError] = useState(null as null | string);
  const [loading, setLoading] = useState(false);
  let { path, url } = useRouteMatch();

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      try {
        const response = await axios.get<category[]>(urls.categoryJokeURL);
        const data = response.data;
        setCategories(data);
      } catch (error) {
        setError(error);
      }

      setLoading(false);
    };

    fetchCategories();
  }, []);

  return (
    <DivOuter>
      <h2>Categories</h2>

      {error && <Error errorText={error} />}
      {loading && <Loading />}

      <Router>
        <nav>
          <Ul>
            {categories.map((category, index) => (
              <Li key={index}>
                <LinkStyled to={`${url}/${category}`}>{category}</LinkStyled>
              </Li>
            ))}
          </Ul>
        </nav>

        <Switch>
          <Route path={`${path}/:category`} render={() => <SpecificCategory />}></Route>
        </Switch>
      </Router>
    </DivOuter>
  );
};

const DivOuter = styled.div({
  margin: '50px 0',
});

const Ul = styled.ul({
  listStyleType: 'none',
  padding: '0',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
});

const Li = styled.li({
  margin: '5px',
  fontSize: '20px',
});

const LinkStyled = styled(Link)({
  color: theme.whiteColor,
  textDecoration: 'none',
});
