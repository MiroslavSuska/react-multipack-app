import { Article } from './Article';
import { ArticleList } from './ArticleList';
import { CreateArticle } from './CreateArticle';
import { Link, Route, BrowserRouter as Router, Switch, useRouteMatch } from 'react-router-dom';
import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../theme';

const DivOuter = styled.div({
  marginBottom: '50px',
});

const Ul = styled.ul({
  listStyleType: 'none',
  padding: '0',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
});

const Li = styled.li({
  margin: '12px',
  fontSize: '20px',
});

const LinkStyled = styled(Link)({
  color: theme.whiteColor,
  textDecoration: 'none',
  fontWeight: 'bold',
  transition: 'all .3s ease',
  ':hover': {
    color: theme.secondaryDark,
    transition: 'all .3s ease',
  },
});

type article = {
  id: number;
  author: string;
  title: string;
  slug: string;
  text: string;
};

type BlogContextType = {
  articles: article[];
  setArticles: React.Dispatch<React.SetStateAction<article[]>>;
};

export const BlogContext = React.createContext<BlogContextType>({
  articles: [],
  setArticles: () => {},
});

export const MarkdownBlog = () => {
  /*
   * Inspiration: https://usehooks.com/useLocalStorage/
   */
  const useLocalStorage = <T,>(key: string, initialValue: T) => {
    const [storedValue, setStoredValue] = useState<T>(() => {
      try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        return initialValue;
      }
    });

    const setValue = (value: T | ((val: T) => T)) => {
      try {
        const valueToStore = value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore);
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {}
    };
    return [storedValue, setValue] as const;
  };

  const [articles, setArticles] = useLocalStorage('articles', [
    {
      id: 0,
      author: 'Unnamed author',
      title: 'Testing context',
      slug: 'testing-context',
      text: 'Markdown blog to learn context in React ...',
    },
  ]);

  return (
    <BlogContext.Provider value={{ articles, setArticles }}>
      <DivOuter>
        <h1>Markdown blog</h1>
        <Router basename='/markdownblog'>
          <nav>
            <Ul>
              <Li>
                <LinkStyled to='/'>Articles</LinkStyled>
              </Li>
              <Li>
                <LinkStyled to='/article-create'>Create article</LinkStyled>
              </Li>
            </Ul>
          </nav>

          <Switch>
            <Route exact path='/'>
              <ArticleList />
            </Route>
            <Route exact path='/article-create'>
              <CreateArticle />
            </Route>
            {articles.map((article, index) => (
              <Route exact key={article.id} path={`/article/${article.id}`}>
                <Article article={article} />
              </Route>
            ))}
          </Switch>
        </Router>
      </DivOuter>
    </BlogContext.Provider>
  );
};
