import { Link, Route, BrowserRouter as Router, Switch, useRouteMatch } from 'react-router-dom';
import { categoryJokeURL } from './configAPI';
import { useEffect, useState } from 'react';
import Error from './Error';
import SpecificCategory from './SpecificCategory';
import axios from 'axios';
import styled from 'styled-components';
import theme from '../theme';

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

type category = {
  categoryName: string;
};

export default function JokeCategories() {
  const [categories, setCategories] = useState<category[]>([]);
  const [error, setError] = useState(null as null | string);
  let { path, url } = useRouteMatch();

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      let response = await axios.get(categoryJokeURL);
      let data = await response.data;
      setCategories(data);
    } catch (error) {
      setError(error);
    } finally {
      setError(null);
    }
  };

  return (
    <DivOuter>
      <h2>Categories</h2>

      {error && <Error errorText={error} />}

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
}
